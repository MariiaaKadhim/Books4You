const User = require("../models/user")
const Book = require("../models/book")

//This function will show all the books in the books list of the user.
async function index(req, res) {
  try {
    const user = await User.findById(req.user._id)
    const Mybooks = await Book.find({
      _id: { $in: user.list },
    })

    let books = Mybooks.map((book) => ({
      poster: book.poster,
      name: book.name,
      _id: book._id,
    }))
    res.render("lists/index", {
      books,
      title: "User Books List",
      path: req.originalUrl,
    })
  } catch (e) {
    console.error(e)
    res.redirect("/lists/index")
  }
}

//This function will add a book to the books list.
async function add(req, res) {
  try {
    const book = await User.findById(req.user.id)
    book.list.push(req.params.id)
    await book.save()
    res.redirect("/lists/index")
  } catch (e) {
    console.error(e)
    res.redirect("/lists/index")
  }
}

module.exports = {
  index,
  add,
}
