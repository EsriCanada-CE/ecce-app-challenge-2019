var basemapPanel = document.getElementById("selectBasemapPanel");
var removed1 = false;
var removed4 = false;
// Elements
var greenSwitch = document.getElementById("greenSwitch");
var connectSwitch = document.getElementById("connectSwitch");
var compactnessSwitch = document.getElementById("compactnessSwitch");

/*
 * Slider label control
 */
// Tab 1
var greenSlider = document.getElementById("greenSlider");
var connectSlider = document.getElementById("connectSlider");
var compactSlider = document.getElementById("compactnessSlider");
var greenLabel = document.getElementById("greenLabel");
var connectLabel = document.getElementById("connectLabel");
var compactnessLabel = document.getElementById("compactnessLabel");
// Tab 2
var foodAreaSlider = document.getElementById("foodAreaSlider");
var foodAreaLabel = document.getElementById("foodAreaLabel");

//Variables for the garden polygon area and perimeter
var garden_widget_area = 0;
var garden_widget_perimeter = 0;

// Tab 3
var alt_transit_Slider = document.getElementById("alt_transit_Slider");
var alt_transit_SliderLabel = document.getElementById("alt_transit_SliderLabel");
var fuel_economy_Slider = document.getElementById("fuel_economy_Slider");
var fuel_economy_SliderLabel = document.getElementById("fuel_economy_SliderLabel");

var stopSymbol = { // symbol  used for points
	type: "simple-marker",
	style: "cross",
	size: 15,
	outline: {
		// autocasts as new SimpleLineSymbol()
		width: 4
	}
};

// Define the symbology used to display the route
var routeSymbol = {
	type: "simple-line", // autocasts as SimpleLineSymbol()
	color: [0, 0, 255, 0.5],
	width: 5
};

// Subsections
var green1Slider = document.getElementById("green1Slider");
var green1Label = document.getElementById("green1Label");
var green2Slider = document.getElementById("green2Slider");
var green2Label = document.getElementById("green2Label");

var connect1Slider = document.getElementById("connect1Slider");
var connect1Label = document.getElementById("connect1Label");
var connect2Slider = document.getElementById("connect2Slider");
var connect2Label = document.getElementById("connect2Label");
var connect3Slider = document.getElementById("connect3Slider");
var connect3Label = document.getElementById("connect3Label");
var connect4Slider = document.getElementById("connect4Slider");
var connect4Label = document.getElementById("connect4Label");
var connect5Slider = document.getElementById("connect5Slider");
var connect5Label = document.getElementById("connect5Label");

var compact1Slider = document.getElementById("compact1Slider");
var compact1Label = document.getElementById("compact1Label");
var compact2Slider = document.getElementById("compact2Slider");
var compact2Label = document.getElementById("compact2Label");

// Collapsible buttons
var collapsible1Button = document.getElementById("collapsible1Button");
var collapsible2Button = document.getElementById("collapsible2Button");
var collapsible3Button = document.getElementById("collapsible3Button");

// Food
var foodDropdown = document.getElementById("foodDropdown");
var ghgBC = document.getElementById("ghgBC");
var ghgCali = document.getElementById("ghgCali");

var gardenButton = document.getElementById("gardenButton");
var removeGardenButton = document.getElementById("removegardenButton");

// Transportation
var transportationDistance = document.getElementById("transportationDistance");
var emissionDay = document.getElementById("transportationEmissionDay");
var emissionWeek = document.getElementById("transportationEmissionWeek");
var emissionMonth = document.getElementById("transportationEmissionMonth");
var emissionYear = document.getElementById("transportationEmissionYear");
var removeMarkersButton = document.getElementById("removeMarkersButton");

alt_transit_SliderLabel.innerHTML = alt_transit_Slider.value;
fuel_economy_SliderLabel.innerHTML = fuel_economy_Slider.value;

// Display the default slider value
greenLabel.innerHTML = greenSlider.value;
connectLabel.innerHTML = connectSlider.value;
compactnessLabel.innerHTML = compactSlider.value;

// Subsections
green1Label.innerHTML = green1Slider.value;
green2Label.innerHTML = green2Slider.value;
connect1Label.innerHTML = connect1Slider.value;
connect2Label.innerHTML = connect2Slider.value;
connect3Label.innerHTML = connect3Slider.value;
connect4Label.innerHTML = connect4Slider.value;
connect5Label.innerHTML = connect5Slider.value;
compact1Label.innerHTML = compact1Slider.value;
compact2Label.innerHTML = compact2Slider.value;

