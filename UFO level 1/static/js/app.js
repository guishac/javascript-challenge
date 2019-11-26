// from data.js
var tableData = data;

// YOUR CODE HERE!


//var button = d3.select("#button");
console.log(tableData)

date(tableData)
function date(datedata) {
    var tbody = d3.select("tbody");
    tbody.html('')
    datedata.forEach(function (ufoSighting) {
        console.log(ufoSighting);
        var row = tbody.append("tr");


        Object.entries(ufoSighting).forEach(function ([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);

        });

    });
}
var submit = d3.select("#filter-btn")
submit.on("click", function () {
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    console.log(tableData);
    var filteredData = tableData.filter(tabledata => tabledata.datetime === inputValue);
    console.log(filteredData);
    date(filteredData);
});
    





