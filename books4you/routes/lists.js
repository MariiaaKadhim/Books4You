const express = require('express')
const router = express.Router()
const listsCtrl = require('../controllers/lists')
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.get('/index', ensureLoggedIn, listsCtrl.index) //The index page of the books list of the user

router.get('/:id', ensureLoggedIn, listsCtrl.add) // To add a book to the user books list

module.exports = router
