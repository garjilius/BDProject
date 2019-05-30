
function filtroArtistaBrano() {

    if(document.getElementById("checkArtista").checked) {
        document.getElementById("barraRicerca").placeholder = 'Inserisci il nome dell\'artista o del gruppo';

        document.getElementById("divSimilitudine").innerHTML = "        <legend>Scegli i criteri di similitudine</legend>\n" +
            "        <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\n" +
            "            <label class=\"btn btn-primary active\">\n" +
            "                <input type=\"radio\" name=\"options1\" id=\"checkGenere\" autocomplete=\"off\" checked> Genere\n" +
            "            </label>\n" +
            "            <label class=\"btn btn-primary\">\n" +
            "                <input type=\"radio\" name=\"options1\" id=\"checkGruppo\" autocomplete=\"off\"> Gruppo\n" +
            "            </label>\n" +
            "        </div>";


    }

    if(document.getElementById("checkBrano").checked) {
        document.getElementById("barraRicerca").placeholder = 'Inserisci il nome del brano';

        document.getElementById("divSimilitudine").innerHTML ="         <legend>Scegli i criteri di similitudine</legend>\n" +
            "        <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\n" +
            "            <label class=\"btn btn-primary active\" id=\"labelAnno\">\n" +
            "                <input type=\"radio\" name=\"options2\" id=\"checkAnno\" autocomplete=\"off\" checked> Anno\n" +
            "            </label>\n" +
            "            <label class=\"btn btn-primary\">\n" +
            "                <input type=\"radio\" name=\"options2\" id=\"checkGenere\" autocomplete=\"off\"> Genere\n" +
            "            </label>\n" +
            "            <label class=\"btn btn-primary\">\n" +
            "                <input type=\"radio\" name=\"options2\" id=\"checkGruppo\" autocomplete=\"off\"> Gruppo\n" +
            "            </label>\n" +
            "            <label class=\"btn btn-primary\">\n" +
            "                <input type=\"radio\" name=\"options2\" id=\"checkDurata\" autocomplete=\"off\"> Durata Brano\n" +
            "            </label>\n" +
            "        </div>";
    }
}