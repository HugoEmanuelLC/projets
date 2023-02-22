const contacts_model = require('../models/contact_models');

//afficher toutes les contacts
exports.getAllContacts = (req, res, next) => {
    contacts_model.getAllContacts()
    .then((datas) => {
        res.json(datas)
        console.log(datas);
    })
};

//afficher un des contacts
exports.getOneContact = (req, res, next) => {
    contacts_model.getOneContact()
    .then((datas) => {
        res.json(datas)
        console.log(datas);
    })
};

//creation d une nouvelle contact
exports.postInsertionNewContact = (req, res, next) => {
    contacts_model.postInsertionNewContact(req.body)
    .then((datas) => {
        res.json(datas)
        console.log(datas);
    })
};

//modification d un des contacts
exports.UpdateContact = (req, res, next) => {
    contacts_model.UpdateContact(req.body)
    .then((datas) => {
        res.json(datas)
        console.log(datas);
    })
}

//supretion d un des contacts
exports.DeleteContact = (req, res, next) => {
    contacts_model.DeleteContact(req.params.id)
    .then((datas) => {
        res.json(datas)
    })
}