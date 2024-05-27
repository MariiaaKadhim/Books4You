
const Catagory = require("../models/book")

async function cata(req, res) {
  try {
    let categories = await Catagory.find({})
    res.render("users/index", { categories, title: "Users Page" })
  } catch (e) {
    console.error(e)
    res.redirect("users/index")
  }
}

module.exports = {
  cata,
}
