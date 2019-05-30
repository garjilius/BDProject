function addRowToTable(valore) {
    var table = document.getElementById("tabSuggerimentiBody");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = valore;
}

function addRowToTableBrano(artista,brano,durata,album) { //UNUSED
    var table = document.getElementById("tabSuggerimentiBody");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = (parseFloat(durata)/60).toFixed(2) + "m";
    var cell2 = row.insertCell(0);
    cell2.innerHTML = artista;
    var cell3 = row.insertCell(0);
    cell3.innerHTML = album;
    var cell4 = row.insertCell(0);
    cell4.innerHTML = brano;

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