// create place state
var createNewPlace = false;

// map view
var view;

// row function for popup, only diplay present values
function attributeRow(value, key, data) {
    if (value != 0 && value != '' && value != null) {
        var rowString = "<tr><td>" + key.replace("_", " ") + "</td><td>"
        if (Number.isInteger(value) && value == 1)
            rowString += "<i class='fa fa-check' style ='color: green'></i></td></tr>";
        else
            rowString += value + "</td></tr>";
        return rowString;
    } else
        return ''
}


// meat and potatoes
require([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/FeatureLayer",
    "esri/layers/GraphicsLayer",
    "esri/geometry/Point",
    "esri/Graphic",
    "esri/widgets/Legend"
], function (Map, MapView, FeatureLayer, GraphicsLayer, Point, Graphic, Legend) {

    // init map
    var map = new Map({
        basemap: "streets"
    });
    view = new MapView({
        container: "viewDiv", // Reference to the scene div created in step 5
        map: map, // Reference to the map object created before the scene
        zoom: 11, // Sets zoom level based on level of detail (LOD)
        center: [-79.440118, 43.704117] // Sets center point of view using longitude,latitude
    });


    // edit action settings
    var editThisAction = {
        title: "Edit",
        id: "edit-location"
    };

    // popout template settings
    var template = {
        title: "<b>{Name}</b>",
        content: "<p>{Address}<br/><table class='table'><thead><tr><th colspan=2>Attribute</th></tr></thead><tbody></tbody>{Service_Animal:attributeRow}{Braille_Signs:attributeRow}{Auditory_Signals:attributeRow}{ASL_Friendly:attributeRow}{Reserved_Parking:attributeRow}{Fragrance_Free:attributeRow}{Elevators:attributeRow}{Automatic_Doors:attributeRow}{Ramp:attributeRow}{Male_Washroom:attributeRow}{Female_Washroom:attributeRow}{Gender_Neutral_Washroom:attributeRow}{Water:attributeRow}{Seating:attributeRow}{Shelter:attributeRow}{Single_Washroom:attributeRow}{Noise_Level:attributeRow}{Lighting:attributeRow}{Public_Space:attributeRow}{Pathway:attributeRow}{Name:attributeRow}{Address:attributeRow}{Slope}</tbody></table></p>",
        actions: [editThisAction]
    };

    // locations layer
    var accessInputs = new FeatureLayer({
        url: "https://services.arcgis.com/9PtzeAadJyclx9t7/arcgis/rest/services/Accessibility_Input/FeatureServer",
        outFields: ["*"],
        popupTemplate: template,
    });

    // add locations to map
    map.add(accessInputs);

    var legend = new Legend({
        view: view,
        layerInfos: [{
            layer: accessInputs,
            title: ""
        }]
    });

    // Add widget to the bottom right corner of the view
    view.ui.add(legend, "bottom-right");

    // listen for a click on the map and show the create form if in create mode
    view.on("click", function (event) {
        if (createNewPlace) {
            var lat = Math.round(event.mapPoint.latitude * 1000) / 1000;
            var lon = Math.round(event.mapPoint.longitude * 1000) / 1000;

            // fill hidden location inputs
            $("#latitude-input").val(lat);
            $("#longitude-input").val(lon);

            // show form
            $('#form-modal').modal();
        }
    });

    // Event handler for action
    view.popup.on("trigger-action", function (event) {
        // Open the edit form when the edit button is clicked
        if (event.action.id === "edit-location") {

            // get feature to edit
            var selectedFeature = view.popup.selectedFeature;

            // reset edit form
            $("#edit-form")[0].reset();

            // fill form with current attributes
            for (key in selectedFeature.attributes) {
                if (selectedFeature.attributes.hasOwnProperty(key)) {
                    if (key == 'Name' || key == 'Address' || key == 'Public_Space' || key == 'Lighting' || key == 'Noise_Level' || key == 'Pathway' || key == 'Slope')
                        $("#edit-form [name='" + key + "']").val(selectedFeature.attributes[key])
                    else
                        $("#edit-form [name='" + key + "']").prop("checked", selectedFeature.attributes[key])
                }
            }

            // show form
            $("#edit-form-modal").modal();
        }
    });

    // toggle the create mode
    $("#create-place-toggle").click(function () {
        if (createNewPlace)
            $(this).css('background-color', '#2c757f')
        else
            $(this).css('background-color', '#701C41')
        createNewPlace = !createNewPlace
    });

    // turn off create mode when form submits
    $('#form-modal').on('hidden.bs.modal hide.bs.modal', function (e) {
        createNewPlace = false;
        $("#create-place-toggle").css('background-color', '#2c757f')
    })

    // intercept when the serch form submits and perform the filtering
    $("#search-form").on("submit", function (e) {
        e.preventDefault();
        var formData = $("#search-form").serializeArray();
        var queries = [];
        for (input of formData) {
            if (input.value != '')
                queries.push(input.name + ' = ' + input.value);
        }
        if (queries.length > 0) {
            accessInputs.definitionExpression = queries.join(" AND ");
        }
        return false;
    })

    //reset search
    $('#reset-form').click(function () {
        // reset form
        $("#search-form")[0].reset();
        // reset definition expression
        accessInputs.definitionExpression = '';
    })

    // intercept when the create form submits and upload the new feature
    $("#create-form").on("submit", function (e) {
        e.preventDefault();

        // get form attributes
        var formData = $("#create-form").serializeArray();
        var attributes = {
            ASL_Friendly: 0,
            Auditory_Signals: 0,
            Automatic_Doors: 0,
            Braille_Signs: 0,
            Elevators: 0,
            Female_Washroom: 0,
            Fragrance_Free: 0,
            Gender_Neutral_Washroom: 0,
            Lighting: "",
            Male_Washroom: 0,
            Noise_Level: "",
            Ramp: 0,
            Reserved_Parking: 0,
            Service_Animal: 0
        }
        var lat, lng;
        for (input of formData) {
            if (input.name == 'latitude')
                lat = input.value;
            else if (input.name == 'longitude')
                lng = input.value;
            else
                attributes[input.name] = input.value;
        }

        // create point
        var point = new Point({
            longitude: lng,
            latitude: lat
        });

        // create graphic for new location
        var newLocation = new Graphic({
            geometry: point,
            attributes: attributes
        });

        // submit new location
        accessInputs.applyEdits({
            addFeatures: [newLocation]
        }).then(function (adds, updates, deletes) {
            accessInputs.refresh();
            console.log("Added feature successfully<br />OBJECTID: " + adds[0].objectId);
            $("#create-form")[0].reset();
        }, function (a) {
            console.log(a);
        });

        $('#form-modal').modal('hide');

        return false;
    });


    // intercept when the edit form submit and send the update
    $("#edit-form").on("submit", function (e) {
        e.preventDefault();

        // get the selected feature
        var selectedFeature = view.popup.selectedFeature;

        // update attributes from the form
        var formData = $("#edit-form").serializeArray();
        for (input of formData) {
            selectedFeature.attributes[input.name] = input.value;
        }

        // send the updates
        accessInputs.applyEdits({
            updateFeatures: [selectedFeature]
        }).then(function (adds, updates, deletes) {
            accessInputs.refresh();
            $("#edit-form")[0].reset();

        }, function (error) {
            console.log(error);
        });

        $('#edit-form-modal').modal('hide');

        return false;
    });

});
