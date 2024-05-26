require('dotenv').config()
require('./config/database')

const catagory = require('./models/book')

const categories = async () => {
  try {
    const doc = await catagory.create(
      {
        name: 'Comedy',
        id: '10'
      },
      {
        name: 'Horror-Crime-Mystery',
        id: '20'
      },
      {
        name: 'SCI-Fiction',
        id: '30'
      },
      {
        name: 'fantasy-fairy tale',
        id: '40'
      },
      {
        name: 'movie books',
        id: '50'
      },
      {
        name: 'drama-romance',
        id: '60'
      },
      {
        name: 'kids',
        id: '70'
      },
      {
        name: 'self learning',
        id: '80'
      },
      {
        name: 'novels',
        id: '90'
      }
    )
    console.log('Done creating category', doc)
  } catch (e) {
    console.error(e)
  }
}

categories()
