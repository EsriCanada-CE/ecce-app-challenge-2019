/* 
 * Define all parameters required for each of the four
 * map displays
 */

define(["esri/layers/FeatureLayer"
], function(FeatureLayer) {
    
    var baseUrl = "https://services9.arcgis.com/2iQKcyin67PA7qEr/arcgis/rest/services";
    
    var ecoMap = {
        layers: [],
        layerInfo: [],
        urls: [baseUrl + "/GroupedRankings/FeatureServer/0", //Economic summary
               baseUrl + "/CensusDataRanked/FeatureServer/3", //Not driving to work
               baseUrl + "/CensusDataRanked/FeatureServer/1", //Unemployment rate
               baseUrl + "/CensusDataRanked/FeatureServer/0" //Avg HH Income
              ],
        buttonId: "ecoMapBtn",
        titleId: "ecoTitle",
        imgEnabled: "images/EconomicG.png",
        imgDisabled: "images/EconomicP.png",
        init: function(app) {
            initLayers(this,app);
            this.layerInfo = [{layer:this.layers[0],title:"Summary",visibility:true},
                              {layer:this.layers[1],title:"Transit",visibility:false},
                              {layer:this.layers[2],title:"Unemployment",visibility:false},
                              {layer:this.layers[3],title:"Income",visibility:false}
                             ];
        },
        defaultView: [true,false,false,false],
        tooltipText: "<strong>Economic Factors</strong>",
        aboutText: "<h3>Economic</h3>"+
                   "<p>The Economic Summary shows the combined ranking of three economic indicators:<ul>"+
                   "<li>Income - Average household income</li>"+
                   "<li>Unemployment - Unemployment rate</li>"+
                   "<li>Transit - Percentage of people taking public transit or active transit to work</li>"+
                   "</ul>Please click on the layer list in order to toggle on and off each of these individual indicators, as well as the summary layer.</p>"
    };
    
    var envMap = {
        layers: [],
        layerInfo: [],
        urls: [baseUrl + "/GroupedRankings/FeatureServer/1", //Enviro summary
               baseUrl + "/Envrio_ClippedStuff/FeatureServer/0", //Water
               baseUrl + "/Envrio_ClippedStuff/FeatureServer/1" //Parks
              ],
        buttonId: "envMapBtn",
        titleId: "envTitle",
        imgEnabled: "images/EnviroG.png",
        imgDisabled: "images/EnviroP.png",
        init: function(app) {
           
            initLayers(this,app);
            this.layerInfo = [{layer:this.layers[0],title:"Summary",visibility:true},
                              {layer:this.layers[1],title:"Water",visibility:false},
                              {layer:this.layers[2],title:"Parks",visibility:false}
                             ];
        },
        defaultView: [true,false,false],
        tooltipText: "<strong>Environmental Factors</strong>",
        aboutText: "<h3>Environmental</h3><p>"+
                   "This Environmental Summary shows the combined ranking two environmental indicators:<ul>"+
                   "<li>Parks - Percentage of each dissemination area covered by parks</li>"+
                   "<li>Water - Percentage of each dissemination area covered by water</li>"+
                   "</ul>Please click on the layer list in order to toggle on and off each of these individual indicators, as well as the summary layer.</p>"
    };
    
    var socMap = {
        layers: [],
        layerInfo: [],
        urls: [baseUrl + "/GroupedRankings/FeatureServer/2", //Social summary
               baseUrl + "/CensusDataRanked/FeatureServer/5", //Pop dens
               baseUrl + "/CensusDataRanked/FeatureServer/4", //Postsecondary
               baseUrl + "/CensusDataRanked/FeatureServer/2" //Housing spending
              ],
        buttonId: "socMapBtn",
        titleId: "socTitle",
        imgEnabled: "images/SocialG.png",
        imgDisabled: "images/SocialP.png",
        init: function(app) {
            initLayers(this,app);
            this.layerInfo = [{layer:this.layers[0],title:"Summary",visibility:true},
                              {layer:this.layers[1],title:"Population",visibility:false},
                              {layer:this.layers[2],title:"Education",visibility:false},
                              {layer:this.layers[3],title:"Housing",visibility:false}
                             ];
        },
        defaultView: [true,false,false,false],
        tooltipText: "<strong>Social Factors</strong>",
        aboutText: "<h3>Social</h3>"+
                   "<p>The Social Summary shows the combined ranking of three social indicators:"+
                   "<ul><li>Housing - Percentage of people who spend over 30% of their income on shelter</li>"+
                   "<li>Education - Percentage of people who have completed a post-secondary degree</li>"+
                   "<li>Population - Population density</li>"+
                   "</ul>Please click on the layer list in order to toggle on and off each of these individual indicators, as well as the summary layer.</p>"
    };
    
    var sumMap = {
        layers: [],
        layerInfo: [],
        urls: [baseUrl + "/GroupedRankings/FeatureServer/3", //Overall summary
               baseUrl + "/GroupedRankings/FeatureServer/2", //Social summary
               baseUrl + "/GroupedRankings/FeatureServer/1", //Env summary
               baseUrl + "/GroupedRankings/FeatureServer/0",  //Eco summary
               baseUrl + "/AllPoints/FeatureServer/0" //Buildings
              ],
        buttonId: "sumMapBtn",
        titleId: "sumTitle",
        imgEnabled: "images/SummaryG.png",
        imgDisabled: "images/SummaryP.png",
        init: function(app) {
            initLayers(this,app);
            this.layerInfo = [{layer:this.layers[0],title:"Summary",visibility:true},
                              {layer:this.layers[1],title:"Social Factors",visibility:false},
                              {layer:this.layers[2],title:"Environmental Factors",visibility:false},
                              {layer:this.layers[3],title:"Economic Factors",visibility:false},
                              {layer:this.layers[4],title:"Community Resources",visibility:true}
                             ];
        },
        defaultView: [true,false,false,false,true],
        tooltipText: "<strong>Summary</strong>",
        aboutText: "<h3>Summary</h3>"+
                   "<p>The Summary shows the combined ranking of the three categories of indicators "+
                   "- Economic, Environmental and Social - to give an overall sustainability ranking for Halifax. Each of the individual category summary layers are available in the layer tab.</p>"+
                   "<p>Use the dropdown menu below to show places where you can learn more about sustainability or get involved in making your community more sustainable!</p>"
    };
    
    return {
        ecoMap: ecoMap,
        envMap: envMap,
        socMap: socMap,
        sumMap: sumMap
    };
    
    /*
     * Initialize all layers for a map view, and add them
     * to the map as invisible
     */
    function initLayers(map, app) {
        for (var i = 0; i < map.urls.length; i++) {
            var layer = FeatureLayer(map.urls[i], {
                mode: FeatureLayer.MODE_ONDEMAND,
                outFields: ["*"],
                visible: false
            });
            map.layers[i] = layer;
        }
        app.map.addLayers(map.layers);
    }
});