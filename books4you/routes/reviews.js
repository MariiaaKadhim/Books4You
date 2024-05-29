const express = require("express")
const router = express.Router()
const reviewsCtrl = require("../controllers/reviews")
const ensureLoggedIn = require("../config/ensureLoggedIn")

router.post("/books/:id/reviews", ensureLoggedIn, reviewsCtrl.create)

router.delete("/books/:id/reviews", ensureLoggedIn, reviewsCtrl.delete)

module.exports = router
