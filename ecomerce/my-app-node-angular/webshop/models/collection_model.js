const DBConnection = require('./DBconfig');
const mySql = require('promise-mysql');

//afficher toutes les collections
exports.getAllCollections = () => {
    return DBConnection.then((conn) => {
        return conn.query("SELECT * FROM collection");
    })
};