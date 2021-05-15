import apiRouter from './apiRouter'
import { Request } from 'express'
import { error404, baseRoute } from './controllers/testController'
import connectEnsureLogin from 'connect-ensure-login'

const routes = (expressApp, passport) => {
  expressApp.get('/', baseRoute)
  expressApp.get('/login', passport.authenticate('github'))
  expressApp.get(
    '/login/return',
    passport.authenticate('github', { failureRedirect: '/login' }),
    (req, res) => res.redirect('/profile')
  )
  expressApp.use('/api', connectEnsureLogin.ensureLoggedIn('/er'), apiRouter)
  expressApp.get(
    '/profile',
    connectEnsureLogin.ensureLoggedIn('/er'),
    (req: Request, res) => res.send('Привет ' + req.user[0].userName)
  )
  expressApp.get(
    '/logout',
    (req, res) => {
      res.clearCookie('connect.sid')
      res.redirect('/')
    }
  )
  expressApp.get('/er', (req, res) => res.send('Выполните вход в систему через  <a href="login">GitHub</a>'))
  expressApp.all('*', error404)
}

export default routes
