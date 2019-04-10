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
    "esri/layers/FeatureLayer",
    "esri/geometry/Circle",
    "esri/geometry/geometryEngine",
    "dojo/domReady!"
], function (Map, MapView, Graphic, RouteTask, RouteParameters, FeatureSet, Home, Locate, Search, BasemapToggle,
    SketchViewModel, GraphicsLayer, FeatureLayer, Circle, geometryEngine) {
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

    var homeRenderer = {
        type: "simple",
        symbol: {
            type: "picture-marker",
            url: "static/Imgs/home-solid.png",
            width: "20px",
            height: "20px",
            color: "cyan"
        }
    };

    var destinationRenderer = {
        type: "simple",
        symbol: {
            type: "picture-marker",
            color: "cyan",
            url: "static/Imgs/map-pin-solid.png",
            width: "10px",
            height: "20px"
        }
    };

    var homeLayer = new FeatureLayer({
        url: "https://services.arcgis.com/4TKcmj8FHh5Vtobt/arcgis/rest/services/Carpool_DataSheet_2/FeatureServer/0",
        outFields: ["*"],
        renderer: homeRenderer,
        visible: true
    });

    var destinationLayer = new FeatureLayer({
        url: "https://services.arcgis.com/4TKcmj8FHh5Vtobt/arcgis/rest/services/Carpool_DataSheet/FeatureServer/0",
        outFields: ["*"],
        renderer: destinationRenderer,
        visible: true
    });

    map.add(homeLayer);
    map.add(destinationLayer);

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
        // add the graphic to the graphics layer
        sketchVHomeM.create("point");
        document.getElementById("homeButton").disabled = true;
        var handler = view.on("click", function (event) {
            handler.remove();
            addGraphic("home", event.mapPoint);
            console.log("Home");
            /*if (view.graphics.length === 0) {
                addGraphic("home", event.mapPoint);
            } else if (view.graphics.length === 1) {
                addGraphic("home", event.mapPoint);
                // Call the route service
                getRoute();
            } else {
                view.graphics.removeAll();
                addGraphic("home", event.mapPoint);
            }*/
        });
    };


    // *************************************
    // activate the sketch to create a dest point
    // *************************************
    var drawDestButton = document.getElementById("destButton");
    drawDestButton.onclick = function () {
        sketchVDestM.create("point");
        document.getElementById("destButton").disabled = true;
        var handler = view.on("click", function (event) {
            handler.remove();
            addGraphic("destination", event.mapPoint);
            console.log("Destination");
            /*
            if (view.graphics.length === 0) {
                addGraphic("destination", event.mapPoint);
            } else if (view.graphics.length === 1) {
                addGraphic("destination", event.mapPoint);
                // Call the route service
                getRoute();
            } else {
                view.graphics.removeAll();
                addGraphic("destination", event.mapPoint);
            }*/
        });
    };

    /*view.on("click", function(event) {
        // clear previous feature selection
       // unselectFeature();
        if (
          document.getElementById("viewDiv").style.cursor != "crosshair"
        ) {
          view.hitTest(event).then(function(response) {
            // If a user clicks on an incident feature, select the feature.
            if (response.results.length === 0) {
              //toggleEditingDivs("block", "none");
            } else if (
              response.results[0].graphic &&
              response.results[0].graphic.layer.id == "Carpool_DataSheet"
            ) {
              if (addFeatureDiv.style.display === "block") {
                //toggleEditingDivs("none", "block");
              }
              selectFeature(
                response.results[0].graphic.attributes[
                  featureLayer.objectIdField
                ]
              );
            }
          });
        }
      });

    function selectFeature(objectId) {
      // query feature from the server
      destinationLayer
        .queryFeatures({
          objectIds: [objectId],
          outFields: ["*"],
          returnGeometry: true
        })
        .then(function(results) {
          if (results.features.length > 0) {
            editFeature = results.features[0];

            // display the attributes of selected feature in the form
            //featureForm.feature = editFeature;

            // highlight the feature on the view
            view.whenLayerView(editFeature.layer).then(function(layerView) {
              highlight = layerView.highlight(editFeature);
            });
          }
        });
    }*/

    document.getElementById("ResetBtn").onclick = function () {
        tempGraphicsLayer.removeAll();
        sketchVHomeM.reset();
        sketchVDestM.reset();
        document.getElementById("homeButton").disabled = false;
        document.getElementById("destButton").disabled = false;
        tempGraphicsLayer2.removeAll();
        view.graphics.removeAll();
        var zeroValue = 0;
        document.getElementById("drive-time").innerHTML = zeroValue;
        document.getElementById("distance").innerHTML = zeroValue;
        document.getElementById("co2-emission").innerHTML = zeroValue.toFixed(1);
        document.getElementById("cost").innerHTML = zeroValue.toFixed(2);
    };

    // To allow access to the route service and prevent the user from signing in, do the Challenge step in the lab to set up a service proxy
    var routeTask = new RouteTask({
        url: "https://utility.arcgis.com/usrsvcs/servers/c06eaee3d39f4c6289e004f45b0eb97c/rest/services/World/Route/NAServer/Route_World/solve"
    });

    document.getElementById("share-route-Btn").onclick = function () {
        if (confirm('Are you sure you want to share your route with other people for carpooling?')) {
            // Save it!
            gatherDataToAddInFeatureLayers();
        } else {
            // Do nothing!
        }
    };
    document.getElementById("find-carpool-btn").onclick = function () {
        findCarPoolArroundMe();
    };

    //var distanceSlider = document.getElementById("distance");
    //var distanceValue = document.getElementById("distance-value");
    //distanceSlider.addEventListener("input", function() {
    //      distanceValue.innerText = distanceSlider.value;
    //});

    function addGraphic(name, point) {
        var graphic = new Graphic({
            geometry: point,
            attributes: {
                "name": name
            }
        });
        view.graphics.add(graphic);
        console.log(view.graphics.length);
        if (view.graphics.length === 2)
            getRoute();
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
                tempGraphicsLayer.add(result.route);
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

    function updateFeaturesList(homePoint, destinationPoint, carYear, carMake, carModel, latitude, longitude, name, email) {
        //console.log(point.x, point.y, carYear, carMake, carModel, latitude, longitude, name, email);
        const attributes = {};
        attributes["Car_Year"] = carYear;
        attributes["Car_Make"] = carMake;
        attributes["Car_Model"] = carModel;
        attributes["Pool_Count"] = 1;
        attributes["Latitude"] = latitude;
        attributes["Longitude"] = longitude;
        attributes["Name"] = name;
        attributes["Email"] = email;

        const destinationFeature =  new Graphic({
            geometry: destinationPoint,
            attributes: attributes
        });

        destinationLayer.applyEdits({
            addFeatures: [destinationFeature]
        }).then( function(result) {
            console.log("projected points: ", result);
            if (result.addFeatureResults.length > 0) {
                const objectId = result.addFeatureResults[0].objectId;

                attributes["Phone"] = objectId;
                const homeFeature =  new Graphic({
                    geometry: homePoint,
                    attributes: attributes
                });
                //selectFeature(objectId);

                homeLayer.applyEdits({
                    addFeatures: [homeFeature]
                }).then( function(result) {
                    console.log("projected points: ", result);
                }).catch( function(error) {
                    console.error("Error while adding feature: ", error);
                });
            }
        }).catch( function(error) {
            console.error("Error while adding feature: ", error);
        });
    }

    function gatherDataToAddInFeatureLayers() {

        var yearSelection = document.getElementById('vehicleYear');
        var year = yearSelection.options[yearSelection.selectedIndex].value;

        var makeSelection = document.getElementById('vehicleMake');
        var make = makeSelection.options[makeSelection.selectedIndex].value;

        var modelSelection = document.getElementById('vehicleModel');
        var model = modelSelection.options[modelSelection.selectedIndex].value;

        var homePoint;
        var destinationPoint;
        //var latitude;
        //var longitude;

        view.graphics.forEach(function (graphic) {
            if(graphic.attributes.hasOwnProperty('name')){
                if(graphic.attributes["name"] == "destination") {
                    destinationPoint = graphic.geometry;
                    console.log("Found Destination", destinationPoint);
                }
                else if (graphic.attributes["name"] == "home") {
                    //latitude = graphic.geometry.x;
                    //longitude = graphic.geometry.y;
                    homePoint = graphic.geometry;
                    console.log("Found Home", homePoint);//latitude, longitude);
                }
            }
        });

        var name = document.getElementById(id = 'user_name').value;
        var email = document.getElementById(id = 'user_email').value;

        updateFeaturesList(homePoint, destinationPoint, year, make, model, 0, 0, name, email);
    }

    function queryFeatureLayer(graphicGeometryHome) {
        /*
        // query all features from the destinationLayer layer
        view
          .when(function() {
            return destinationLayer.when(function() {
              var query = destinationLayer.createQuery();
              return destinationLayer.queryFeatures(query);
            });
          })
          .then(getValues)
          .then(addToSelect)
          .then(createBuffer);

        // return an array of all the values in the
        // STATUS2 field of the wells layer
        function getValues(response) {
          var features = response.features;
          var values = features.map(function(feature) {
            return feature.attributes.Latitude;
          });
          return values;
        }*/

        function queryForFeatureGeometries() {
          var featureQuery = destinationLayer.createQuery();

          return destinationLayer.queryFeatures(featureQuery).then(function(response) {
            var featuresGeometry = response.features.map(function(feature) {
                var mapPoint = new MapPoint(feature.attributes.Latitude, feature.attributes.Longitude);
                return mapPoint;
            });

                return featuresGeometry;
            });
        }



        /*var query = destinationLayer.createQuery();
        query.geometry = graphicGeometryHome;
        query.spatialRelationship = "intersects";
        return destinationLayer.queryFeatures(query);*/
    }

    function findCarPoolArroundMe() {
        var homeBufferDist = 1000;//parseInt(distanceSlider.value);
        var destBufferDist = 400;
        //console.log(homeBufferDist);
        //var isMiles = true;

        var graphicGeometryHome;
        var graphicGeometryDest;
        view.graphics.forEach(function (graphic) {
            if (graphic.attributes["name"] == "destination") {
                graphicGeometryDest = graphic.geometry;
                //console.log("Found Destination");
            } else if (graphic.attributes["name"] == "home") {
                graphicGeometryHome = graphic.geometry;
                //console.log("Found Home");
            }
        })

        /*var point = {
          type: "point", // autocasts as new Point()
          longitude: -49.97,
          latitude: 41.73
        };*/

        /*var markerSymbol = {
          type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
          color: [226, 119, 40],
          outline: {
            // autocasts as new SimpleLineSymbol()
            color: [255, 255, 255],
            width: 2
          }
        };
        //var point = new Point([-77.036744, 38.897731]);
        var pointGraphic = new Graphic({
            geometry: graphicGeometryHome,
            symbol: markerSymbol
        });
        view.graphics.add(pointGraphic);*/

        /*
        var circle = new Circle([,], {
            radius: bufferDistance,
            //radiusUnit: isMiles ? esri.Units.MILES : esri.Units.km,
            geodesic: true
        });

        var circleSymbol = {
            type: "simplefillsymbol", // autocasts as new SimpleMarkerSymbol()
            color: [226, 119, 40],
            style: 'STYLE_CIRCLE',
            outline: {
                // autocasts as new SimpleLineSymbol()
                color: [255, 255, 255],
                width: 2
            }
        };

        var circleGraphic = new Graphic(circle, circleSymbol);
        view.graphics.add(circleGraphic);
        */

        var homeBuffers = geometryEngine.geodesicBuffer(
            graphicGeometryHome,
            homeBufferDist,
            "meters",
            true
        );

        var destBuffers = geometryEngine.geodesicBuffer(
            graphicGeometryDest,
            destBufferDist,
            "meters",
            true
        );

        var homeBufferGraphic = new Graphic({
            geometry: homeBuffers, // TODO to be filled
            symbol: {
              type: "simple-fill", // autocasts as new SimpleFillSymbol()
              outline: {
                width: 1.5,
                color: 'cyan' //[255, 128, 0, 0.5]
              },
              style: "none"
            }
        });
        //view.graphics.removeAll();
        tempGraphicsLayer.add(homeBufferGraphic);

        var destBufferGraphic = new Graphic({
            geometry: destBuffers, // TODO to be filled
            symbol: {
              type: "simple-fill", // autocasts as new SimpleFillSymbol()
              outline: {
                width: 1.5,
                color: 'green'//[255, 128, 0, 0.5]
              },
              style: "none"
            }
        });
        //view.graphics.removeAll();
        tempGraphicsLayer2.add(destBufferGraphic);

        var selectedHighlights;

        var featureQuery = destinationLayer.createQuery();
        featureQuery.outSpatialReference = view.spatialReference;
        featureQuery.geometry = destBufferGraphic.geometry;
        //query.where = "CONST_NAME LIKE '%"+searchString+"%'";
        destinationLayer.queryFeatures(featureQuery).then(function(destinationResponse){

            if(selectedHighlights) {
                selectedHighlights.remove();
            }

            var destFeatures = destinationResponse.features;
            console.log("Common Destination: ", destFeatures.length);

            //selectedHighlights = destinationLayer.highlight(features);
            //console.log("Selected Highlihts", selectedHighlights);

            if(destFeatures.length >0) {
                var featureQuery = homeLayer.createQuery();
                featureQuery.outSpatialReference = view.spatialReference;
                featureQuery.geometry = homeBufferGraphic.geometry;
                homeLayer.queryFeatures(featureQuery).then(function(homeResponse) {

                    var homeFeatures = homeResponse.features;
                    console.log("Common Home: ", homeFeatures.length);
                    if(homeFeatures.length > 0) {
                        destFeatures.forEach(function(destFeature){
                            console.log("Finding in common destination", destFeature.objectId, destFeature.attributes.Email);

                            var output = document.getElementById('sourceScroll');

                            homeFeatures.forEach(function (homeFeature) {
                                console.log(destFeature.objectIdField, destFeature.attributes.Email, homeFeature.attributes.Phone, homeFeature.attributes.Email);
                                if(destFeature.attributes.Email == homeFeature.attributes.Email)
                                {
                                    console.log("Found you: ", homeFeature.attributes.Email);
                                    selectedHighlights = destinationLayer.highlight(destFeature);

                                    var element = document.createElement("div");
                                    //element.setAttribute("id","timedrpact"+i);
                                    //element.setAttribute("class","inner");
                                    element.innerHTML= homeFeature.attributes.Name;

                                    output.appendChild(element);
                                }
                            })
                        });
                    }
                });
            }
        });
    }

    var selectedHighlights;
    function selectDestinationBuffers(response){

        /*if(selectedHighlights) {
            selectedHighlights.forEach(function (highlight){
                highlight.remove();
            });
        }*/
        if(selectedHighlights) {
            selectedHighlights.remove();
        }

        var feature;
        var features = response.features;
        var inBuffer = [];
        //console.log(features);
        console.log("To Highlight: ", features.length);

        //features.forEach(function (feature) {
        //    selectedHighlights.push(destinationLayer.highlight(feature));
        //});
        selectedHighlights = destinationLayer.highlight(features);
        console.log("Selected Highlihts", selectedHighlights);

        /*
        //filter out features that are not actually in buffer, since we got all points in the buffer's bounding box
        for (var i = 0; i < features.length; i++) {
            feature = features[i];
            if(circle.contains(feature.geometry)){
                inBuffer.push(feature.attributes[destinationLayer.objectIdField]);
            }
        }
        console.log("In Buffer" , inBuffer.length);
        var query = new Query();
        query.objectIds = inBuffer;
        //use a fast objectIds selection query (should not need to go to the server)
        destinationLayer.selectFeatures(query, FeatureLayer.SELECTION_NEW, function(results){
            results.forEach(function (result) {
                console.log(result.attributes.Car_Make);
            })
        });*/
    }
    
    function selectHomeBuffersTowardsDestinationBuffer(features) {
        
    }
});