var express = require("express")
var router = express.Router()

const booksCtrl = require("../controllers/books")
const reviewsCtrl = require("../controllers/reviews")

router.get("/show/:id", booksCtrl.show) //To display a specific book.

router.get("/:category", booksCtrl.index) // To display all the books of a certain category.

router.post("/:id/reviews", reviewsCtrl.create) //To create a book review

router.delete("/show/:id/reviews", reviewsCtrl.delete)

module.exports = router
