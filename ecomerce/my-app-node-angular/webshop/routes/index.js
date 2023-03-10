const express = require('express')
const router = express.Router()

const selectControllers = require('../controllers/controller_select')

/* GET select */
router.get('/coll', selectControllers.getAllCollection)
router.get('/coll/:IdColl', selectControllers.getAllProduitsOfCollection)
router.get('/pro/:IdPro', selectControllers.getProduit)

module.exports = router