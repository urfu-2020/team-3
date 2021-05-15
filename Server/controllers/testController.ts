export const error404 = (req, res) => {
  res.sendStatus(404)
}

export const baseRoute = (req, res) => {
  res.send('<b><i>Test</i></b> route<br>Hi Heroku<br>Выполните вход в систему через  <a href="login">GitHub</a>')
}
