var totalDriveTime = 0;
var totalLength = 0;

require([
    "esri/Map",
    "esri/views/MapView",
    "esri/Graphic",
    "esri/tasks/RouteTask",
    "esri/tasks/support/RouteParameters",
    "esri/tasks/support/FeatureSet",
    "esri/widgets/Home",
    "esri/widgets/Locate",
    "esri/widgets/Search",
    "esri/widgets/BasemapToggle",
    "esri/widgets/Sketch/SketchViewModel",
    "esri/layers/GraphicsLayer",
], function (Map, MapView, Graphic, RouteTask, RouteParameters, FeatureSet, Home, Locate, Search, BasemapToggle,
    SketchViewModel, GraphicsLayer) {
    loadCSV();

    // GraphicsLayer to hold graphics created via sketch view model
    var tempGraphicsLayer = new GraphicsLayer(); //home
    var tempGraphicsLayer2 = new GraphicsLayer(); //dest

    var map = new Map({
        basemap: "streets-navigation-vector",
        layers: [tempGraphicsLayer, tempGraphicsLayer2]
    });

    var view = new MapView({
        container: "viewDiv",
        map: map,
        center: [-79.5, 43.77],
        zoom: 12
    });

    var homeWidget = new Home({
        view: view
    });
    // adds the home widget to the top left corner of the MapView
    view.ui.add(homeWidget, "top-left");

    var locateWidget = new Locate({
        view: view, // Attaches the Locate button to the view
        graphic: new Graphic({
            symbol: {
                type: "simple-marker"
            } // overwrites the default symbol used for the
            // graphic placed at the location of the user when found
        })
    });
    view.ui.add(locateWidget, "top-left");

    var searchWidget = new Search({
        view: view
    });
    // Adds the search widget below other elements in
    // the top left corner of the view
    view.ui.add(searchWidget, {
        position: "top-left",
        index: 0
    });

    // Basemap events
    $("#selectBasemapPanel").on("change", function (e) {
        map.basemap = e.target.options[e.target.selectedIndex].dataset.vector;
    });


    // Create a new SketchViewModel and set
    // its required parameters
    var sketchVHomeM = new SketchViewModel({
        layer: tempGraphicsLayer,
        view: view,
        pointSymbol: { // symbol used for points
            type: "picture-marker", // autocasts as new PictureMarkerSymbol()
            url: "static/Imgs/home-solid.png",
            width: "20px",
            height: "20px"
        }
    });

    var sketchVDestM = new SketchViewModel({
        layer: tempGraphicsLayer2,
        view: view,
        pointSymbol: { // symbol used for points
            type: "picture-marker", // autocasts as new PictureMarkerSymbol()
            url: "static/Imgs/map-pin-solid.png",
            width: "10px",
            height: "20px"
        }
    });


    sketchVHomeM.on("draw-complete", function (evt) {
        tempGraphicsLayer.add(evt.graphic);
    });

    sketchVDestM.on("draw-complete", function (evt) {
        // add the graphic to the graphics layer
        tempGraphicsLayer2.add(evt.graphic);
    });


    // *************************************
    // activate the sketch to create a home point
    // *************************************
    var drawHomeButton = document.getElementById("homeButton");
    drawHomeButton.onclick = function () {
        view.graphics.removeAll();
        // add the graphic to the graphics layer
        sketchVHomeM.create("point");
        document.getElementById("homeButton").disabled = true;
    };
    // *************************************
    // activate the sketch to create a dest point
    // *************************************
    var drawDestButton = document.getElementById("destButton");
    drawDestButton.onclick = function () {
        sketchVDestM.create("point");
        document.getElementById("destButton").disabled = true;
    };

    document.getElementById("ResetBtn").onclick = function () {
        tempGraphicsLayer.removeAll();
        sketchVHomeM.reset();
        sketchVDestM.reset();
        document.getElementById("homeButton").disabled = false;
        document.getElementById("destButton").disabled = false;
        tempGraphicsLayer2.removeAll();
        view.graphics.removeAll();
        document.getElementById("drive-time").innerHTML = 0;
        document.getElementById("distance").innerHTML = 0;
    };


    // To allow access to the route service and prevent the user from signing in, do the Challenge step in the lab to set up a service proxy
    var routeTask = new RouteTask({
        url: "https://utility.arcgis.com/usrsvcs/appservices/TDWzWsvWrqyvJH5i/rest/services/World/Route/NAServer/Route_World/solve"
    });

    view.on("click", function (event) {
        if (view.graphics.length === 0) {
            addGraphic("start", event.mapPoint);
        } else if (view.graphics.length === 1) {
            addGraphic("finish", event.mapPoint);
            // Call the route service
            getRoute();
        } else {
            view.graphics.removeAll();
            addGraphic("start", event.mapPoint);
        }
    });

    function addGraphic(type, point) {
        var graphic = new Graphic({
            symbol: {
                type: "simple-marker",
                color: (type === "start") ? "white" : "black",
                size: "8px"
            },
            geometry: point
        });
        view.graphics.add(graphic);
    }


    function getRoute() {
        // Setup the route parameters
        var routeParams = new RouteParameters({
            stops: new FeatureSet({
                features: view.graphics.toArray()
            }),
            returnDirections: true
        });
        // Get the route
        routeTask.solve(routeParams).then(function (data) {
            data.routeResults.forEach(function (result) {
                result.route.symbol = {
                    type: "simple-line",
                    color: [5, 150, 255],
                    width: 3
                };
                view.graphics.add(result.route);
                totalDriveTime = result.directions.totalDriveTime;
                totalLength = result.directions.totalLength;
                var totalTime = result.directions.totalTime;
                // alert("Distance : "+totalLength+" miles\nEstimated Time : "+totalDriveTime+" minutes\n" + "Total time"+ totalTime);
                document.getElementById("drive-time").innerHTML = totalDriveTime.toFixed(1);
                document.getElementById("distance").innerHTML = totalLength.toFixed(2);
                showCostnCO2(selectedCar);
            });
        });
    }

});