var app;
var featureLayer;
var luFeatureLayer;
var featureElements;
var luFeatureElements;

require(["esri/Map",
	"esri/Basemap",
	"esri/views/MapView",
	"esri/layers/FeatureLayer",
	"esri/widgets/Search",
	"esri/core/watchUtils",
	"esri/widgets/Sketch/SketchViewModel",
	"esri/Graphic",
	"esri/layers/GraphicsLayer",
	"esri/widgets/AreaMeasurement2D",
	"esri/tasks/RouteTask",
    "esri/tasks/support/RouteParameters",
	"esri/tasks/support/FeatureSet",
	"esri/tasks/GeometryService",
	"esri/tasks/support/LengthsParameters",
	"dojo/query",

	// Calcite-maps
	"calcite-maps/calcitemaps-v0.10",
	"calcite-maps/calcitemaps-arcgis-support-v0.10",

	// Bootstrap
	"bootstrap/Collapse",
	"bootstrap/Dropdown",
	"bootstrap/Tab",

	"dojo/domReady!"
	], function(Map, Basemap, MapView, FeatureLayer, Search, watchUtils, SketchViewModel, Graphic, GraphicsLayer, AreaMeasurement2D, RouteTask,
		RouteParameters, FeatureSet, GeometryService, LengthsParameters, query, CalciteMaps, CalciteMapsArcGIS) {
	
		// App
		app = {
			zoom: 11,
			center: [-114.05,51.03],
			basemap: "gray",
			viewPadding: {
			  top: 50, bottom: 0
			},
			uiPadding: {
			  top: 15, bottom: 15
			},
			map: null,
			mapView: null,
			activeView: null,
			searchWidgetNav: null,
			containerMap: "mapViewDiv"
		};
		
		var routeTask = new RouteTask({
			url: "https://utility.arcgis.com/usrsvcs/servers/27dd8d7d668d46aca67811681fca31c2/rest/services/World/Route/NAServer/Route_World"
		});
		
		// Setup the route parameters
		var routeParams = new RouteParameters({
			stops: new FeatureSet()
		});
		
		var geometryService = new GeometryService({
			url: "https://utility.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer"
		});
		
		// Map 
		var routeLayer = new GraphicsLayer();
		var activeWidget = null;
		app.map = new Map({
			basemap: app.basemap,
			layers:[routeLayer]
		});

		// 2D View
		app.mapView = new MapView({
			container: app.containerMap,
			map: app.map,
			zoom: app.zoom,
			center: app.center,
			padding: app.viewPadding,
			ui: {
				components: ["zoom", "compass", "attribution"],
				padding: app.uiPadding
			}
		});

		// Active view is 2D View
		app.activeView = app.mapView;

		// Create search widget
		app.searchWidgetNav = new Search({
			container: "searchNavDiv",
			view:app.activeView
		});
		
		// Wire-up expand events
		CalciteMapsArcGIS.setSearchExpandEvents(app.searchWidgetNav);
		CalciteMapsArcGIS.setPopupPanelSync(app.mapView);

		// Menu UI - change Basemaps
		query("#selectBasemapPanel").on("change", function(e){
			app.mapView.map.basemap = e.target.options[e.target.selectedIndex].dataset.vector;
		});
		
			
		/*
		 * Refresh button event handler
		 */
		var refreshButton = document.getElementById("refreshButton");
		refreshButton.onclick = function() {
			if(!lock && (greenSwitch.checked || connectSwitch.checked || compactnessSwitch.checked)) {
				refreshMap(false);
			}
		};
		
		function createFeatureLayer() {
			// Communities feature layer
			featureLayer = new FeatureLayer({
				url: "https://services2.arcgis.com/XSv3KNGfmrd1txPN/arcgis/rest/services/Community_Metrics/FeatureServer",
				popupTemplate: {
					content: ""
				}
			});

			app.map.add(featureLayer);
			
			/*
			 * Getting attribute values
			 */
			featureLayer.when(function(){
				// This function will execute once the promise is resolved
				featureLayer.queryFeatures().then(function(results) {
					if (results.features.length > 0) {
						// IDs of interest
						var ids = [];
						
						for(var i=0; i<results.features.length; i++) {
							ids.push(results.features[i]["attributes"]["FID"]);
						}
						
						featureLayer.queryFeatures({
							objectIds: ids,
							outFields: ["*"],
							returnGeometry: true
						}).then(function(innerResults) {
							if (innerResults.features.length > 0) {
								featureElements = innerResults.features;
								
								// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
								// Still need to add walkway and rent prices!!!! @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
								// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
								normalizeFields = ["Green_per", "Tree_Densi", "Road_per", "Bike_per", "Bus_per", "LRT_per", "Pop_Densit", "Bus_Densit"];
								
								// Normalize columns
								featureElements = normalize(featureElements, normalizeFields);
								
								// Computing values per community
								var metrics = calculateMetrics(featureElements);
								
								// Ranking communities by value
								metrics.sort(function (a, b){
									return b.value - a.value;
								});
								
								var tmp = new Array(metrics.length + 1);
								for(var i=0; i<metrics.length; i++) {
									tmp[metrics[i].id] = i+1;
								}
								//console.log(tmp);
								
								var arrayText = JSON.stringify(tmp);
								var arcade = "return " + arrayText + "[$feature.FID];";
								
								// Update renderer
								var defaultSym = {
									type: "simple-fill",
									outline: {
										color: [128, 128, 128, 0.2],
										width: "0.5px"
									}
								};
								
								var renderer =  {
									type: "simple",
									symbol: defaultSym,
									visualVariables: [
										{
											type: "color",
											valueExpression: arcade,
											stops: [
												{
													value: 1,
													color: "#34B800"
												},
												{
													value: metrics.length,
													color: "#e0f9d6"
												}
											]
										}
									]
								};
								
								featureLayer.renderer = renderer;
									
								featureLayer.popupTemplate = {
									expressionInfos: [{
										name: "community-rank",
										expression: arcade
									}],
									content: "<b>Name: </b><i>{NAME}</i><br>" +
										"<b>Sustainability Rank: </b><i>{expression/community-rank} out of " + metrics.length + "</i><br><br>" +
										"<b>Sector: </b><i>{SECTOR}</i><br>" +
										"<b>Green area ratio: </b><i>{GREEN_PER}</i><br>" +
										"<b>Number of trees: </b><i>{NUM_TREES}</i><br>" +
										"<b>Population: </b><i>{POPULATION}</i><br>" + 
										"<b>Number of businesses: </b><i>{BUSINESS}</i><br>" + 
										"<b>Transit Coverage ratio: </b><i>{BUS_PER}</i>"
								};
								
								featureLayer.popupTemplate.title = "<b>Community Sustainability Info</b>";
								
								lock = false;
							}
						});
					}
				}, function(error){
					// This function will execute if the promise is rejected due to an error
					console.log("Ops..");
				});
			}, function(error){
				// This function will execute if the promise is rejected due to an error
				console.log("Ops..");
			});
		}
		
		function createLandUseLayer() {
			// Land use designation feature layer
			luFeatureLayer = new FeatureLayer({
				url: "https://services2.arcgis.com/XSv3KNGfmrd1txPN/arcgis/rest/services/Community_suites_luzones/FeatureServer",
				popupTemplate: {
					content: ""
				}
			});
			
			luFeatureLayer.opacity = 0;
			
			/*
			 * Getting attribute values
			 */
			luFeatureLayer.when(function(){
				// This function will execute once the promise is resolved
				luFeatureLayer.queryFeatures().then(function(results) {
					if (results.features.length > 0) {
						// IDs of interest
						var ids = [];
						
						for(var i=0; i<results.features.length; i++) {
							ids.push(results.features[i]["attributes"]["FID"]);
						}
						
						luFeatureLayer.queryFeatures({
							objectIds: ids,
							outFields: ["*"],
							returnGeometry: true
						}).then(function(innerResults) {
							if (innerResults.features.length > 0) {

								luFeatureElements = innerResults.features;

								console.log(luFeatureElements);

								var tmpSet1 = {"0":"Not allowed", "1":"Permitted", "2":"Discretionary"};
								var tmpSet2 = {"0":"Not allowed", "1":"Discretionary"};

								var arrayText1 = JSON.stringify(tmpSet1);
								var arrayText2 = JSON.stringify(tmpSet2);
								
								var arcade1 = "return " + arrayText1 + "[$feature.sec_perm];";
								var arcade2 = "return " + arrayText2 + "[$feature.back_perm];";
								

								luFeatureLayer.popupTemplate = {
									expressionInfos: [{
										name: "community-lu-sec",
										expression: arcade1
									}],
									content: "<b>Community name: </b><i>{NAME}</i><br>" +
										"<b>Land use designation code: </b><i>{LU_CODE}</i><br><br>" +
										"<b>Secondary suite allowed: </b><i>{expression/community-lu-sec}</i><br>" + 
										"<b>Backyard suite allowed: </b><i></i>"
								};
								
								luFeatureLayer.popupTemplate.title = "<b>Can you have a secondary suite?</b>";
								luFeatureLayer.popupTemplate.content = "<b>Community name: </b><i>{NAME}</i><br>" +
										"<b>Land use designation code: </b><i>{LU_CODE}</i>";
								
								// Remove loading
							}
						});
					}
				}, function(error){
					// This function will execute if the promise is rejected due to an error
					console.log("Ops..");
				});
			}, function(error){
				// This function will execute if the promise is rejected due to an error
				console.log("Ops..");
			});			

			app.map.add(luFeatureLayer);
		}
			
		/*
		 * Calculating sustainability metrics
		 */
		function calculateMetrics(featureValues) {
			// Initialize communities array
			var communities = [];
			for(var i=0; i<featureValues.length; i++) {
				communities.push({id:featureValues[i].attributes.FID, value:0});
			}
			
			// Get importance values from the sliders
			var importances = summarizeImportanceSliders();
			
			var a0,a1,a2,b0,b1,b2,b3,b4,b5,c0,c1,c2;
			a0=a1=a2=b0=b1=b2=b3=b4=b5=c0=c1=c2 = 0;
			
			// Parse all importance values
			for(var i=0; i<importances.length; i++) {
				if(importances[i].topic === "green") {
					if(importances[i].subtopic === null)
						a0 = importances[i].value;
					else if (importances[i].subtopic === "space")
						a1 = importances[i].value;
					else if (importances[i].subtopic === "trees")
						a2 = importances[i].value;
				} else if(importances[i].topic === "connect") {
					if(importances[i].subtopic === null)
						b0 = importances[i].value;
					else if (importances[i].subtopic === "roads")
						b1 = importances[i].value;
					else if (importances[i].subtopic === "bikeways")
						b2 = importances[i].value;
					else if (importances[i].subtopic === "walkways")
						b3 = importances[i].value;
					else if (importances[i].subtopic === "bus")
						b4 = importances[i].value;
					else if (importances[i].subtopic === "lrt")
						b5 = importances[i].value;
				} else if(importances[i].topic === "compact") {
					if(importances[i].subtopic === null)
						c0 = importances[i].value;
					else if (importances[i].subtopic === "population")
						c1 = importances[i].value;
					else if (importances[i].subtopic === "business")
						c2 = importances[i].value;
				}
			}	
			
			// Metrics calculation
			for(var i=0; i<featureValues.length; i++) {

				var tmpId = featureValues[i].attributes.FID;
				
				for(var j=0; j<communities.length; j++) {
					if(communities[j].id === tmpId) {
						
						var A = greenSwitch.checked ?
							((a1 * featureValues[i].attributes.Green_per) + 
							(a2 * featureValues[i].attributes.Tree_Densi)) /
							(a1 + a2)
							: 0;
							
						var B = connectSwitch.checked ?
							((b1 * featureValues[i].attributes.Road_per) +
							(b2 * featureValues[i].attributes.Bike_per) +
							//(b3 * featureValues[i].attributes.Walk_per) +
							(b4 * featureValues[i].attributes.Bus_per) +
							(b5 * featureValues[i].attributes.LRT_per)) / 
							//(b1 + b2 + b3 + b4 + b5);
							(b1 + b2 + b4 + b5)
							: 0;
							
						var C = compactnessSwitch.checked ? 
							((c1 * featureValues[i].attributes.Pop_Densit) +
							(c2 * featureValues[i].attributes.Bus_Densit)) /
							(c1 + c2)
							: 0;
							
						communities[j].value = ((a0 * A) + (b0 * B) + (c0 * C)) / (a0 + b0 + c0);
					}
				}
			}
			
			return communities;
		}
		
		/*
		// Search Widget
		function syncSearch(view) {
			app.searchWidgetNav.view = view;
			if (app.searchWidgetNav.selectedResult) {
				watchUtils.whenTrueOnce(view,"ready",function(){
					app.searchWidgetNav.autoSelect = false;
					app.searchWidgetNav.search(app.searchWidgetNav.selectedResult.name);
					app.searchWidgetNav.autoSelect = true;
				});
			}
		}
		*/
		
		/*
		 * Generate community rank and update map
		 */
		var lock = false;
		function refreshMap(initial) {
			lock = true;
			
			if(!initial) {
				app.map.layers.remove(featureLayer);
			}
			
			createFeatureLayer();
		}
		refreshMap(true);
		
		/*
		 * Tabs event handler
		 */
		var tabs = document.getElementsByClassName("tablinks");
		for (i = 0; i < tabs.length; i++) {
			tabs[i].onclick = function(event) {
				var t = event.target;			
				t = t.className.includes("glyphicon") ? t.parentElement : t;
				
				// Control opacity based on tab
				if(featureLayer.loaded) {
					featureLayer.opacity = event.target.className.includes("1") ? 1 : 0.2;
				}
				
				// Change basemap if not tab 1
				if(event.target.className.includes("1")) {
					// Check if layer exists and create again if needed
					if(removed1) {
						createFeatureLayer();
						removed1 = false;
					}

					if(!removed4) {
						// Remove main layer if exists
						app.map.layers.remove(luFeatureLayer);
						removed4 = true;
					}

					if(featureLayer.loaded) {
						featureLayer.opacity = 1;
					}
					
					if(basemapPanel.SelectedValue != 5) {
						basemapPanel.SelectedValue = 5;
						basemapPanel.options[basemapPanel.SelectedValue].selected = true;
						app.mapView.map.basemap = basemapPanel.options[basemapPanel.SelectedValue].dataset.vector;
					}
				} else if(event.target.className.includes("3")) {
					if(featureLayer.loaded) {
						featureLayer.opacity = 0.2;
					}
					
					if(basemapPanel.SelectedValue != 0) {
						basemapPanel.SelectedValue = 0;
						basemapPanel.options[basemapPanel.SelectedValue].selected = true;
						app.mapView.map.basemap = basemapPanel.options[basemapPanel.SelectedValue].dataset.vector;
					}
				} else if(event.target.className.includes("4")) {
					if(basemapPanel.SelectedValue != 1) {
						basemapPanel.SelectedValue = 1;
						basemapPanel.options[basemapPanel.SelectedValue].selected = true;
						app.mapView.map.basemap = basemapPanel.options[basemapPanel.SelectedValue].dataset.vector;
					}
					
					if(!removed1) {
						// Remove main layer if exists
						app.map.layers.remove(featureLayer);
						removed1 = true;
					}

					if(removed4) {
						// Create new layer
						createLandUseLayer();
					}

				} else {
					if(featureLayer.loaded) {
						featureLayer.opacity = 0.2;
					}
					
					if(basemapPanel.SelectedValue != 1) {
						basemapPanel.SelectedValue = 1;
						basemapPanel.options[basemapPanel.SelectedValue].selected = true;
						app.mapView.map.basemap = basemapPanel.options[basemapPanel.SelectedValue].dataset.vector;
					}
				}

				// Declare all variables
				var i, tabcontent, tablinks;

				// Get all elements with class="tabcontent" and hide them
				tabcontent = document.getElementsByClassName("tabcontent");
				for (i = 0; i < tabcontent.length; i++) {
					tabcontent[i].style.display = "none";
				}

				// Get all elements with class="tablinks" and remove the class "active"
				tablinks = document.getElementsByClassName("tablinks");
				for (i = 0; i < tablinks.length; i++) {
					tablinks[i].className = tablinks[i].className.replace(" active", "");
				}

				// Show the current tab, and add an "active" class to the button that opened the tab
				var tabid = "Tab";
				if(t.className.includes("1"))
					tabid += "1";
				else if(t.className.includes("2"))
					tabid += "2";
				else if(t.className.includes("3"))
					tabid += "3";
				else if(t.className.includes("4"))
					tabid += "4";

				document.getElementById(tabid).style.display = "block";
				t.className += " active";
			};
		}
		
		app.mapView.when(function() {
			// Force first tab to be opened when the page is loaded
			document.getElementById("defaultOpen").click();
		
			var sketchViewModelHome = new SketchViewModel({
				view: app.mapView,
				layer: routeLayer,
				pointSymbol: { // symbol used for points
					type: "simple-marker",
					style: "triangle",
					size: 15,
					color: [57, 220, 229],
					outline: {
						color: [50, 50, 50],
						width: 0
					}
				}
			});
			
			var sketchViewModelAway = new SketchViewModel({
				view: app.mapView,
				layer: routeLayer,
				pointSymbol: { // symbol  used for points
					type: "simple-marker",
					style: "triangle",
					size: 15,
					color: [133, 191, 133],
					outline: {
						color: [50, 50, 50],
						width: 0
					}
				}
			});
			
			// can be re-added if routeTask functionality is enabled
			function addStop(event) {
				// Add a point at the location of the map click
				var stop = new Graphic({
					geometry: event.mapPoint,
					//symbol: stopSymbol
				});

				if (beingSetStatus_home != 1 || beingSetStatus_away != 1) {
					//console.log(beingSetStatus_home);
					//console.log(beingSetStatus_away);
					routeLayer.add(stop);
				}
				
				// Execute the route task if 2 or more stops are input
				routeParams.stops.features.push(stop);
				
				if (routeParams.stops.features.length >= 2) {

					routeTask.solve(routeParams).then(function(data) {
						showRoute(data);
					}), function(error){
						// This function will execute if the promise is rejected due to an error
						console.log(error);
					};
				}
			}

			// Adds the solved route to the map as a graphic
			var distance = 0;
			function showRoute(data) {
				var routeResult = data.routeResults[0].route;
				routeResult.symbol = routeSymbol;
				routeLayer.add(routeResult);
				
				var geometry = routeResult.geometry;
				var lengthParams = new LengthsParameters();
				lengthParams.polylines = [geometry];
				lengthParams.lengthUnit = geometryService.UNIT_METER;
				lengthParams.calculationType = 'geodesic';
				lengthParams.geodesic = true;
				
				geometryService.lengths(lengthParams).then(function(result) {					
					distance = result.lengths[0];
					refreshTransportationValues();
				});
			}
			
			function refreshTransportationValues() {

				var roundTrip = 2 * distance / 1000;
				var emissionDayValue = roundTrip * fuel_economy_Slider.value * 2.29 / 100;
				var emissionWeekValue = emissionDayValue * alt_transit_Slider.value;
				var emissionMonthValue = emissionWeekValue * 4;
				var emissionYearValue = emissionWeekValue * 52;
				
				// Update labels
				transportationDistance.innerHTML = parseFloat(roundTrip).toFixed(1) + " km";
				emissionDay.innerHTML = parseFloat(emissionDayValue).toFixed(1) + " kg CO2";
				emissionWeek.innerHTML = parseFloat(emissionWeekValue).toFixed(1) + " kg CO2";
				emissionMonth.innerHTML = parseFloat(emissionMonthValue).toFixed(1) + " kg CO2";
				emissionYear.innerHTML = parseFloat(emissionYearValue).toFixed(1) + " kg CO2";
			}
			
			
			alt_transit_Slider.oninput = function() {
				alt_transit_SliderLabel.innerHTML = this.value;
				refreshTransportationValues();
			};

			fuel_economy_Slider.oninput = function() {
				fuel_economy_SliderLabel.innerHTML = this.value;
				refreshTransportationValues();
			};

			var drawHomeButton = document.getElementById("homeButton");
			beingSetStatus_home = 0;
			
			drawHomeButton.onclick = function () {
				if (beingSetStatus_home != 1) {
					// set the sketch to create a point geometry
					beingSetStatus_home = 1;
					//console.log(beingSetStatus_home);
					sketchViewModelHome.create("point");
					setActiveButton(this);
					document.getElementById("homeButton").disabled = true;
					app.mapView.on("click", addStop);
					beingSetStatus_home = 1
				}
			};
			
			beingSetStatus_away = 0
			var drawAwayButton = document.getElementById("awayButton");
			drawAwayButton.onclick = function () {
				if (beingSetStatus_away != 1) {
					// set the sketch to create a point geometry
					beingSetStatus_away = 1;
					//console.log(beingSetStatus_away);
					sketchViewModelAway.create("point");
					setActiveButton(this);
					document.getElementById("awayButton").disabled = true;
					app.mapView.on("click", addStop);
					beingSetStatus_away = 1
				}
			};
			
			var removeMarkers = removeMarkersButton.addEventListener("click", function() {
				routeParams.stops = new FeatureSet();
				
				routeLayer.removeAll();
				beingSetStatus_home = 0;
				beingSetStatus_away = 0;
				
				document.getElementById("homeButton").disabled = false;
				document.getElementById("awayButton").disabled = false;
				
				distance = 0;
				refreshTransportationValues();
			});
			
			// button linkes to AreaMeasurement2D widget
			var drawPolygonGarden = gardenButton.addEventListener("click", function() {
				setActiveWidget(null);
				if (!this.classList.contains("active")) {
					setActiveWidget("area");
					setActiveButton(this);
				} else {
					setActiveButton(null);
				}
			});
			  
			var removePolygonGarden = removeGardenButton.addEventListener("click", function() {
				setActiveWidget(null);
				if (!this.classList.contains("active")) {
					setActiveWidget("remove");
					setActiveButton(this);
				} else {
					setActiveButton(null);
				}
			});
			
			function setActiveButton(selectedButton) {
				// focus the view to activate keyboard shortcuts for sketching
				app.mapView.focus();
				var elements = document.getElementsByClassName("active");

				for (var i = 0; i < elements.length; i++) {
					if(!elements[i].className.includes("locationBtns"))
						continue;
					
					//console.log(elements[i].id)
					elements[i].classList.remove("active");
				}
				
				if (selectedButton) {
					selectedButton.classList.add("active");
				}
			}
			
			// widget button and polygon are getting
			function setActiveWidget(type) {
				switch (type) {
					case "area":
						activeWidget = new AreaMeasurement2D({
							view: app.mapView
						});

						// skip the initial 'new measurement' button
						setActiveButton(gardenButton);
						activeWidget.viewModel.newMeasurement();
						activeWidget.watch("viewModel.measurement", function(measurement) {
							garden_widget_area = measurement.area;
							garden_widget_perimeter = measurement.perimeter;
							
							calculateFoodStats();
						});
						
						break;
					case null:
						if (activeWidget) {
							//app.mapView.remove(activeWidget);
							if(!activeWidget.destroyed) {
								activeWidget.destroy();
							}
							activeWidget = null;
							garden_widget_area = garden_widget_perimeter = 0;

							calculateFoodStats();
						}
					case "remove":
						if (activeWidget) {
							//app.mapView.remove(activeWidget);
							if(!activeWidget.destroyed) {
								activeWidget.destroy();
							}
							activeWidget = null;
							garden_widget_area = garden_widget_perimeter = 0;
							
							calculateFoodStats();
						}
						break;
				}
			}
			
		});
	}
);

