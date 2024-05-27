var express = require("express")
var router = express.Router()
// const ensureLoggedIn = require('../config/ensureLoggedIn')
const usersCtrl = require("../controllers/users")

router.get("/index", usersCtrl.index)

router.get("/:category", usersCtrl.index)

// router.get("/:id", usersCtrl.show)

module.exports = router
