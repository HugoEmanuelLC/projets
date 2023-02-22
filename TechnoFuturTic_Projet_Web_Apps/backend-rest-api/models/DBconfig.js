const mySql = require('promise-mysql');

module.exports = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'projet_webapps'
})
.then(console.log( 'Connexion à la DB reussi !' ))
.catch( err => console.log( 'Connexion à la DB échouée !' + err ));