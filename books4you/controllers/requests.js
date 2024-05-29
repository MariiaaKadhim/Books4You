const Request = require('../models/request')
const User = require('../models/user')

const questions = (req, res) => {
  res.render('forms/questions', { title: 'Questions', path: req.originalUrl })
}

const submitRequest = async (req, res) => {
  try {
    const newRequest = new Request({
      name: req.body.name,
      email: req.body.email,
      reason: req.body.reason,
      user_email: req.user.email
    })

    await newRequest.save()
    res.redirect('../')
  } catch (err) {
    res.status(400).send('Error saving data: ' + err)
  }
}

const success = (req, res) => {
  res.render('forms/success', {
    title: 'Form Submitted Successfully',
    path: req.originalUrl
  })
}

const acceptRequest = async (req, res) => {
  try {
    const requestId = req.body.requestId
    const request = await Request.findById(requestId)
    if (request) {
      await User.findOneAndUpdate({ email: request.user_email }, { type: true })
      await Request.findByIdAndDelete(requestId)
      res.redirect('/requests/adminReview')
    } else {
      res.status(404).send('Request not found.')
    }
  } catch (error) {
    console.error('Error accepting request:', error)
    res.status(500).send('An error occurred while accepting request.')
  }
}

const adminReview = async (req, res) => {
  try {
    const data = await Request.find({})
    res.render('forms/adminReview', {
      data: data,
      title: 'Requests Review',
      path: req.originalUrl
    })
  } catch (error) {
    console.error('Error fetching data:', error)
    res.status(500).send('An error occurred while fetching data.')
  }
}

const refuseRequest = async (req, res) => {
  try {
    const requestId = req.body.requestId
    await Request.findByIdAndDelete(requestId)
    res.redirect('/requests/adminReview')
  } catch (error) {
    console.error('Error refusing request:', error)
    res.status(500).send('An error occurred while refusing request.')
  }
}

module.exports = {
  submitRequest,
  adminReview,
  acceptRequest,
  refuseRequest,
  questions,
  success
}
