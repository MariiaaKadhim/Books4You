const express = require('express')
const router = express.Router()
const requestsCtrl = require('../controllers/requests.js')

// const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/questions', requestsCtrl.questions)
router.post('/submit', requestsCtrl.submitRequest)
router.get('/success', requestsCtrl.success)
router.get('/adminReview', requestsCtrl.adminReview)
router.post('/accept', requestsCtrl.acceptRequest)
router.post('/refuse', requestsCtrl.refuseRequest)

module.exports = router
