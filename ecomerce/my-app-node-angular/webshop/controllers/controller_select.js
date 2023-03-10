const modelSelect = require('../models/model_select')

//afficher toutes les collections
exports.getAllCollection = (req, res, next) => {
    modelSelect.getAllCollection()
    .then((datas) => {
        res.json(datas)
        console.log(datas)
    })
}

//afficher touts les produits d'une collection
exports.getAllProduitsOfCollection = (req, res, next) => {
    modelSelect.getAllProduitsOfCollection(req.params.IdColl)
    .then((datas) => {
        res.json(datas)
        console.log(datas)
    })
}

//afficher le produit selectionne
exports.getProduit = (req, res, next) => {
    modelSelect.getProduit(req.params.IdPro)
    .then((datas) => {
        res.json(datas)
        console.log(datas)
    })
}