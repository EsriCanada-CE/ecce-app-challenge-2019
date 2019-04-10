/*
var featureLayer;
function intializeFeatureLayer(map) {

    featureLayer = new FeatureLayer({
        url: "https://services.arcgis.com/4TKcmj8FHh5Vtobt/arcgis/rest/services/Carpool_DataSheet/FeatureServer/0",
        outFields: ["*"],
        visible: true
    });

    map.add(featureLayer);
}

function addFeature(point, carYear, carMake, carModel, latitude, longitude, name, email) {
    const attributes = {};
    attributes["Car_Year"] = carYear;
    attributes["Car_Make"] = carMake;
    attributes["Car_Model"] = carModel;
    attributes["Pool_Count"] = 1;
    attributes["Latitude"] = latitude;
    attributes["Longitude"] = longitude;
    attributes["Name"] = name;
    attributes["Email"] = email;

    const addFeature =  new Graphic({
        geometry: point,
        attributes: attributes
    });

    featureLayer.applyEdits({
        addFeatures: [addFeature]
    }).then( function(result) {
        console.log("projected points: ", result);
    }).catch( function(error) {
        console.error("Error while adding feature: ", error);
    });
}*/