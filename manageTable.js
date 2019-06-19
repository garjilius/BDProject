function addRowToTable(artista,numAlbum,durataMedia,durataTotale) {
    var table = document.getElementById("tabSuggerimentiBody");
    var row = table.insertRow(0);
    var cell3 = row.insertCell(0);
    cell3.innerHTML = (durataTotale/60).toFixed(2)+"m";
    cell3.style.width = '17%';
    var cell2 = row.insertCell(0);
    cell2.innerHTML = (durataMedia/60).toFixed(2)+"m";
    cell2.style.width = '17%';
    var cell0 = row.insertCell(0);
    cell0.innerHTML = numAlbum;
    cell0.style.width = '17%';
    var cell1 = row.insertCell(0);
    cell1.innerHTML = artista;
    cell1.style.width = '49%';
}

function addRowToTableBrano(artista,brano,durata,album) {
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

function addRowToStatsTable(result) {
    var table = document.getElementById("tabSuggerimentiBody");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = result;
}