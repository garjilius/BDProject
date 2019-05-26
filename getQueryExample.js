var driver = neo4j.v1.driver('bolt://localhost', neo4j.v1.auth.basic('neo4j', 'password'));

var session = driver.session();

const result = session.run('MATCH (driver:Driver {name: $name}) RETURN driver', {'name': 'Fernando Alonso'});
const collectedNames = [];

result.subscribe({
    onNext: record => {
        const name = record.get(0);
        collectedNames.push(name);
    },
    onCompleted: () => {
        session.close();

        console.log('Names: ' + collectedNames.join(', '));
    },
    onError: error => {
        console.log(error);
    }
});

//
const result = session.run('MATCH (driver:Driver {name: $name})-[result:FINISHED]->(race:GrandPrix {city: $city}) RETURN result', {'name': 'Fernando Alonso', 'city':'Budapest'});
const collectedNames = [];

result.subscribe({
    onNext: record => {
        const name = record.get(0);
        console.log (name.properties.points.low);
        collectedNames.push(name);
    },
    onCompleted: () => {
        session.close();

        //console.log('Names: ' + collectedNames.join(', '));
    },
    onError: error => {
        console.log(error);
    }
});