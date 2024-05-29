require('dotenv').config()
require('./config/database')

const catagory = require('./models/category')

const categories = async () => {
  try {
    const doc = await catagory.create(
      {
        category: 'Comedy',
        catImg:
          'https://images-platform.99static.com//9Jg1TuTAqRafvpK50DkROuuUTs4=/542x312:1042x812/fit-in/500x500/99designs-contests-attachments/94/94208/attachment_94208763'
      },
      {
        category: 'Horror-Crime-Mystery',
        catImg:
          'https://www.shutterstock.com/image-vector/fedora-hat-magnifying-glass-notepad-600nw-1955570302.jpg'
      },
      {
        category: 'SCI-Fiction',
        catImg:
          'https://ih1.redbubble.net/image.3721336726.9982/fposter,small,wall_texture,product,750x1000.jpg'
      },
      {
        category: 'fantasy-fairy tale',
        catImg:
          'https://img.freepik.com/premium-photo/there-is-book-with-tree-inside-it-generative-ai_958124-765.jpg'
      },
      {
        category: 'movie books',
        catImg:
          'https://img.freepik.com/premium-vector/film-movie-book-logo-cinema-symbol-stock_139372-124.jpg'
      },
      {
        category: 'drama-romance',
        catImg:
          'https://img.freepik.com/premium-vector/drama-literary-genre-book-icon-flat-illustration-drama-literary-genre-book-vector-icon-isolated-white-background_98396-49471.jpg?w=360'
      },
      {
        category: 'kids',
        catImg:
          'https://images-platform.99static.com//PyJvKPgNqtKHcy_djVipKrCdyn8=/155x63:832x740/fit-in/500x500/99designs-contests-attachments/113/113807/attachment_113807449'
      },
      {
        category: 'self learning',
        catImg:
          'https://www.shutterstock.com/image-vector/self-educated-icon-monochrome-simple-260nw-2360918001.jpg'
      },
      {
        category: 'novels',
        catImg:
          'https://images-platform.99static.com//L_-U7wxnB_H71QsF5worp77obu8=/265x256:934x925/fit-in/500x500/99designs-contests-attachments/107/107137/attachment_107137321'
      }
    )
    console.log('Done creating category', doc)
  } catch (e) {
    console.error(e)
  }
}

categories()
