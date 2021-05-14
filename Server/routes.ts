import apiRouter from './apiRouter'
import express, { Request } from 'express'
import { error404, baseRoute } from './controllers/testController'
import User from './models/User'
import cookieParser from 'cookie-parser'
import connectEnsureLogin from 'connect-ensure-login'
import passport from 'passport'
import passportGithub from 'passport-github'
import expressSession from 'express-session'

const expressApp = express()
const strategy = new passportGithub.Strategy(
  {
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.GITHUB_CALLBACK_URL
  },
  async (accessToken, refreshToken, profile, done) => {
    const user = await User.findOrCreate({
      where: { userName: profile.username },
      defaults: {
        userName: profile.username,
        avatarUrl: profile._json.avatar_url
      }
    })
    done(null, user)
  }
)
passport.use(strategy)
expressApp.use(cookieParser())
expressApp.use(expressSession({
  secret: process.env.SECRET_SESSION,
  resave: false,
  saveUninitialized: false
}))
passport.serializeUser((profile, done) => {
  done(null, profile)
})
passport.deserializeUser(async (profile, done) => {
  const user = await User.findOne({
    where: {
      userId: profile[0].userId
    }
  })
  if (user === null) {
    return done(null, false)
  }
  return done(null, profile)
})
expressApp.use(passport.initialize())
expressApp.use(passport.session())
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
expressApp.get('/', connectEnsureLogin.ensureLoggedIn('/er'), baseRoute)
expressApp.get('/er', (req, res) => res.send('Выполните вход в систему через  <a href="login">GitHub</a>'))
expressApp.all('*', error404)

export default expressApp
