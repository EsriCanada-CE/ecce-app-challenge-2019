/*
    Copyright 2016 Esri

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.

    You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

using SimpleJSON;
using System;
using System.Collections;
//using System.Threading.Tasks;
using UnityEngine;
using UnityEngine.Networking;

namespace Esri.PrototypeLab.HoloLens.Unity {

    public static class GeocodeSuggestion {

        private const string URL = "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer";
        private const int max_suggestion = 10;

        public static IEnumerator GetSuggestGeocode(string keyword, Coordinate coordinate, Action<SuggestAddresses[]> callback) {
            string url = string.Format("{0}/suggest?text={1}&location={2},{3}&f=json", new object[] {
                URL,
                keyword,
                coordinate.Longitude,
                coordinate.Latitude,
                max_suggestion,
            });

            UnityWebRequest www = UnityWebRequest.Get(url);
            yield return www.SendWebRequest();


            // Extract token from parsed response
            var text = www.downloadHandler.text.Replace(":null", ":\"\"");
            var json = JSON.Parse(text);
            if (json.ContainsKey("error")) {
                callback(null);
                yield break;
            }
            var suggestions = json["suggestions"];

            SuggestAddresses[] suggestAddresses = new SuggestAddresses[suggestions.Count];

            for (int i = 0; i < suggestions.Count; i++)
            {
                if (suggestions[i]["isCollection"].Value.Equals("true")){
                    suggestAddresses[i] = new SuggestAddresses();
                    suggestAddresses[i].address = suggestions[i]["text"].Value;
                    suggestAddresses[i].magicKey = suggestions[i]["magicKey"].Value;                 
                }
            }        
            callback(suggestAddresses);         
        }
    }
}