/*
 * Normalization
 */
function normalize(values, fields) {
	var normalized = values.slice();
	
	for(var j=0; j<fields.length; j++) {
		var currentField = fields[j];
		var max = values[0]["attributes"][currentField];
		var min = values[0]["attributes"][currentField];
		
		for(var k=1; k<values.length; k++) {
			var value = values[k]["attributes"][currentField];
			
			max = value > max ? value : max;
			min = value < min ? value : min;
		}
		
		for(var i=0; i<values.length; i++) {
			normalized[i]["attributes"][currentField] = (normalized[i]["attributes"][currentField] - min) / (max - min);
		}
	}
	
	return normalized;
}

/*
 * Summarize importance values from sliders
 */
function summarizeImportanceSliders() {
	// Get all slider values
	values = [];
	
	var greenActive = greenSwitch.checked ? 1 : 0;
	values.push({topic:"green", subtopic:null, value:greenSlider.value*greenActive});
	values.push({topic:"green", subtopic:"space", value:green1Slider.value*greenActive});
	values.push({topic:"green", subtopic:"trees", value:green2Slider.value*greenActive});

	var connectActive = connectSwitch.checked ? 1 : 0;
	values.push({topic:"connect", subtopic:null, value:connectSlider.value*connectActive});
	values.push({topic:"connect", subtopic:"roads", value:connect1Slider.value*connectActive});
	values.push({topic:"connect", subtopic:"bikeways", value:connect2Slider.value*connectActive});
	values.push({topic:"connect", subtopic:"walkways", value:connect3Slider.value*connectActive});
	values.push({topic:"connect", subtopic:"bus", value:connect4Slider.value*connectActive});
	values.push({topic:"connect", subtopic:"lrt", value:connect5Slider.value*connectActive});
	
	var compactActive = compactnessSwitch.checked ? 1 : 0;
	values.push({topic:"compact", subtopic:null, value:compactSlider.value*compactActive});
	values.push({topic:"compact", subtopic:"population", value:compact1Slider.value*compactActive});
	values.push({topic:"compact", subtopic:"business", value:compact2Slider.value*compactActive});
	
	return values;
}


