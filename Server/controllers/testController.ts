exports.error404 = (req, res) => {
  res.sendStatus(404)
}

exports.baseRoute = (req, res) => {
  res.send('<b><i>Test</i></b> route<br>Hi Heroku')
}