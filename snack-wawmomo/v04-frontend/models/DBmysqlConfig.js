const mySql = require('promise-mysql');

module.exports = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'waw_momo'
})
.then(console.log( 'Connexion à la DB reussi !' ))
.catch( err => console.log( 'Connexion à la DB échouée !' + err ));