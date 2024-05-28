const express = require("express")
const router = express.Router()
const reviewsCtrl = require("../controllers/reviews")

// router.get("/:id", reviewsCtrl.create)

router.post("/admins/:id/reviews", reviewsCtrl.create)

module.exports = router
