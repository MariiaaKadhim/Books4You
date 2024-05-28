var express = require('express')
var router = express.Router()
const ensureLoggedIn = require('../config/ensureLoggedIn')

const booksCtrl = require('../controllers/books')

router.get('/show/:id', booksCtrl.show) //To display a specific book.
router.get('/:category', booksCtrl.index) // To display all the books of a certain category.

// router.get('/:id/edit', ensureLoggedIn, booksCtrl.edit)

module.exports = router
