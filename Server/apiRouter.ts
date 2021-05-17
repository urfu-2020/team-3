import userController from './controllers/userController'
import chatController from './controllers/chatController'
import messageController from './controllers/messageController'
import express = require('express');

const apiRouter = express.Router()

apiRouter.use('/user', userController)
apiRouter.use('/chat', chatController)
apiRouter.use('/message', messageController)

export default apiRouter
