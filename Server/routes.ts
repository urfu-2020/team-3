import apiRouter from './apiRouter'
import express from 'express'
import { error404, baseRoute } from './controllers/testController'
const expressApp = express()

expressApp.use('/api', apiRouter)
expressApp.get('/', baseRoute)
expressApp.all('*', error404)

export default expressApp
