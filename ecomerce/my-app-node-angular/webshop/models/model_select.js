const DBconnMySql = require('./DBmysqlConfig')
const mySql = require('promise-mysql')

//afficher toutes les collections
exports.getAllCollection = () => {
    return DBconnMySql.then((conn) => {
        return conn.query("SELECT * FROM collection")
    })
}

//afficher touts les produits d'une collection
exports.getAllProduitsOfCollection = (params) => {
    return DBconnMySql.then((conn) => {
        return conn.query("SELECT * FROM `produit` WHERE `FK_Id_coll` = ?", params)
    })
}

//afficher le produit selectionne
exports.getProduit = (params) => {
    return DBconnMySql.then((conn) => {
        return conn.query("SELECT * FROM `produit` WHERE `Id_pro` = ?", params)
    })
}