require("dotenv").config()
require("./config/database")

const catagory = require("./models/category")

const categories = async () => {
  try {
    const doc = await catagory.create(
      {
        category: "Comedy",
      },
      {
        category: "Horror-Crime-Mystery",
      },
      {
        category: "SCI-Fiction",
      },
      {
        category: "fantasy-fairy tale",
      },
      {
        category: "movie books",
      },
      {
        category: "drama-romance",
      },
      {
        category: "kids",
      },
      {
        category: "self learning",
      },
      {
        category: "novels",
      }
    )
    console.log("Done creating category", doc)
  } catch (e) {
    console.error(e)
  }
}

categories()
