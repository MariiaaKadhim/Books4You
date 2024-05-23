// const Books = require('../models/Books')
// const Categories = require('../models/categories')

const index = (req, res) => {
  res.render('admins/index', {
    title: 'admin site'
  })
}

module.exports = {
  index
}
