const express = require("express")
const router = express.Router()
const categoriesCtrl = require("../controllers/categories")

router.get("/", categoriesCtrl.index)

module.exports = router
