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
using System.Globalization;
//using System.Threading.Tasks;
using UnityEngine;
using UnityEngine.Networking;

namespace Esri.PrototypeLab.HoloLens.Unity {

    public static class SuggestionToGeocode {

        private const string URL = "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer";
        private const int max_suggestion = 10;

        public static IEnumerator suggestionToGeocode(SuggestAddresses suggestaddress, Action<SuggestionLocation[]> callback) {
            string url = string.Format("{0}/findAddressCandidates?magicKey={1}&f=json", new object[] {
                URL,
                suggestaddress.magicKey,
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
            var candidates = json["candidates"];

            SuggestionLocation[] suggestLocations = new SuggestionLocation[candidates.Count];

            for (int i = 0; i < candidates.Count; i++)
            {

                suggestLocations[i] = new SuggestionLocation();
                suggestLocations[i].Location = new Coordinate();

                suggestLocations[i].address = candidates[i]["address"].Value;

                float f = float.Parse(candidates[i]["location"]["x"].Value, CultureInfo.InvariantCulture.NumberFormat);

                suggestLocations[i].Location.Longitude = float.Parse(candidates[i]["location"]["x"].Value, CultureInfo.InvariantCulture.NumberFormat);
                suggestLocations[i].Location.Latitude = float.Parse(candidates[i]["location"]["y"].Value, CultureInfo.InvariantCulture.NumberFormat);
                suggestLocations[i].score = candidates[i]["score"].Value;
            }

            callback(suggestLocations);

        }
    }
}
