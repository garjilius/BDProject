function addRowToTable(valore) {
    var table = document.getElementById("tabSuggerimentiBody");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = valore;
}

function addRowToTableBrano(valore) { //UNUSED
    var table = document.getElementById("tabSuggerimentiBody");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = valore.properties.title;
    var cell2 = row.insertCell(0);
    cell2.innerHTML = valore.properties.duration;

}

function flushTable() {
    var table = document.getElementById("tabSuggerimentiBody").innerHTML ="";

}

function addRowToQueryTable(query) {
    var table = document.getElementById("tableQueryBody");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = query;
}