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

    //I used this to confirm that the inputValue is defined correctly....
    console.log(inputValue);
    
    //filter the original data using the input value
    var filteredData = tableData.filter(event => event.datetime == inputValue);

    //console.log(filteredData);

    //append data from each of the filtered objects to the table...
    filteredData.forEach((ufoSighting) => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });

});

//define the input of the date field
var input = d3.select("#datetime");
// Input fields can trigger a change event when new text is entered.
input.on("change", function() {
    // define the new input to the date field
    var newText = d3.event.target.value;
    //I used this to confirm that the newText is defined correctly
    console.log(newText);
    //this line replaces the existing html...with an empty table body...used to clear the existing table
    d3.select("tbody").html("<tbody></tbody>");
    //filter the original data with the new input
    var filteredData2 = tableData.filter(event => event.datetime == newText);
    //I used this to confirm that the data was filtered correctly
    console.log(filteredData2)
    //add each of the objects from the filtered data to the table...
    filteredData2.forEach((ufoSighting) => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });

    });