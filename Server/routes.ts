/* eslint-disable no-unused-vars */
import apiRouter from './apiRouter'
import express, { query } from 'express'
// import { error404, baseRoute } from './controllers/testController'
import next from 'next'

export const nextApp = next({ dev: process.env.NODE_ENV !== 'production' })
export const expressApp = express()
const handle = nextApp.getRequestHandler()

expressApp.use('/api', apiRouter)
expressApp.get('/', (req, res) => nextApp.render(req, res, '/'))
expressApp.all('*', (req, res) => handle(req, res))

export default { expressApp, nextApp }
