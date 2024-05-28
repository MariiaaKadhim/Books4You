const express = require('express')
const router = express.Router()
const listsCtrl = require('../controllers/lists')
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.get('/index', ensureLoggedIn, listsCtrl.index)

router.get('/:id', ensureLoggedIn, listsCtrl.add)

module.exports = router
