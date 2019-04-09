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

    public static class GeocodeCherryBlossom {

        //private const string URL = "http://vicmap.victoria.ca/arcgis/rest/services/OpenData/OpenData_Parks/MapServer/15/query?where=CommonName=%27Japanese%20flowering%20cherry%27&outFields=FullAddress,CommonName,BlossomDateStart,BlossomDateEnd&outSR=4326&f=json";
        private const string URL = "http://vicmap.victoria.ca/arcgis/rest/services/OpenData/OpenData_Parks/MapServer/15/query?where=CommonName=%27cherry%20plum%27%20OR%20CommonName=%27Japanese%20flowering%20cherry%27&outFields=FullAddress,CommonName,BlossomDateStart,BlossomDateEnd&outSR=4326&f=json";
        private const int max_suggestion = 10;

        public static IEnumerator GetCherryBlossomLocation(Action<CherryBlossomLocation[]> callback) {

            UnityWebRequest www = UnityWebRequest.Get(URL);
            yield return www.SendWebRequest();


            // Extract token from parsed response
            var text = www.downloadHandler.text.Replace(":null", ":\"\"");
            var json = JSON.Parse(text);
            if (json.ContainsKey("error")) {
                callback(null);
                yield break;
            }
            var features = json["features"];

            CherryBlossomLocation[] locations = new CherryBlossomLocation[features.Count];

            for (int i = 0; i < features.Count; i++)
            {
                if (features[i]["attributes"]["CommonName"].ToString().Contains("cherry"))
                {
                    locations[i] = new CherryBlossomLocation();
                    locations[i].address = features[i]["attributes"]["FullAddress"].Value;
                    locations[i].Location = new Coordinate();
                    locations[i].Location.Longitude = float.Parse(features[i]["geometry"]["x"].Value);
                    locations[i].Location.Latitude = float.Parse(features[i]["geometry"]["y"].Value);
                    locations[i].StartDate = features[i]["attributes"]["BlossomDateStart"].Value;
                    locations[i].EndDate = features[i]["attributes"]["BlossomDateEnd"].Value;
                }       
            }        
            callback(locations);         
        }
    }
}
