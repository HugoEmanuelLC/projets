const Tva_models = require('../models/tva_models');

//afficher toutes les tva's
exports.getSelectAllTva = (req, res, next) => {
    Tva_models.getSelectAllTva()
    .then((datas) => {
        res.json(datas)
    })
}

//afficher les categorie de chaque tva
exports.getSelectOneTvaAndCatg = (req, res, next) =>{
    Tva_models.getSelectOneTvaAndCatg(req.params.id)
    .then((datas) => {
        res.json(datas)
    })
}

//creation d une nouvelle tva
exports.postInsertionNewTva = (req, res, next) => {
    Tva_models.postInsertiontTva(req.body)
    .then((datas) => {
        res.json(datas)
    })
};

//modification d une des tva
exports.putUpdateTva = (req, res, next) => {
    Tva_models.putUpdateTva(req.body)
    .then((datas) => {
        res.json(datas)
        console.log(datas);
    })
}