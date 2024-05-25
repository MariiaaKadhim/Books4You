var express = require('express')
var router = express.Router()
const adminCtrl = require('../controllers/admins')
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.get('/index', adminCtrl.index)

router.get('/new', ensureLoggedIn, adminCtrl.new)

// router.get('/:id', adminCtrl.show)

router.post('/', ensureLoggedIn, adminCtrl.create)

// router.get('/index', adminCtrl.index)
// router.get('/new', adminCtrl.new)
module.exports = router
