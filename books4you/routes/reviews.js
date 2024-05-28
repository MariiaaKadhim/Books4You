const express = require("express")
const router = express.Router()
const reviewsCtrl = require("../controllers/reviews")
const ensureLoggedIn = require("../config/ensureLoggedIn")

// POST /movies/:id/reviews (create review for a movie)
router.post("/books/:id/reviews", ensureLoggedIn, reviewsCtrl.create)

module.exports = router
