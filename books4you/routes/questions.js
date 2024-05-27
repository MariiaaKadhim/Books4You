const express = require('express')
const router = express.Router()
const questionsCtrl = require('../controllers/questions.js')

// const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/questions', questionsCtrl.ask)
router.post('/submit', questionsCtrl.submitForm)
router.get('/success', questionsCtrl.success)
router.get('/adminRev', questionsCtrl.req)
router.post('/adminRev', questionsCtrl.makeAdmin)
router.post('/adminRev', questionsCtrl.refuse)

module.exports = router
