const User = require('../models/user')
const Book = require('../models/book')

//This function will show all the books in the books list of the user.
async function index(req, res) {
  try {
    // console.log('These are the user id ' + req.user._id)
    const user = await User.findById(req.user._id)

    // console.log('These are the user infromations' + user.list)
    const Mybooks = await Book.find({
      _id: { $in: user.list }
    })

    let books = Mybooks.map((book) => ({
      poster: book.poster,
      name: book.name
    }))
    res.render('lists/index', {
      books,
      title: 'User Books List',
      path: req.originalUrl
    })
    // console.log(JSON.stringify(Mybooks))
  } catch (e) {
    console.error(e)
    res.redirect('/lists/index')
  }
}

//This function will add a book to the books list.
async function add(req, res) {
  try {
    // console.log(req.params.id) //book id
    // console.log(req.user.id) //user id
    const book = await User.findById(req.user.id)
    book.list.push(req.params.id)
    await book.save()
    res.redirect('/lists/index')
  } catch (e) {
    console.error(e)
    // res.redirect('lists/index')
  }
}

module.exports = {
  index,
  add
}
