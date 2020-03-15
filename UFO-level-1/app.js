// from data.js
var tableData = data;

// select the button - Question: does it need to be selected with the id?  or can class be used? or type?  
//try all of these at the end...once it is working
var button = d3.select("#filter-btn");

//get the reference to the tbody...
var tbody = d3.select("tbody");

button.on("click", function() {
    // select the input element
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    
    var filteredData = tableData.filter(event => event.datetime == inputValue);

    //console.log(filteredData);

    filteredData.forEach((ufoSighting) => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });

});

var input = d3.select("#datetime");
// Input fields can trigger a change event when new text is entered.
input.on("change", function() {
    var newText = d3.event.target.value;
    console.log(newText);
    d3.select("tbody").html("<tbody></tbody>");
    var filteredData2 = tableData.filter(event => event.datetime == newText);
    console.log(filteredData2)
    filteredData2.forEach((ufoSighting) => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });

    });