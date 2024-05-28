const express = require('express')
const router = express.Router()
const requestsCtrl = require('../controllers/requests.js')
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.get('/questions', ensureLoggedIn, requestsCtrl.questions)
router.post('/submit', ensureLoggedIn, requestsCtrl.submitRequest)
router.get('/success', ensureLoggedIn, requestsCtrl.success)
router.get('/adminReview', ensureLoggedIn, requestsCtrl.adminReview)
router.post('/accept', ensureLoggedIn, requestsCtrl.acceptRequest)
router.post('/refuse', ensureLoggedIn, requestsCtrl.refuseRequest)

module.exports = router
