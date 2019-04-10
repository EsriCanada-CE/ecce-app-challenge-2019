var selectedCar;

function loadCSV() {
    d3.csv("static/CSV/carfuelrating.csv", function (error, data) {

        updateCarYearSelection(data);
        var filteredData = updateCarMakeSelection(data, false);
        selectedCar = updateCarModelSelection(filteredData, false);

        // TODO update view here
        showCostnCO2(selectedCar);
        console.log(selectedCar);
    });
}

function updateCarYearSelection(data) {
    var yearKeys = d3.map(data, function (d) {
        return d.YEAR;
    }).keys().sort().reverse();
    //console.log("Year Keys: " + yearKeys);

    d3.select("#vehicleYear").selectAll("option").data(yearKeys).enter().append("option")
        .text(String).attr("value", String);
    d3.select("#vehicleYear").on("change", function () {
        //document.getElementById('selectedYear').innerHTML = this.value;
        updateCarMakeSelection(data);
    });
}

function updateCarMakeSelection(data, isUpdate = true) {
    var filteredData = carYearDataFilter(data);
    var makeKeys = d3.map(filteredData, function (d) {
        return d.MAKE;
    }).keys();
    //console.log("Make Keys: " + makeKeys);

    // false condition code runs on first run
    if (isUpdate) {
        d3.select("#vehicleMake").selectAll("option").data(makeKeys).attr("value", String).text(String)
            .enter().append("option").attr("value", String).text(String).transition().duration(1);
        d3.select("#vehicleMake").selectAll("option").data(makeKeys).exit().remove();

        updateCarModelSelection(filteredData);
    } else {
        d3.select("#vehicleMake").selectAll("option").data(makeKeys).enter().append("option")
            .attr("value", String).text(String);
    }

    d3.select("#vehicleMake").on("change", function () {
        //document.getElementById('selectedMake').innerHTML = this.value;
        updateCarModelSelection(filteredData);
    });

    return filteredData;
}

function updateCarModelSelection(data, isUpdate = true) {
    var filteredData = carMakeDataFilter(data);
    var modelKeys = d3.map(filteredData, function (d) {
        return d.MODEL;
    }).keys();
    //console.log("Model Keys: " + modelKeys);


    // false condition code runs on first run
    if (isUpdate) {
        d3.select("#vehicleModel").selectAll("option").data(modelKeys).attr("value", String).text(String)
            .enter().append("option").attr("value", String).text(String).transition().duration(1);
        d3.select("#vehicleModel").selectAll("option").data(modelKeys).exit().remove();

        // TODO update view here
        selectedCar = carModelDataFilter(filteredData);
        showCostnCO2(selectedCar);
        console.log(selectedCar);
    } else {
        d3.select("#vehicleModel").selectAll("option").data(modelKeys).enter().append("option")
            .attr("value", String).text(String);

        selectedCar = carModelDataFilter(filteredData);
    }

    d3.select("#vehicleModel").on('change', function () {
        //document.getElementById('selectedModel').textContent = this.value;

        // TODO update view here
        selectedCar = carModelDataFilter(filteredData);
        showCostnCO2(selectedCar);
        console.log(selectedCar);
    });

    return selectedCar;
}

function carYearDataFilter(data) {
    var yearSelection = document.getElementById('vehicleYear');
    var year = yearSelection.options[yearSelection.selectedIndex].value;

    data = data.filter(function (d) {
        return d.YEAR == year;
    });
    return data;
}

function carMakeDataFilter(data) {
    var makeSelection = document.getElementById('vehicleMake');
    var make = makeSelection.options[makeSelection.selectedIndex].value;

    data = data.filter(function (d) {
        return d.MAKE == make;
    });
    return data;
}

function carModelDataFilter(data) {
    var modelSelection = document.getElementById('vehicleModel');
    var model = modelSelection.options[modelSelection.selectedIndex].value;

    data = data.filter(function (d) {
        return d.MODEL == model;
    });
    return data;
}


function showCostnCO2(data) {
    var COEmision = data[0].COE * totalLength * 2 * 200 / 1000; //in grams
    var Cost = data[0].FCCOMB * totalLength / 100 * 2 * 200 * 1.15; //in dollar
    document.getElementById("co2-emission").innerHTML = COEmision.toFixed(1);
    document.getElementById("cost").innerHTML = Cost.toFixed(2);
}