var express = require('express')
var router = express.Router()
// const ensureLoggedIn = require('../config/ensureLoggedIn')
const usersCtrl = require('../controllers/users')

router.get('/', usersCtrl.index)

// // router.get("/:id", usersCtrl.show)

// // router.post("/", usersCtrl.create)

module.exports = router
