import userController from './controllers/userController'
import express = require('express');

const apiRouter = express.Router()

apiRouter.use('/user', userController)

export default apiRouter
