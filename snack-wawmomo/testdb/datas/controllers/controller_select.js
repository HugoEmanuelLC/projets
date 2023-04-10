const modelSelect = require('../models/model_select')

//afficher toutes les collections
exports.getAllMenus = (req, res, next) => {
    modelSelect.getAllMenus()
    .then((datas) => {
        res.json(datas)
        console.log(datas)
    })
}

//afficher touts les produits d'une collection
exports.getAllProduitsOfMenus = (req, res, next) => {
    modelSelect.getAllProduitsOfMenus(req.params.id)
    .then((datas) => {
        res.json(datas)
        console.log(datas)
        console.log(req.params.id)
    })
}

