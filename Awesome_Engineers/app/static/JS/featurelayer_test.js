/*
require([
    "esri/Map",
    "esri/views/MapView",
    "esri/Graphic",
    "esri/tasks/RouteTask",
    "esri/tasks/support/RouteParameters",
    "esri/tasks/support/FeatureSet",
    "esri/layers/FeatureLayer",
    "dojo/domReady!"
], function (Map, MapView, Graphic, RouteTask, RouteParameters, FeatureSet, FeatureLayer) {

     var map = new Map({
        basemap: "streets-navigation-vector"
    });

    var view = new MapView({
        container: "viewDiv",
        map: map,
        //center: [-118.71511, 34.09042],
        center: [-79.5, 43.77],
        //
        extent: {
            // autocasts as new Extent()
            xmin: -9177811,
            ymin: 4247000,
            xmax: -9176791,
            ymax: 4247784,
            spatialReference: 102100
          },//
        zoom: 12
    });

    //var featureLayer = new FeatureLayer("https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Landscape_Trees/FeatureServer/0");
    const featureLayer = new FeatureLayer({
        url: "https://services.arcgis.com/4TKcmj8FHh5Vtobt/arcgis/rest/services/Carpool_DataSheet/FeatureServer/0",
        outFields: ["*"],
        visible: true
        //id: ""
    });

    map.add(featureLayer);

    const handler = view.on("click", function(event) {
        //handler.remove();
        //event.stopPropagation();

        if (event.mapPoint) {
            var point = event.mapPoint.clone();
            point.z = undefined;
            point.hasZ = false;
            var lat = 43.77;
            var lng = -79.5;

            addFeature(point, "2010", "Honda", "Civic", lat, lng, "XYZ", "abc@me.com", featureLayer)
        }
        else {
            console.error("event.mapPoint is not defined");
        }
    });

    function addFeature(point, carYear, carMake, carModel, latitude, longitude, name, email, featureLayer) {
      const attributes = {};
      attributes["Car_Year"] = carYear;
      attributes["Car_Make"] = carMake;
      attributes["Car_Model"] = carModel;
      attributes["Pool_Count"] = 1;
      attributes["Latitude"] = latitude;
      attributes["Longitude"] = longitude;
      attributes["Name"] = name;
      attributes["Email"] = email;

      // Date.now() returns number of milliseconds elapsed
      // since 1 January 1970 00:00:00 UTC.
      //attributes["Report_Date"] = Date.now();

      const addFeature =  new Graphic({
        geometry: point,
        attributes: attributes
      });

      //const deleteFeature = {
      // objectId: [467]
      //};

      featureLayer.applyEdits({
        addFeatures: [addFeature]
        //deleteFeatures: [deleteFeature]
      }).then(function(result){
          console.log("projected points: ", result);
      }).catch( function(error) {
          console.error("Error while adding feature: ", error);
      });
    }

    var distanceSlider = document.getElementById("distance");
    var distanceValue = document.getElementById("distance-value");

    distanceSlider.addEventListener("input", function() {
          distanceValue.innerText = distanceSlider.value;
    });

    //
    function createBuffer(wellPoints) {
      var bufferDistance = parseInt(distanceSlider.value);
      var wellBuffers = geometryEngine.geodesicBuffer(
        wellPoints,
        [bufferDistance],
        "meters",
        true
      );
      wellBuffer = wellBuffers[0];

      // add the buffer to the view as a graphic
      var bufferGraphic = new Graphic({
        geometry: wellBuffer,
        symbol: {
          type: "simple-fill", // autocasts as new SimpleFillSymbol()
          outline: {
            width: 1.5,
            color: [255, 128, 0, 0.5]
          },
          style: "none"
        }
      });
      view.graphics.removeAll();
      view.graphics.add(bufferGraphic);
    }//
});*/