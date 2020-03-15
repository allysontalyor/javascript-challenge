// from data.js
var tableData = data;

// select the button - Question: does it need to be selected with the id?  or can class be used? or type?  
//try all of these at the end...once it is working
//NOTE:  I tried all three and they all work!!
var button = d3.select("#filter-btn");
//var button = d3.select("button");
//var button = d3.select(".btn btn-default")

//get the reference to the tbody...
var tbody = d3.select("tbody");

//What happens when the button is clicked...
button.on("click", function() {
    // select the input elements for each of the five search criteria
    var inputElement1 = d3.select("#datetime");
    var inputElement2 = d3.select("#country");
    var inputElement3 = d3.select("#state");
    var inputElement4 = d3.select("#shape");
    var inputElement5 = d3.select("#city");
    

    // Get the value property of the input element
    //these variables hold the input values as a string
    var inputDate = inputElement1.property("value");
    var inputCountry = inputElement2.property("value");
    var inputState = inputElement3.property("value");
    var inputShape = inputElement4.property("value");
    var inputCity = inputElement5.property("value");
    
    
    //I used this just to test my variables...
    //console.log(inputDate);
    //console.log(inputCountry);
    
    //create a new variable that contains the filtered data
    //the original data is an array of objects...filter function is not defined separately
    var filteredData = tableData.filter(event => event.datetime == inputDate 
      && event.country == inputCountry && event.state == inputState
      && event.city == inputCity && event.shape == inputShape);

    //I used this to practice the filtering before adding the filtered data to the table...
    //console.log(filteredData);

    //first line itterates through each of the objects in the filtered data
    filteredData.forEach((ufoSighting) => {
        //for each of the objects a row needs to be added
        var row = tbody.append("tr");
        //for each key,value in an object, a td ("table data") is added to hold each value
        Object.entries(ufoSighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });

});

//Added in a button to clear the existing table....
var button1 = d3.select("#clear-btn");

button1.on("click", function() {
  d3.select("tbody").html("<tbody></tbody>");
});


