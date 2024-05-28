const Book = require('../models/book')

//This function will display all the books of a specific category to the user.
async function index(req, res) {
  try {
    let books = await Book.find({ userid: req.user._id })
    res.render('admins/index', {
      books,
      title: 'Admin Page',
      path: req.originalUrl
    })
  } catch (e) {
    console.error(err)
    res.redirect('admins/index')
  }
}

//This function will redirect to the form of creating a new book.
const newBook = (req, res) => {
  res.render('admins/new', { title: 'Add a New Book', path: req.originalUrl })
}

//This function  will create a new book .
async function create(req, res) {
  try {
    const book = new Book({ ...req.body, userid: req.user.id })
    await book.save()
    res.redirect('/admins')
  } catch (e) {
    console.error(e)
    res.redirect('/admins/new')
  }
}

// //This function will show a specific book by its id.
// async function show(req, res) {
//   const book = await Book.findById(req.params.id)
//   res.render('admins/show', { title: 'Book', book, path: req.originalUrl })
// }

//This function is responsible for delete a book.
async function deleteBook(req, res) {
  console.log(`Delete...`)
  await Book.findByIdAndDelete(req.params.id)
  res.redirect('/admins')
}

const editBook = async (req, res) => {
  const book = await Book.findById(req.params.id)
  res.render('admins/edit', { title: 'Edit Book', book, path: req.originalUrl })
}

async function update(req, res) {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    console.log('This the the book ID in the update function' + book._id)
    res.redirect(`/books/show/${book._id}`)
  } catch (e) {
    console.error(e)
    res.redirect(`/admins/${book._id}/edit`)
  }
}

module.exports = {
  index,
  new: newBook,
  create,
  delete: deleteBook,
  update,
  edit: editBook
}
