import userController from './controllers/userController'
import express = require('express');

const apiRouter = express.Router()

apiRouter.use('/user', userController)
apiRouter.use('/chat', userController)

export default apiRouter
