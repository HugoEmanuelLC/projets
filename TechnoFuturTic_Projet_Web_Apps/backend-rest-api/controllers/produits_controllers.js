const produits_model = require('../models/produits_models');

//afficher toutes les produits
// exports.getAllProduits = (req, res, next) => {
//     produits_model.getAllProduits()
//     .then((datas) => {
//         res.json(datas)
//         console.log(datas);
//     })
// };

//afficher un des produits
exports.getOneProduit = (req, res, next) => {
    produits_model.getOneProduit(req.params.id)
    .then((datas) => {
        res.json(datas)
        console.log(datas);
    })
};

//creation d une nouvelle produit
exports.postInsertionNewProduit = (req, res, next) => {
    produits_model.postInsertionNewProduit(req.body)
    .then((datas) => {
        res.json(datas)
        console.log(datas);
    })
};

//modification d un des produits
exports.UpdateProduit = (req, res, next) => {
    produits_model.UpdateProduit(req.body)
    .then((datas) => {
        res.json(datas)
        console.log(datas);
    })
}

//supretion d un des produits
exports.DeleteProduit = (req, res, next) => {
    produits_model.DeleteProduit(req.params.id)
    .then((datas) => {
        res.json(datas)
    })
}