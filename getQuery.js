var driver = neo4j.v1.driver('bolt://localhost', neo4j.v1.auth.basic('neo4j', 'password'));

var session = driver.session();

function rightQuery(){
    console.log("getRightQuery");
    let chiaveRicerca = document.getElementById("barraRicerca").value;
    if(document.getElementById("checkArtista").checked) {
        if(document.getElementById("checkGenere").checked) {
            console.log("genere");

        }
        if(document.getElementById("checkGruppo").checked) {
            matchToSimilarBand(chiaveRicerca);
            console.log("gruppo "+chiaveRicerca);

        }
    }
}

function matchToSimilarBand(nomeBand) {
    flushTable();
//const collectedNames = [];
    let query = 'MATCH (artist1:Artist {name:\''+nomeBand+'\'})-[r:SIMILAR_TO]->(artist2:Artist) return artist2.name LIMIT 20';
    runQuery(query);
}

function runQuery(query) {
    addRowToQueryTable(query);
    const result = session.run(query);
    result.subscribe({
        onNext: record => {
            const name = record.get(0);
            //collectedNames.push(name);
            addRowToTable(name);
        },
        onCompleted: () => {
            session.close();
        },
        onError: error => {
            console.log(error);
        }
    });
}


