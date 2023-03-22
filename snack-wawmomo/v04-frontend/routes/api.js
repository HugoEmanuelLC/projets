const express = require('express')
const router = express.Router()

const selectControllers = require('../controllers/controller_select')

/* GET select */
router.get('/0', selectControllers.getAllMenus)
router.get('/0/:i', selectControllers.getAllProduitsOfMenus)

module.exports = router