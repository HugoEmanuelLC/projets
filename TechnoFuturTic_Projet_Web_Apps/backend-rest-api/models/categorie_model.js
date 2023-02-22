const DBConnection = require('./DBconfig');
const mySql = require('promise-mysql');

//afficher toutes les categories
exports.getAllCategories = () => {
    return DBConnection.then((conn) => {
        return conn.query("SELECT `Nom_Catg_ID` as menu FROM `categorie`");   //OK
    })
};

exports.getSingleCategorie = (menu) => {
    return DBConnection.then((conn) => {
        return conn.query("SELECT `Nom_Catg_ID` as menu, `Url_img` as imgDB FROM `categorie` WHERE `Nom_Catg_ID`= ?", menu);   //OK
    })
}

//afficher les produits d'une categorie
exports.getOneCategorieAndProd = (menu) => {
    return DBConnection.then((conn) => {
        return conn.query("SELECT `Nom`, `Prix`, `Catg_nom_id` FROM produits, categorie WHERE `Catg_nom_id`= ? GROUP BY `Nom`", menu);   //OK
    })
};



//afficher l'image categorie
exports.getImgCategorie = (menu) => {
    return DBConnection.then((conn) => {
        return conn.query("SELECT `Url_img` as imgDB FROM categorie WHERE `Nom_Catg_ID`= ?", menu);   //OK
    })
};


//creation d une nouvelle categorie
exports.postInsertionNewCategorie = (body) => {
    return DBConnection.then((conn) => {
        //requete prepare
        const sqlQuery = "INSERT INTO `categorie`(`Nom_Catg_ID`, `Tva_id`) "
            +   "VALUES (?, (SELECT `Tva` FROM `type-tva` WHERE `tva` LIKE ?) )";   //OK
        const sqlData = [body.nomM , body.nrTva];
        const query = mySql.format(sqlQuery, sqlData);

        return conn.query( query )
        .then(function(r) {
            return { insertId: r.insertId }
        }).catch(e => {
            return e
        });
    });
};

//modification d une des categories
exports.UpdateCategorie = (body) => {
    console.log(body);
    return DBConnection.then((conn) => {
        //requete preparé
        const sqlQuery = "UPDATE `categorie` SET ? WHERE `Nom_Catg_ID`= ? ";   //OK
        const sqlData = [{ Nom_Catg_ID: body.newName }, body.oldName ];
            
        const query = mySql.format(sqlQuery, sqlData);

        return conn.query( query )
    })
};

//supretion d une des categories
exports.DeleteCategorie = (id) => {
    console.log(id);
    return DBConnection.then((conn) => {
        const sqlQuery = "DELETE FROM categorie WHERE Nom_Catg_ID= ? ";   //OK
        const sqlData = id;
        return conn.query( sqlQuery, sqlData )
    })
};