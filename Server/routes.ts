import apiRouter from './apiRouter'
const { error404, baseRoute } = require('./controllers/testController')
import express from 'express'
const expressApp = express()

expressApp.use('/api', apiRouter)
expressApp.get('/', baseRoute)
expressApp.all('*', error404)

export default expressApp
