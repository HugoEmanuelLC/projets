const mySql = require('promise-mysql');

module.exports = mySql.createConnection({
    // host: '127.0.0.1:3306',
    // user: 'u883840348_hc85',
    // password: '050710hC85',
    // database: 'u883840348_waw_momo'

    host: 'localhost',
    user: 'root',
    password: '',
    database: 'waw_momo'
})
.then(console.log( 'Connexion à la DB reussi !' ))
.catch( err => console.log( 'Connexion à la DB échouée !' + err ));