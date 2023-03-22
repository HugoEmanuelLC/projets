const DBconnMySql = require('./DBmysqlConfig')
const mySql = require('promise-mysql')

//afficher toutes les Menuss
exports.getAllMenus = () => {
    return DBconnMySql.then((conn) => {
        return conn.query("SELECT * FROM `menus` ORDER BY `NAME` ASC")
    })
}

//afficher touts les produits d'une Menus
exports.getAllProduitsOfMenus = (params) => {
    return DBconnMySql.then((conn) => {
        return conn.query("SELECT * FROM `produits` P JOIN `menus` M ON P.menu_id = M.ID WHERE P.menu_id = ? GROUP BY `nom` ORDER BY `nom` ASC", params)
    })
}

