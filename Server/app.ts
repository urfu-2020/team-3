import routes from './routes'
import bodyParser from 'body-parser'
import express from 'express'
import User from './models/User'
import cookieParser from 'cookie-parser'
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
expressApp.use(bodyParser.json())
expressApp.use(expressSession({
  secret: process.env.SECRET_SESSION
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

routes(expressApp, passport)

export default expressApp
