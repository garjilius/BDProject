function addRowToTable(valore) {
    var table = document.getElementById("tabSuggerimentiBody");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = valore;
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