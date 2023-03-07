const collection_models = require('../models/collection_model');

//afficher toutes les collections
exports.getAllCollections = (req, res, next) => {
    collection_models.getAllCollections()
    .then((datas) => {
        res.json(datas);
        console.log(datas);
    })
} 