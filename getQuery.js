var driver = neo4j.v1.driver('bolt://localhost', neo4j.v1.auth.basic('neo4j', 'password'));

var session = driver.session();

let nomeBand = 'The Rolling Stones';
const result = session.run('MATCH (artist1:Artist {name: $name})-[r:SIMILAR_TO]->(artist2:Artist) return artist2.name', {'name': nomeBand });
//const collectedNames = [];

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