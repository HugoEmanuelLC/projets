const categorie_model = require('../models/categorie_model');

//afficher toutes les categories
exports.getAllCategories = (req, res, next) => {
    categorie_model.getAllCategories()
    .then((datas) => {
        res.json(datas)
        console.log(datas);
    })
};

exports.getSingleCategorie = (req, res, next) => {
    categorie_model.getSingleCategorie(req.params.menu)
    .then((datas) => {
        res.json(datas)
        console.log(datas);
    })
};

//afficher les produits de chaque categorie
exports.getOneCategorieAndProd = (req, res, next) => {
    categorie_model.getOneCategorieAndProd(req.params.menu)
    .then((datas) => {
        res.json(datas)
        console.log(datas);
    })
};


exports.getImgCategorie = (req, res, next) => {
    categorie_model.getImgCategorie(req.params.menu)
    .then((datas) => {
        res.json(datas)
        console.log(datas);
    })
};


//creation d une nouvelle categorie
exports.postInsertionNewCategorie = (req, res, next) => {
    categorie_model.postInsertionNewCategorie(req.body)
    .then((datas) => {
        res.json(datas)
        console.log(datas);
    })
};

//modification d une des categories
exports.UpdateCategorie = (req, res, next) => {
    categorie_model.UpdateCategorie(req.body)
    .then((datas) => {
        res.json(datas)
        console.log(datas);
    })
}

//supretion d une des categories
exports.DeleteCategorie = (req, res, next) => {
    categorie_model.DeleteCategorie(req.params.id)
    .then((datas) => {
        res.json(datas)
    })
}