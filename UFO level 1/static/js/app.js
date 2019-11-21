// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

var button = d3.select("#button");
console.log(tableData);

data.forEach(function (ufoSighting) {
    console.log(ufoSighting);
    var row = tbody.append("tr");


    Object.entries(ufoSighting).forEach(function ([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);


        


        button.on("click", function () {
            d3.event.preventDefault();
            var inputElement = d3.select("#datetime");
            var inputValue = inputElement.property("value");
            console.log(inputValue);
            console.log(tableData);
            var filteredData = tableData.filter(data => data.datetime === inputValue);
            console.log(filteredData);
        });
    });
});





