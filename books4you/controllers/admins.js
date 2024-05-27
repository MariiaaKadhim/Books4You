const Book = require("../models/book")
// const Categories = require('../models/categories')

async function index(req, res) {
  try {
    let books = await Book.find({})
    res.render("admins/index", { books, title: "Admin Page" })
  } catch (e) {
    console.error(err)
    res.redirect("admins/index")
  }
}

const newBook = (req, res) => {
  res.render("admins/new", { title: "Add a New Book" })
}

async function create(req, res) {
  try {
    const book = new Book(req.body)
    await book.save()
    res.redirect("/admins")
  } catch (e) {
    console.error(e)
    res.redirect("/admins/new")
  }
}

async function show(req, res) {
  const book = await Book.findById(req.params.id)
  res.render("admins/show", { title: "Book", book })
}

async function deleteBook(req, res) {
  const book = Book.findById
  book.remove(req.params.id)
  await book.save()
  res.redirect("/admin")
}

module.exports = {
  index,
  new: newBook,
  create,
  show,
  delete: deleteBook,
}
