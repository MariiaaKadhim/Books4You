const Book = require('../models/book')
const Catagory = require('../models/book')

async function index(req, res) {
  try {
    const categories = await Catagory.find({})
    res.render('admins/index', { categories, title: 'Admin Page' })
  } catch (e) {
    console.error(err)
    res.redirect('admins/index')
  }
}

const newBook = (req, res) => {
  res.render('admins/new', { title: 'Add a New Book' })
}

async function create(req, res) {
  try {
    const book = new Book(req.body)
    await book.save()
    res.redirect('/admins')
  } catch (e) {
    console.error(e)
    res.redirect('/admins/new')
  }
}

async function show(req, res) {
  const book = await Book.findById(req.params.id)
  res.render('admins/show', { title: 'Book', book })
}

// async function show(req, res) {
//   const book = await Book.findById(req.params.id).populate('explorers')
//   const explorers = await Explorer.find({ _id: { $nin: planet.explorers } })
//   res.render('planets/show', { planet, explorers })
// }

module.exports = {
  index,
  new: newBook,
  create,
  show
}
/*
const editBook = (req, res) => {
  res.render('admins/update', { title: 'Edit Book' })
}
async function update(req, res) {
  const book = await Book.findByIdAndUpdate(req.params.id)

  await book.save()
} edit: editBook,
  update*/
