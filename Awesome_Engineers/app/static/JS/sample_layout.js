require(["esri/Map", "esri/views/MapView"], function (Map, MapView) {
    // Create the Map
    var map = new Map({
        basemap: "topo"
    });

    // Create the view set the view padding to be 320 px from the right
    var view = new MapView({
        container: "viewDiv",
        map: map,
        center: [-79.5, 43.77], // Liberty Island, NY, USA
        zoom: 16,
        padding: {
            right: 320 // Same value as the #sidebar width in CSS
        }
    });
});