const express = require('express')
const router = express.Router()

const selectControllers = require('../controllers/controller_select')

/* GET select */
router.get("/", selectControllers.getAllMenus)
router.get("/menu/:id", selectControllers.getAllProduitsOfMenus)

module.exports = router