// Update the current slider value (each time you drag the slider handle)
greenSlider.oninput = function() {
	greenLabel.innerHTML = this.value;
};

connectSlider.oninput = function() {
	connectLabel.innerHTML = this.value;
};

compactSlider.oninput = function() {
	compactnessLabel.innerHTML = this.value;
};

//foodAreaSlider.oninput = function() {
	//foodAreaLabel.innerHTML = parseFloat(this.value).toFixed(2) + " m²";
	//calculateFoodStats();
//};

// Subsections
green1Slider.oninput = function() {
	green1Label.innerHTML = this.value;
};
green2Slider.oninput = function() {
	green2Label.innerHTML = this.value;
};

connect1Slider.oninput = function() {
	connect1Label.innerHTML = this.value;
};
connect2Slider.oninput = function() {
	connect2Label.innerHTML = this.value;
};
connect3Slider.oninput = function() {
	connect3Label.innerHTML = this.value;
};
connect4Slider.oninput = function() {
	connect4Label.innerHTML = this.value;
};
connect5Slider.oninput = function() {
	connect5Label.innerHTML = this.value;
};

compact1Slider.oninput = function() {
	compact1Label.innerHTML = this.value;
};
compact2Slider.oninput = function() {
	compact2Label.innerHTML = this.value;
};

