// const Book = require("../models/book")
const Category = require('../models/category')

module.exports = {
  index
}

async function index(req, res) {
  const categories = await Category.find({})
  res.render('index', { title: '', categories, path: req.originalUrl })
}
