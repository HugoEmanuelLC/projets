const DBConnection = require('./DBconfig');
const mySql = require('promise-mysql');

//afficher un des produits
exports.getOneProduit = (id) => {
    return DBConnection.then((conn) => {
        return conn.query("SELECT `Nom`, `Prix` FROM `produits`  WHERE `Prodt_ID` LIKE ?", id); //fait
    })
};

//creation d une nouvelle produit
exports.postInsertionNewProduit = (body) => {
    return DBConnection.then((conn) => {
        //requete prepare
        const sqlQuery = "INSERT INTO `produits` (`Nom`, `Prix`, `Catg_nom_id`) "
            +   "VALUES (?, ?, (SELECT `Nom_Catg_ID` FROM categorie WHERE `Nom_Catg_ID` LIKE ?) )";   //fait
        const sqlData = [ body.nouveau_nom, body.nouveau_prix, body.Categorie ];
        const query = mySql.format(sqlQuery, sqlData);

        return conn.query( query )
        .then(function(r) {
            return { insertId: r.insertId }
        }).catch(e => {
            return e
        });
    });
};

//modification d une des produits
exports.UpdateProduit = (body) => {
    console.log(body);
    return DBConnection.then((conn) => {
        //requete preparé
        const sqlQuery = "UPDATE `produits` SET ? WHERE Nom= ? ";   //fait
        const sqlData = [
            { 
                Nom: body.nouveau_nom, 
                Prix: body.nouveau_prix,
                Catg_nom_id: body.Categorie
            }, body.id ];
            
        const query = mySql.format(sqlQuery, sqlData);

        return conn.query( query )
        .then(function(r) {
            return { insertId: r.insertId }
        }).catch(e => {
            return e
        });
    })
};

//supretion d une des produits
exports.DeleteProduit = (id) => {
    console.log(id);
    return DBConnection.then((conn) => {
        const sqlQuery = "DELETE FROM produits WHERE `Nom`= ? ";   //fait
        const sqlData = id;
        return conn.query( sqlQuery, sqlData )
        .then(function(r) {
            return { insertId: r.insertId }
        }).catch(e => {
            return e
        });
    })
};