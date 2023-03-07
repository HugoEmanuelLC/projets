const express = require('express');
const router = express.Router();

//User Auth
//const Auth = require('../middleware/AuthConfig');
//const Multer = require('../middleware/MulterConfig');

//categories
const controllersCollection = require('../controllers/collection_controllers');
router.get('/col', controllersCollection.getAllCollections); 

//produits
//const produitsControllers = require('../controllers/produits_controllers'); 


module.exports = router;