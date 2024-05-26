var express = require("express")
var router = express.Router()
const adminCtrl = require("../controllers/admins")

router.get("/", adminCtrl.index)

router.get("/new", adminCtrl.new)

router.post("/", adminCtrl.create)

module.exports = router
