var express = require('express')
var router = express.Router()
const adminCtrl = require('../controllers/admins')
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.get('/', ensureLoggedIn, adminCtrl.index) //To display all the books that the admin added.

router.get('/new', ensureLoggedIn, adminCtrl.new) //To creat a new book.

router.post('/', ensureLoggedIn, adminCtrl.create) //Save the new book in the database.

router.get('/:id/edit', ensureLoggedIn, adminCtrl.edit) //To edit a book informations.

router.put('/:id', ensureLoggedIn, adminCtrl.update) //To update a book informations.

router.delete('/:id', ensureLoggedIn, adminCtrl.delete) //To delete a book.

module.exports = router
