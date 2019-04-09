function compute(){
  var info_select = document.getElementById("info_select");
  document.getElementById("symbology_field_selected").style.display = "none";
  document.getElementById("gis_statistics_selected").style.display = "none";
  document.getElementById("individual_calculate_selected").style.display = "none";
  info_select.addEventListener("change", function(){
    switch (info_select.value) {
        case "_":
          document.getElementById("symbology_field_selected").style.display = "none";
          document.getElementById("gis_statistics_selected").style.display = "none";
          document.getElementById("individual_calculate_selected").style.display = "none";
          break;
        case "symbology_fields":
          document.getElementById("symbology_field_selected").style.display = "block";
          document.getElementById("gis_statistics_selected").style.display = "none";
          document.getElementById("individual_calculate_selected").style.display = "none";
          break;
        case "gis_statistics":
          document.getElementById("symbology_field_selected").style.display = "none";
          document.getElementById("gis_statistics_selected").style.display = "block";
          document.getElementById("individual_calculate_selected").style.display = "none";
          console.log("Did gis");
          break;
        case "individual_calculate":
          document.getElementById("symbology_field_selected").style.display = "none";
          document.getElementById("gis_statistics_selected").style.display = "none";
          document.getElementById("individual_calculate_selected").style.display = "block";
          var sq_footage_input  = document.getElementById("sq_foot_id");
          var energy_bill_input = document.getElementById("energy_bill_id");
          var toilets_input     = document.getElementById("toilet_id");
          var peeps_input       = document.getElementById("peeps_id");
          var results           = document.getElementById("result");
          var results_water     = document.getElementById("result_water");
          var laundry_peeps     = document.getElementById("peeps_id_laundry");
          var laundry_results   = document.getElementById("result_laundry");
          var dryer             = document.getElementById("peeps_id_dryer");
          var dryer_results     = document.getElementById("result_dryer");
          
          sq_footage_input.addEventListener("change", function(){
            results.innerHTML = "ROI = " + (((2*sq_footage_input.value)+2317)/(energy_bill_input.value*0.4*12)).toFixed(2) + " yrs.";  
          });
          
          energy_bill_input.addEventListener("change", function(){
            results.innerHTML = "ROI = " + (((2*sq_footage_input.value)+2317)/(energy_bill_input.value*0.4*12)).toFixed(2) + " yrs.";  
          });

          toilets_input.addEventListener("change", function(){
            var standard_toilet = 9 * peeps_input.value * 5; //computes standard L per day 
            var efficient_toilet = 4.8 * peeps_input.value * 5; //compute efficient L per day
            var calc_diff = (standard_toilet-efficient_toilet)*(0.004747688*365); // Money saved 
            console.log(toilets_input.value);
            var toilet_roi = ((toilets_input.value * 120)/calc_diff).toFixed(2);
            results_water.innerHTML = "ROI = " + toilet_roi + " yrs.";
          });

          peeps_input.addEventListener("change", function(){
            var standard_toilet = 9 * peeps_input.value * 5; //computes standard L per day 
            var efficient_toilet = 4.8 * peeps_input.value * 5; //compute efficient L per day
            var calc_diff = (standard_toilet-efficient_toilet)*(0.004747688*365); // Money saved 
            var toilet_roi = ((toilets_input.value * 120)/calc_diff).toFixed(2);
            results_water.innerHTML = "ROI = " + toilet_roi + " yrs.";
          });

          laundry_peeps.addEventListener("change", function(){
            laundry_results.innerHTML = "ROI = " + (250/(((laundry_peeps.value*2)*52)*0.21)).toFixed(2) + " yrs.";
          });

          dryer.addEventListener("change", function(){
            dryer_results.innerHTML = "ROI = " + (100/((dryer.value/4)*91)).toFixed(2) + " yrs."; 
          });
          break;
        default:
          break;
      }
  }); 
}
  

