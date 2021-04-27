import userController from './controllers/userController'
import express from 'express'

const apiRouter = express.Router()

apiRouter.use('/user', userController)

export default apiRouter
