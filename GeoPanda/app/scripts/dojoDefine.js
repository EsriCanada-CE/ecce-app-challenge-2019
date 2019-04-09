define([
    // Map definitions
    "scripts/mapConfig.js",

    "esri/map",
    "esri/dijit/Search",
    "esri/layers/FeatureLayer",
    "esri/dijit/Legend",
    "esri/dijit/LayerList",
    "esri/dijit/Popup",
    "esri/dijit/PopupTemplate",
    "esri/dijit/Scalebar",
    "esri/dijit/HomeButton",
    "esri/dijit/OverviewMap",

    "esri/symbols/SimpleFillSymbol",
    "esri/Color",
    
    "dijit/TooltipDialog",
    "dijit/popup",

    "dojo/dom",
    "dojo/dom-class",
    "dojo/dom-construct",
    "dojo/dom-style",
    "dojo/on",
    "dojo/_base/array",
    'dojo/domReady!'
], function (mapConfig,
        Map, Search, FeatureLayer, Legend, LayerList, PopUp, PopupTemplate,
        Scalebar, HomeButton, OverviewMap, 
        SimpleFillSymbol, Color,
        TooltipDialog, popup, 
        dom, domClass, domConstruct, domStyle, on, arrayUtils) {

    var app;

    // Widgets
    var legend;
    var layerList;

    var activeMap;
    
    // Map definitions 
    var ecoMap = mapConfig.ecoMap;
    var envMap = mapConfig.envMap;
    var socMap = mapConfig.socMap;
    var sumMap = mapConfig.sumMap;

    return {
        initApp: initApp,
        loadEcoMap: loadEcoMap,
        loadEnvMap: loadEnvMap,
        loadSocMap: loadSocMap,
        loadSumMap: loadSumMap,
        updBuildings: updBuildings
    };

    function initApp() {
        
        app = {
            map: null,
            basemap: "gray",
            center: [-63.57, 44.7], // centre on Halifax
            zoom: 11,
            initialExtent: null,
            searchWidgetNav: null,
            searchWidgetPanel: null
        };
        
        // Popup
        var fill = new SimpleFillSymbol("solid", null, new Color("#A4CE67"));
        var mapPopup = new PopUp({
          fillSymbol: fill
        }, domConstruct.create("div"));
        domClass.add(mapPopup.domNode, "purpleGreen");

        // Map
        app.map = new Map("mapViewDiv", {
            logo: false,
            basemap: app.basemap,
            center: app.center,
            zoom: app.zoom,
            infoWindow: mapPopup
        });

        app.map.on("load", function () {
            app.initialExtent = app.map.extent;
        });

        // Widgets
        app.searchDivNav = createSearchWidget("searchNavDiv");
        
        createHomeButton();
        createScalebar();

        legend = new Legend({
            map: app.map
        }, "legendDiv");

        layerList = new LayerList({
            map: app.map
        }, "layerListDiv");
        layerList.startup();

        // Initialize tooltips for map view buttons
        initTooltip(ecoMap.buttonId, ecoMap.tooltipText);
        initTooltip(envMap.buttonId, envMap.tooltipText);
        initTooltip(socMap.buttonId, socMap.tooltipText);
        initTooltip(sumMap.buttonId, sumMap.tooltipText);

        // Initialize feature layers
        ecoMap.init(app);
        envMap.init(app);
        socMap.init(app);
        sumMap.init(app);
        
        // Create popup template for buildings
        var template = new PopupTemplate({
            title: "{LABEL}",
            description: "Type of Facility:  {FCODE} <br>Facility Location: {LocationClass}"    
        });
        sumMap.layers[4].infoTemplate = template;

        // Load the summary map
        activeMap = sumMap;
        loadSumMap();

        return app;
    }

    /*
     * Create the search widget
     */
    function createSearchWidget(parentId) {
        var search = new Search({
            map: app.map,
            enableHighlight: false
        }, parentId);
        search.startup();
        return search;
    }

    /*
    *Create the home button widget
    */
    function createHomeButton() {
        var home = new HomeButton({
            map: app.map
        }, "HomeButton");
        home.startup();
    }
    ;

    /*
    * Create the scalebar widget
    */
    function createScalebar(){
          var scalebar = new Scalebar({
            map: app.map,
            scalebarUnit: "metric"
          });
      }

    /*
     * Load a map when button is clicked
     */
    // load economic factors map
    function loadEcoMap() {
        loadMap(ecoMap);
        legend.refresh(ecoMap.layerInfo);
        layerList.layers = ecoMap.layerInfo;
        layerList.refresh();
    }
    // load environmental factors map
    function loadEnvMap() {
        loadMap(envMap);
        legend.refresh(envMap.layerInfo);
        layerList.layers = envMap.layerInfo;
        layerList.refresh();
    }
    // load social factors map
    function loadSocMap() {
        loadMap(socMap);
        legend.refresh(socMap.layerInfo);
        layerList.layers = socMap.layerInfo;
        layerList.refresh();
    }
    // load summary map
    function loadSumMap() {
        loadMap(sumMap);
        legend.refresh(sumMap.layerInfo);
        layerList.layers = sumMap.layerInfo;
        layerList.refresh();
    }

    /*
     * Load given map and update the buttons
     */
    function loadMap(map) {
        // Hide existing layers
        for (var i=0; i<activeMap.layers.length; i++) {
            activeMap.layers[i].hide();
            activeMap.layerInfo[i].visibility = activeMap.defaultView[i];
        }

        // Display thematic layers
        for (var i=0; i<map.layers.length; i++) {
            if (map.layerInfo[i].visibility) {
                map.layers[i].show();
            }
            //map.layerInfo[i].visibility = true; //TODO
        }
        
        // Update info text
        dom.byId("aboutText").innerHTML = map.aboutText;
        
        // Hide or show dropdown for community resources
        if (activeMap.buttonId == "sumMapBtn") {
            domStyle.set(dom.byId("bldgTypeDiv"), "display", "none");
        }
        if (map.buttonId == "sumMapBtn") {
            domStyle.set(dom.byId("bldgTypeDiv"), "display", "inline");
        }

        // Update map buttons and title
        resetPrevActive();
        var button = dom.byId(map.buttonId);
        button.disabled = true;
        domStyle.set(dom.byId(map.titleId), "display", "inline");

        var btnImg = button.children[0];
        domStyle.set(btnImg, "background-color", "#51655A");
        btnImg.src = map.imgEnabled;

        activeMap = map;
    }
    
    /*
     * Reset the last active map button
     */
    function resetPrevActive() {
        var button = dom.byId(activeMap.buttonId);
        button.disabled = false;
        
        var btnImg = button.children[0];
        domStyle.set(btnImg, "background-color", "#644356");
        btnImg.src = activeMap.imgDisabled;
        
        domStyle.set(dom.byId(activeMap.titleId), "display", "none");
    }

    /*
     * Initialize a tooltip dialogue box
     * Reference: https://dojotoolkit.org/reference-guide/1.10/dijit/TooltipDialog.html
     */
    function initTooltip(buttonId, text) {
        var button = dom.byId(buttonId);
        var tooltip = new TooltipDialog({
            id: buttonId,
            style: "width: 300px;",
            content: text,
            onMouseLeave: function() {
                popup.close(tooltip);
            }
        });
        on(button, 'mouseover', function() {
            popup.open({
                popup: tooltip,
                around: button
            });
        });
        on(button, 'mouseleave', function() {
            popup.close(tooltip);
        });
    }
    
    /*
     * Update buildings layer to display a subset of the date when
     * dropdown is clicked
     */
    function updBuildings() {
        var buildingsLayer = sumMap.layers[4];
        var currentBldgs = dom.byId('bldgType').value;

        var query;
        if (currentBldgs == "0") {
            console.log("all!");
            query = '';
        } else {
            query = 'LocationClass = ' + "'" + currentBldgs + "'";
        }
        buildingsLayer.setDefinitionExpression(query);
        buildingsLayer.refresh();
    }
    
});
