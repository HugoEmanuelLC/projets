const DBConnection = require('./DBconfig');
const mySql = require('promise-mysql');

//afficher toutes les tva's
exports.getSelectAllTva = () => {
    return DBConnection.then((conn) => {
        return conn.query( "SELECT * FROM `type-tva`" )   //fait
    })
}

//afficher les categorie de chaque tva
exports.getSelectOneTvaAndCatg = (id) => {
    return DBConnection.then((conn) => {
        return conn.query( "SELECT Tva, `Nom_Catg_ID` FROM `type-tva`, categorie WHERE `Tva` = ? GROUP BY `Nom_Catg_ID`", id )  //fait
    })
}

//creation d une nouvelle tva
exports.postInsertiontTva = (body) => {
    console.log(body);
    return DBConnection.then((conn) => {
        //requete prepare
        const sqlQuery = "INSERT INTO `type-tva` (`Tva`) VALUES (?) ";   //fait
        const sqlData = body.tva;
        const query = mySql.format(sqlQuery, sqlData);

        return conn.query( query )
        .then(function(r) {
            return { insertId: r.insertId }
        }).catch(e => {
            return e
        });
    });
};

//modification d une des tva
exports.putUpdateTva = (body) => {
    console.log(body);
    return DBConnection.then((conn) => {
        //requete preparé
        const sqlQuery = "UPDATE `type-tva` SET ? WHERE Tva= ? ";   //à verifier les noms avec DB
        const sqlData = [ { Tva:body.nouvelle_tva }, body.tva ];
            
        const query = mySql.format(sqlQuery, sqlData);

        return conn.query( query )
        .then(function(r) {
            return { insertId: r.insertId }
        }).catch(e => {
            return e
        });
    })
};