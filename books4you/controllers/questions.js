const ask = (req, res) => {
  res.render('forms/questions', { title: 'ask and you shall receive' })
}

module.exports = {
  ask
}
