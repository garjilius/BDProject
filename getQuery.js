var driver = neo4j.v1.driver('bolt://localhost', neo4j.v1.auth.basic('neo4j', 'password'));

var session = driver.session();

function rightQuery(){
    console.log("getRightQuery");
    flushTable();
    //Prima Selezione
    let checkArtista = document.getElementById("checkArtista").checked;
    let checkBrano = document.getElementById("checkBrano").checked;

    //Seconda Selezione


    if(!checkArtista && !checkBrano) {
        alert("Selezionare se si desidera basare la ricerca su brani o artisti");
    }

    let chiaveRicerca = document.getElementById("barraRicerca").value;

    if(checkArtista) {
        let checkGenere = document.getElementById("checkGenere").checked;
        let checkGruppo = document.getElementById("checkGruppo").checked;
        console.log('checkArtista');
        if(checkGenere) {
            console.log("genere");
            matchGenereBand(chiaveRicerca);
        }
        if(checkGruppo) {
            matchToSimilarBand(chiaveRicerca);
        }
        if(!checkGenere && !checkGruppo) {
            alert("Selezionare se si desidera basare la ricerca sul genere del gruppo o sulla 'similitudine' tra i gruppi");
        }
    }
    if(checkBrano) {
        let checkGenere = document.getElementById("checkGenere").checked;
        let checkGruppo = document.getElementById("checkGruppo").checked;
        let checkAnno = document.getElementById("checkAnno").checked;
        let checkDurata = document.getElementById("checkDurata").checked;
        if(checkGenere) {
            matchGenereBrano(chiaveRicerca);
        }
        if(checkAnno) {
            matchAnnoBrano(chiaveRicerca);
        }
        if(checkDurata) {
            matchDurataSimile(chiaveRicerca);
        }
        if(checkGruppo) {
            matchGruppoSimileBrano(chiaveRicerca);
        }
        if(!checkGenere && !checkGruppo && !checkAnno && !checkDurata) {
            alert("Selezionare uno dei criteri tra genere, gruppo simile, anno e durata");
        }
    }
}

function matchToSimilarBand(nomeBand) {
//const collectedNames = [];
    let query = 'MATCH (artist1:Artist {name:\''+nomeBand+'\'})-[r:SIMILAR_TO]->(artist2:Artist) RETURN DISTINCT artist2.name LIMIT 10';
    runQuery(query);
}

function matchGenereBand(nomeBand) {
    flushTable();
//const collectedNames = [];
    let query = 'MATCH (artist1:Artist {name:\''+nomeBand+'\' })-[:HAS_GENRE]->(genre:Genre)<-[:HAS_GENRE]-(artist2:Artist) RETURN DISTINCT artist2.name LIMIT 10';
    runQuery(query);
}

function matchGenereBrano(nomeBrano) {
//const collectedNames = [];
    let query = 'MATCH (track:Music {title:\''+nomeBrano+'\'})-[r:HAS_GENRE]->(genre:Genre)<-[:HAS_GENRE]-(track2:Music) MATCH (artist:Artist)-[:OWNS]->(track2) RETURN DISTINCT artist.name LIMIT 10';
    runQuery(query);
}

function matchGruppoSimileBrano(nomeBrano) {
//const collectedNames = [];
    let query = 'MATCH (track:Music {title:\''+nomeBrano+'\'})<-[owns:OWNS]-(artist:Artist)-[similar:SIMILAR_TO]->(similarArtist:Artist) RETURN DISTINCT similarArtist.name LIMIT 10';
    runQuery(query);
}

function matchDurataSimile(nomeBrano) {
//const collectedNames = [];
    let query = 'Match (track:Music {title:\''+nomeBrano+'\'})\n' +
        'MATCH (track2:Music) WHERE toInt(track2.duration)-toInt(track.duration) <30 \n' +
        'MATCH (track2) WHERE  toInt(track.duration)-toInt(track2.duration) <30 \n' +
        'MATCH (track2)<-[owned:OWNS]-(artist:Artist) Return DISTINCT artist.name LIMIT 10';
    runQuery(query);
}

function matchAnnoBrano(nomeBrano) {
//const collectedNames = [];
    let query = 'Match (track:Music {title:\''+nomeBrano+'\'})-[:RELEASED_IN]->(year1:Year) \n' +
        'Match (track2:Music)-[r:RELEASED_IN]->(year2:Year {year:year1.year}) RETURN DISTINCT track2.title LIMIT 10';
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

//INUTILIZZATA
function runQueryBrano(query) {
    addRowToQueryTable(query);
    const result = session.run(query);
    result.subscribe({
        onNext: record => {
            const name = record.get(0);
            //collectedNames.push(name);
            addRowToTableBrano(name);
            console.log(name);
        },
        onCompleted: () => {
            session.close();
        },
        onError: error => {
            console.log(error);
        }
    });
}




