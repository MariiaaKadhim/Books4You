const Form = require('../models/form')
const Questions = require('../models/form')

const ask = (req, res) => {
  res.render('forms/questions', { title: 'ask and you shall receive' })
}
const submitForm = async (req, res) => {
  try {
    const newForm = new Questions({
      name: req.body.name,
      email: req.body.email,
      reason: req.body.reason,
      user_email: req.user.email
    })

    await newForm.save()
    res.redirect('/forms/success')
  } catch (err) {
    res.status(400).send('Error saving data: ' + err)
  }
}
const success = (req, res) => {
  res.render('forms/success', { title: 'Form Submitted Successfully' })
}
const adminReq = async (req, res) => {
  try {
    const data = await Form.find({})
    res.render(
      'forms/adminRev',
      { data: data },
      { title: 'ask and you shall receive' }
    )
  } catch (error) {
    // Handle errors
    console.error('Error fetching data:', error)
    res.status(500).send('An error occurred while fetching data.')
  }
}

const removeReq = async (req, res) => {
  try {
    const requestExists = await Request.exists({ _id: req.body.request })

    if (requestExists) {
      res.redirect('/questions')
    } else {
      res
        .status(403)
        .send(
          'The request does not exist or you are not authorized to remove it.'
        )
    }
  } catch (error) {
    console.error('Error removing data:', error)
    res.status(500).send('An error occurred while removing data.')
  }
}
const makeAdmin = async (req, res) => {
  try {
    const requestExists = await Request.exists({ user_email: req.user.email })

    if (requestExists) {
      await User.findOneAndUpdate({ _id: req.user._id }, { type: true })
      res.redirect('/questions')
    } else {
      res.status(403).send('You are not authorized to perform this action.')
    }
  } catch (error) {
    console.error('Error making user admin:', error)
    res.status(500).send('An error occurred while making user admin.')
  }
}

module.exports = {
  ask,
  submitForm,
  success,
  req: adminReq,
  refuse: removeReq,
  makeAdmin
}