function load_all(Map, FeatureLayer, Basemap, MapView, SceneView, Extent, Search, Legend, WebStyleSymbol, watchUtils, query, CalciteMaps, CalciteMapsArcGIS){
    var building_template = { // autocasts as new PopupTemplate()
        title: "Building Information", 
        content: [{
          type: "fields",
          fieldInfos: [{
            fieldName: "AVG_HEIGHT",
            label: "Height of Building (meters)",
            visible: true,
            format: {
              places: 1
            }
          }, {
            fieldName: "TYPE",
            label: "Building Type",
            visible: true,
          },{
            fieldName: "Lighting",
            label: "LED Savings (Lifespan of bulbs)-$",
            visible: true,
            format: {
              places: 1,
              digitSeparator: true
            } 
          },{
            fieldName: "LightCO2",
            label: "LED (lbs. CO2 Reduced)",
            visible: true,
            format: {
              places: 1,
              digitSeparator: true
            }
          },{
            fieldName: "NumTrees",
            label: "Rooftop Trees",
            visible: true,
            format: {
              places: 0
            }
          },{
            fieldName: "TreesCO2",
            label: "Rooftop Trees (C02 - Metric Tons Absorbed)",
            visible: true,
            format: {
              places: 1,
              digitSeparator: true
            }
          }]
        }]
      };

    var building_3D = new FeatureLayer({
          url: "https://services.arcgis.com/3wgo1qnFL7YLB8lT/arcgis/rest/services/Parsed_Final/FeatureServer/0?token=qT02sraGhDLkKlTK0Tul3J3lGyX8QKVim4GpOov8YIsAU3Y5q_SRHp02gzkkDF6wt_gANfZjEaXoeW7VmdTn-K-8IBKRfXz0SlS7mTlkyMv2dz4tG4j_XX1-B-xpy8HJfc65BAb5CicxLvkP5P4MP7gT6qeifeWbKYfh2h0iYxGCPNRrGKaUohvjonL717QWwXkcxaeL-wr4wdi-kMRQ4PY4sln7jQ9tBR86lucThMLFPDOCcQ9-6DoVol7AVxjtElfmXhbvzHNJhhIeTFhQxA..",
          outFields: ["*"],
          popupTemplate: building_template
    });

    var building_2D = new FeatureLayer({
          url: "https://services.arcgis.com/3wgo1qnFL7YLB8lT/arcgis/rest/services/Parsed_Final/FeatureServer/0?token=qT02sraGhDLkKlTK0Tul3J3lGyX8QKVim4GpOov8YIsAU3Y5q_SRHp02gzkkDF6wt_gANfZjEaXoeW7VmdTn-K-8IBKRfXz0SlS7mTlkyMv2dz4tG4j_XX1-B-xpy8HJfc65BAb5CicxLvkP5P4MP7gT6qeifeWbKYfh2h0iYxGCPNRrGKaUohvjonL717QWwXkcxaeL-wr4wdi-kMRQ4PY4sln7jQ9tBR86lucThMLFPDOCcQ9-6DoVol7AVxjtElfmXhbvzHNJhhIeTFhQxA..",
          outFields: ["*"],
          popupTemplate: building_template
          //renderer: blank_renderer_2d
    });

    var white_ash = {
      type: "web-style",
      styleName: "esriRealisticTreesStyle",
      name: "Fraxinus"
    };

    var tree_renderer = {
      type: "simple",
      symbol: white_ash,
      label: "Tree",
      visualVariables:[{
        type: "size",
        axis: "height",
        field: "tree_heigh",
        valueUnit: "feet"
      }]
    };

    var trees = new FeatureLayer({
      url: "https://services.arcgis.com/3wgo1qnFL7YLB8lT/arcgis/rest/services/ParsedTrees/FeatureServer/0",
      outFields: ["*"],
      renderer: tree_renderer
    });

    var blank_renderer = {
          type: "simple",
          symbol: {
           type: "polygon-3d",
           symbolLayers: [{
            type: "extrude", 
            material: {
              color: "#a632bd"
            }
           }] 
          },
          visualVariables: [{
            type: "size",
            field: "AVG_HEIGHT",
          }]
      };

    var blank_renderer_2d = {
      type: "simple",
      symbol: {
        type: "simple-fill",
        color: "#a632bd",
        outline: {
          width: 0.5, 
          color: "black"
        }
      }
      }; 

    var height_renderer = {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [{
                type: "extrude"
              }]
            },
            visualVariables: [{
              type: "size",
              field: "AVG_HEIGHT",
              legendOptions: {
                title: "Height of Building (Meters)"
              },
              stops: [
                {
                  value: 4.9,
                  size: 4.9,
                  label: "4.9"
                },
                {
                  value: 6.5,
                  size: 6.5,
                  label: "6.5"
                },
                {
                  value: 13.8,
                  size: 13.8,
                  label: "13.8" 
                },{
                  value: 28.6,
                  size: 28.6,
                  label: "28.6"
                },{
                  value: 58,
                  size: 58,
                  label: "58"
                }
              ]
            },{
              type: "color",
              field: "AVG_HEIGHT",
              stops: [
              {
               value: 4.9,
               color: "#a6bddb" 
              },
              {
                value: 6.5,
                color: "#74a9cf"
              },
              {
                value: 13.8,
                color: "#3690c0"
              },{
                value: 28.6,
                color: "#0570b0"
              },{
                value: 58,
                color: "#034e7b"
              }]
            }]
          };  

    var height_renderer_2D = {
              type: "simple",
              symbol: {
                type: "simple-fill",
              },
              visualVariables: [{
                type: "color",
                field: "AVG_HEIGHT",
                stops: [
                {
                 value: 4.9,
                 color: "#a6bddb" 
                },
                {
                  value: 6.5,
                  color: "#74a9cf"
                },
                {
                  value: 13.8,
                  color: "#3690c0"
                },{
                  value: 28.6,
                  color: "#0570b0"
                },{
                  value: 58,
                  color: "#034e7b"
                }]
              }]
            };

    var building_type_2D = {
      type: "unique-value",
      field: "TYPE",
      uniqueValueInfos: [{
        value: "Residential",
        symbol: {
          type: "simple-fill",  // autocasts as new SimpleFillSymbol()
          color: "#FC921F",
          outline: {
            width: 0.5,
            color: [ 0, 0, 0, 0.2 ]
          }
        },
        label: "Residential"
      },{
        value: "Non-Residential", 
        symbol: {
          type: "simple-fill",  // autocasts as new SimpleFillSymbol()
          color: "#9E559C",
          outline: {
            width: 0.5,
            color: [ 0, 0, 0, 0.2 ]
          }
        },
        label: "Non-Residential"
      }]
    };

    var building_type = {
      type: "unique-value",
      field: "TYPE",
      uniqueValueInfos: [{
        value: "Residential",
        symbol: {
          type: "polygon-3d",
          symbolLayers: [{
            type: "extrude",
            material: {
              color: "#FC921F"
            },
            edges: {
              type: "solid",
              color: "#AF6515"
            }
          }]
        },
        label: "Residential"
      },{
        value: "Non-Residential",
        symbol: {
          type: "polygon-3d",
          symbolLayers: [{
            type: "extrude",
            material: {
              color: "#9E559C"
            },
            edges: {
              type: "solid",
              color: "#60345F"
            }
          }] 
        }
      }],
      visualVariables: [{
        type:"size",
        field: "AVG_HEIGHT",
        valueUnit: "meters"
      }]
    };

    var lighting_renderer_2D = {
      type: "simple",
      symbol: {
        type: "simple-fill",
      },
      visualVariables: [{
        type: "color",
        field: "Lighting",
        stops: [
        {
          value: 62404,
          color: "#a6bddb"
        },{
          value: 200855,
          color: "#74a9cf"
        },{
          value: 393662,
          color: "#3690c0"
        },{
          value: 755520,
          color: "#0570b0"
        },{
          value: 1406060,
          color: "#034e7b"
        }]
      }]
    };

    var lighting_renderer = {
        type: "simple",
        symbol: {
          type: "polygon-3d",
          symbolLayers: [{
            type: "extrude"
          }]
        },
        visualVariables: [{
          type: "size",
          field: "Lighting",
          stops: [
            {
              value: 62404,
              size: 62404/10000,
              label: "62404"
            },
            {
              value: 200855,
              size: 200855/10000,
              label: "200855"
            },
            {
              value: 393662,
              size: 393662/10000,
              label: "393662" 
            },{
              value: 755520,
              size: 755520/10000,
              label: "755520"
            },{
              value: 1406060,
              size: 1406060/10000,
              label: "1406060"
            }
          ]
        },{
          type: "color",
          field: "Lighting",
          stops: [
          {
           value: 62404,
           color: "#a6bddb" 
          },
          {
            value: 200855,
            color: "#74a9cf"
          },
          {
            value: 393662,
            color: "#3690c0"
          },{
            value: 755520,
            color: "#0570b0"
          },{
            value: 1406060,
            color: "#034e7b"
          }]
        }]
      };  

    
    var lighting_co2_renderer_2D = {
      type: "simple",
      symbol: {
        type: "simple-fill",
      },
      visualVariables: [{
        type: "color",
        field: "LightCO2",
        stops: [
        {
          value: 14.3,
          color: "#a6bddb"
        },{
          value: 46.1,
          color: "#74a9cf"
        },{
          value: 90.3,
          color: "#3690c0"
        },{
          value: 173.3,
          color: "#0570b0"
        },{
          value: 322.6,
          color: "#034e7b"
        }]
      }]
    };

    var lighting_co2_renderer = {
      type: "simple",
        symbol: {
          type: "polygon-3d",
          symbolLayers: [{
            type: "extrude"
          }]
        },
        visualVariables: [{
          type: "size",
          field: "LightCO2",
          stops: [
            {
              value: 14.3,
              size: 14.3/10,
              label: "14.3"
            },
            {
              value: 46.1,
              size: 46.1/10,
              label: "46.1"
            },
            {
              value: 90.3,
              size: 90.3/10,
              label: "90.3" 
            },{
              value: 173.3,
              size:  173.3/10,
              label: "173.3"
            },{
              value: 322.6,
              size: 322.6/10,
              label: "322.6"
            }
          ]
        },{
          type: "color",
          field: "LightCO2",
          stops: [
          {
           value: 14.3,
           color: "#a6bddb" 
          },
          {
            value: 46.1,
            color: "#74a9cf"
          },
          {
            value: 90.3,
            color: "#3690c0"
          },{
            value: 173.3,
            color: "#0570b0"
          },{
            value: 322.6,
            color: "#034e7b"
          }]
        }]
      };

    var num_trees_renderer_2D = {
      type: "simple",
      symbol: {
        type: "simple-fill",
      },
      visualVariables: [{
        type: "color",
        field: "NumTrees",
        stops: [
        {
          value: 13.0,
          color: "#a6bddb"
        },{
          value: 41.8,
          color: "#74a9cf"
        },{
          value: 82.0,
          color: "#3690c0"
        },{
          value: 157.4,
          color: "#0570b0"
        },{
          value: 292.9,
          color: "#034e7b"
        }]
      }]
    };

    var num_trees_renderer = {
      type: "simple",
        symbol: {
          type: "polygon-3d",
          symbolLayers: [{
            type: "extrude"
          }]
        },
        visualVariables: [{
          type: "size",
          field: "NumTrees",
          stops: [
            {
              value: 13.0,
              size: 13.0/10,
              label: "13.0"
            },
            {
              value: 41.8,
              size: 41.8/10,
              label: "41.8"
            },
            {
              value: 82.0,
              size: 82.0/10,
              label: "82.0" 
            },{
              value: 157.4,
              size:  157.4/10,
              label: "157.4"
            },{
              value: 292.9,
              size: 292.9/10,
              label: "292.9"
            }
          ]
        },{
          type: "color",
          field: "NumTrees",
          stops: [
          {
           value: 13.0,
           color: "#a6bddb" 
          },
          {
            value: 41.8,
            color: "#74a9cf"
          },
          {
            value: 82.0,
            color: "#3690c0"
          },{
            value: 157.4,
            color: "#0570b0"
          },{
            value: 292.9,
            color: "#034e7b"
          }]
        }]
      };

    var trees_co2_renderer_2D = {
      type: "simple",
      symbol: {
        type: "simple-fill",
      },
      visualVariables: [{
        type: "color",
        field: "TreesCO2",
        stops: [
        {
          value: 283.1,
          color: "#a6bddb"
        },{
          value: 911.1,
          color: "#74a9cf"
        },{
          value: 1785.7,
          color: "#3690c0"
        },{
          value: 3426.0,
          color: "#0570b0"
        },{
          value: 6378.2,
          color: "#034e7b"
        }]
      }]
    };


    var trees_co2_renderer = {
      type: "simple",
        symbol: {
          type: "polygon-3d",
          symbolLayers: [{
            type: "extrude"
          }]
        },
        visualVariables: [{
          type: "size",
          field: "TreesCO2",
          stops: [
            {
              value: 283.1,
              size: 283.1/100,
              label: "283.1"
            },
            {
              value: 911.1,
              size: 911.1/100,
              label: "911.1"
            },
            {
              value: 1785.7,
              size: 1785.7/100,
              label: "1785.7" 
            },{
              value: 3426.0,
              size:  3426.0/100,
              label: "3426.0"
            },{
              value: 6378.2,
              size: 6378.2/100,
              label: "6378.2"
            }
          ]
        },{
          type: "color",
          field: "TreesCO2",
          stops: [
          {
           value: 283.1,
           color: "#a6bddb" 
          },
          {
            value: 911.1,
            color: "#74a9cf"
          },
          {
            value: 1785.7,
            color: "#3690c0"
          },{
            value: 3426.0,
            color: "#0570b0"
          },{
            value: 6378.2,
            color: "#034e7b"
          }]
        }]
      };


    app = {
        zoom: 10,
        //center: [-40,40],
        basemap: "dark-gray",
        viewPadding: {
          top: 50, bottom: 0
        },
        uiPadding: {
          top: 15, bottom: 15
        },
        map: null,
        mapView: null,
        sceneView: null,
        activeView: null,
        searchWidgetNav: null,
        containerMap: "mapViewDiv",
        containerScene: "sceneViewDiv"
      };

      // Map 
      app.map = new Map({
        basemap: app.basemap,
        ground: "world-elevation"
      });

      // 2D View
      app.mapView = new MapView({
        container: null, // deactivate
        map: new Map({
          basemap: app.basemap,
          layers: [building_2D]
        }),
        zoom: app.zoom,
        //center: app.center,
        padding: app.viewPadding,
        ui: {
          components: ["zoom", "compass", "attribution"],
          padding: app.uiPadding
        }
      });

      app.mapView.extent = new Extent({
        xmin: -8826576.75812051, 
        ymin: 5432945.90086334,
        xmax:  -8821316.56409142,
        ymax: 5437358.08209618,
        spatialReference: {
          wkid: 102100
        }
      });

      // 3D View 
      app.sceneView = new SceneView({
        container: app.containerScene,
        map: new Map({
          basemap: app.basemap,
          layers: [trees, building_3D]
        }),
        padding: app.viewPadding,
        ui: {
          padding: app.uiPadding
        }
      });

      app.sceneView.extent = new Extent({
        xmin: -8826576.75812051, 
        ymin: 5432945.90086334,
        xmax:  -8821316.56409142,
        ymax: 5437358.08209618,
        spatialReference: {
          wkid: 102100
        }
      });

      app.mapView.constraints = {
        minZoom: 13
      };


      // Active view is scene
      setActiveView(app.sceneView);

      // Create search widget
      app.searchWidgetNav = new Search({
        container: "searchNavDiv",
        view: app.activeView
      });

      // Wire-up expand events
      CalciteMapsArcGIS.setSearchExpandEvents(app.searchWidgetNav);
      CalciteMapsArcGIS.setPopupPanelSync(app.mapView);
      CalciteMapsArcGIS.setPopupPanelSync(app.sceneView);

      // Menu UI - change Basemaps
      query("#selectBasemapPanel").on("change", function(e){
        app.mapView.map.basemap = e.target.options[e.target.selectedIndex].dataset.vector;
        app.sceneView.map.basemap = e.target.value;
      });  

      // Tab UI - switch views
      query(".calcite-navbar li a[data-toggle='tab']").on("click", function(e) {
        if (e.target.text.indexOf("Map") > -1) {
          syncViews(app.sceneView, app.mapView);
          setActiveView(app.mapView);
          $(".esri-legend__message").hide();
        } else {
          syncViews(app.mapView, app.sceneView);
          setActiveView(app.sceneView);
          $(".esri-legend__message").hide();
        }
        syncSearch(app.activeView);
      }); 

      // Views
      function syncViews(fromView, toView) {
        var viewPt = fromView.viewpoint.clone();
        fromView.container = null;
        if (fromView.type === "3d") {          
          toView.container = app.containerMap;
        } else {
          toView.container = app.containerScene;
        }
        toView.viewpoint = viewPt;
        toView.padding = app.viewPadding;
      }

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

      // Active view
      function setActiveView(view) {
        app.activeView = view;
      }

      var field_info = document.getElementById("selected_fields");

      var legend = new Legend({
            view: app.sceneView,
            container: "legendDiv",
      });

      var legend_2d = new Legend({
        view: app.mapView, 
        container: "legendDiv"
      });

      $(".esri-legend__message").hide();

      building_2D.renderer = blank_renderer_2d;
      building_3D.renderer = blank_renderer;
      field_info.addEventListener("change", function(){
        if(field_info.value == "__"){
          building_2D.renderer = blank_renderer_2d;
          building_3D.renderer = blank_renderer;
        }
        else if(field_info.value == "avg_height"){
          building_2D.renderer = height_renderer_2D;
          building_3D.renderer = height_renderer;
        }
        else if(field_info.value == "build_type"){
          building_2D.renderer = building_type_2D;
          building_3D.renderer = building_type;
        }
        else if(field_info.value == "build_light"){
          building_2D.renderer = lighting_renderer_2D;
          building_3D.renderer = lighting_renderer;
        }
        else if(field_info.value == "light_co2"){
          building_2D.renderer = lighting_co2_renderer_2D;
          building_3D.renderer = lighting_co2_renderer;
        }
        else if(field_info.value == "num_trees"){
          building_2D.renderer = num_trees_renderer_2D;
          building_3D.renderer = num_trees_renderer;
        }
        else if(field_info.value == "trees_co2"){
          building_2D.renderer = trees_co2_renderer_2D;
          building_3D.renderer = trees_co2_renderer;
        }
      });
}