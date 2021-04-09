// from data.js
var Data = data;
// YOUR CODE HERE!
var tbody = d3.select('tbody');
//console.log(tableData);
Data.forEach((sight) => {
    var row = tbody.append('tr');
    Object.entries(sight).forEach(([key,value]) => {
        var cell = row.append('td');
        cell.text(value);
    });
});
var btn = d3.select('#filter-btn');
var frm = d3.select('#form');
btn.on('click',Run);
frm.on('submit',Run);
function Run() {
    d3.event.preventDefault();
    var elmnt = d3.select('#datetime');
    var value = elmnt.property('value');
    var filtered = Data.filter(date => date.datetime === value.trim());
    tbody.html('');
    filtered.forEach((date) => {
        var row = tbody.append('tr');
        Object.entries(date).forEach(([key,value]) => {
            var cell = row.append('td');
            cell.text(value);
        });
    });
}