/*
 * Toggle switch control
 */
greenSwitch.onclick = function() {
	greenSlider.disabled = !this.checked;
	
	if(!this.checked) {
		if(collapsible1Button.className.includes("active")) {
			collapsible1Button.click();
		}		
	}
	collapsible1Button.disabled = !this.checked;
};

connectSwitch.onclick = function() {
	connectSlider.disabled = !this.checked;
	
	if(!this.checked) {
		if(collapsible2Button.className.includes("active")) {
			collapsible2Button.click();
		}		
	}
	collapsible2Button.disabled = !this.checked;
};

compactnessSwitch.onclick = function() {
	compactSlider.disabled = !this.checked;
	
	if(!this.checked) {
		if(collapsible3Button.className.includes("active")) {
			collapsible3Button.click();
		}		
	}
	collapsible3Button.disabled = !this.checked;
};

/*
 * Tab 2 event handlers
 */
foodDropdown.onchange = function() {
	calculateFoodStats();
};

/*
garden_widget_area.onchange = function() {
	calculateFoodStats();
};
*/

function calculateFoodStats() {
	//Empty
	//Carrot	30
	//Cucumber	16.5
	//Onion		27.5
	//Potato	28
	//Tomato	47.5
	var selected = foodDropdown.selectedIndex;
	var produce = {"0":0, "1":30, "2":16.5, "3":27.5, "4":28, "5":47.5};		
	
	// Produce weight
	//console.log(garden_widget_area);
	var tmp = garden_widget_area * 0.0001 * produce[selected] * 0.907185;
	var weight = tmp * 1000;
	
	// GHG
	var co2 = {"bcMin":tmp * 0.062 * 500, "bcMax":tmp * 0.062 * 1000, "caliMin":tmp * 0.062 * 1500, "caliMax":tmp * 0.062 * 2500};
	
	// Update labels
	foodYield.innerHTML = parseFloat(weight).toFixed(1) + " kg";
	ghgBC.innerHTML = parseFloat(co2.bcMin).toFixed(1) + " - " + parseFloat(co2.bcMax).toFixed(1) + " kg CO2";
	ghgCali.innerHTML = parseFloat(co2.caliMin).toFixed(1) + " - " + parseFloat(co2.caliMax).toFixed(1) + " kg CO2";
}
	
/*
 * Collapsible content control
 */
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

