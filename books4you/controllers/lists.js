const Mylist = require('../models/user')

async function index(req, res) {
  try {
    // let Mybooks = await Mylist.findById(req.user._id).populate('list')
    let Mybooks = await Mylist.find(lists)
    res.render('lists/index', { Mybooks, title: 'User Books List' })
    console.log(JSON.stringify(Mybooks))
  } catch (e) {
    console.error(e)
    res.redirect('lists/index')
  }
}

module.exports = {
  index
}
