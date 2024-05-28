const express = require('express')
const router = express.Router()
const reviewsCtrl = require('../controllers/reviews')

router.post('/:id', reviewsCtrl.create)

module.exports = router
