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
    res.send('Data saved successfully!')
  } catch (err) {
    res.status(400).send('Error saving data: ' + err)
  }
}
const success = (req, res) => {
  res.render('forms/success', { title: 'Form Submitted Successfully' })
}

module.exports = {
  ask,
  submitForm,
  success
}
