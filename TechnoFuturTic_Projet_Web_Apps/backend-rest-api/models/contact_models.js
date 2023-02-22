const DBConnection = require('./DBconfig');
const mySql = require('promise-mysql');

//afficher toutes les contacts
exports.getAllContacts = () => {
    return DBConnection.then((conn) => {
        return conn.query("SELECT contact_ID, nom FROM `contact`");   //à verifier les noms avec DB
    })
};

//afficher un des contacts
exports.getOneContact = () => {
    return DBConnection.then((conn) => {
        return conn.query("SELECT ");
    })
};

//creation d une nouvelle contact
exports.postInsertionNewContact = (body) => {
    return DBConnection.then((conn) => {
        //requete prepare
        const sqlQuery = "INSERT INTO `contact`(`nom`, `TYPE_TVA_ID`) "
            +   "VALUES (?, (SELECT TYPE_TVA_ID FROM TYPE_TVA WHERE tva LIKE ?) )";   //à verifier les noms avec DB
        const sqlData = [body.nom , body.tva];
        const query = mySql.format(sqlQuery, sqlData);

        return conn.query( query )
        .then(function(r) {
            return { insertId: r.insertId }
        }).catch(e => {
            return e
        });
    });
};

//modification d une des contacts
exports.UpdateContact = (body) => {
    console.log(body);
    return DBConnection.then((conn) => {
        //requete preparé
        const sqlQuery = "UPDATE `contact` SET ? WHERE contact_ID= ? ";   //à verifier les noms avec DB
        const sqlData = [{ nom: body.nouveau_nom }, body.id ];
            
        const query = mySql.format(sqlQuery, sqlData);

        return conn.query( query )
    })
};

//supretion d une des contacts
exports.DeleteContact = (id) => {
    console.log(id);
    return DBConnection.then((conn) => {
        const sqlQuery = "DELETE FROM contact WHERE contact_ID= ? ";   //à verifier les noms avec DB
        const sqlData = id;
        return conn.query( sqlQuery, sqlData )
    })
};