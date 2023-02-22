const express = require('express');
const router = express.Router();

//User Auth
const Auth = require('../middleware/AuthConfig');
const Multer = require('../middleware/MulterConfig');

//categories
const categorieControllers = require('../controllers/categorie_controller');
router.get('/AllCategories', categorieControllers.getAllCategories);                    //fait
router.get('/OneCategorie/:menu', categorieControllers.getSingleCategorie);             //fait
router.get('/OneCategorieAndProd/:menu', categorieControllers.getOneCategorieAndProd);   //fait
router.get('/imgCategorie/:menu', categorieControllers.getImgCategorie);        //fait
router.post('/InsertionNewCategorie', categorieControllers.postInsertionNewCategorie);  //fait
router.put('/UpdateCategorie', categorieControllers.UpdateCategorie);                   //fait
router.delete('/DeleteCategorie/:id', categorieControllers.DeleteCategorie);            //fait

//Tva's
const tvaControllers = require('../controllers/tva_controllers');
router.get('/AllTva', tvaControllers.getSelectAllTva);                              //fait
router.get('/OneTvaAndCatg/:id', tvaControllers.getSelectOneTvaAndCatg);            //fait
router.post('/InsertionNewTva', tvaControllers.postInsertionNewTva);                //fait
router.put('/updateTva', tvaControllers.putUpdateTva);                              //fait

//produits
const produitsControllers = require('../controllers/produits_controllers');
router.get('/OneProduit/:id', produitsControllers.getOneProduit);                   //fait
router.post('/InsertionNewProduit', produitsControllers.postInsertionNewProduit);   //fait
router.put('/UpdateProduit',  produitsControllers.UpdateProduit);                    //fait
router.delete('/DeleteProduit/:id',  produitsControllers.DeleteProduit);             //fait

//contact
// const contactControllers = require('');
// router.get('/AllContacts', contactControllers.getAllContacts);
// router.get('/OneContact', contactControllers.getOneContact);
// router.post('/InsertionNewContact', contactControllers.postInsertionNewContact);
// router.put('/UpdateContact', contactControllers.UpdateContact);
// router.delete('/DeleteContact/:id', contactControllers.DeleteContact);

//galerie
// const galerieControllers = require('');
// router.get('/AllGaleries', galerieControllers.getAllGaleries);
// router.get('/OneGalerie', galerieControllers.getOneGalerie);
// router.post('/InsertionNewGalerie', galerieControllers.postInsertionNewGalerie);
// router.put('/UpdateGalerie', galerieControllers.UpdateGalerie);
// router.delete('/DeleteGalerie/:id', galerieControllers.DeleteGalerie);

//presentationTxt
// const presentationTxtControllers = require('');
// router.get('/AllPresentationTxts', presentationTxtControllers.getAllPresentationTxts);
// router.get('/OnePresentationTxt', presentationTxtControllers.getOnePresentationTxt);
// router.post('/InsertionNewPresentationTxt', presentationTxtControllers.postInsertionNewPresentationTxt);
// router.put('/UpdatePresentationTxt', presentationTxtControllers.UpdatePresentationTxt);
// router.delete('/DeletePresentationTxt/:id', presentationTxtControllers.DeletePresentationTxt);


module.exports = router;