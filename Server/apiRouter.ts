import express = require("express");
import userController from "./controllers/userController";

const apiRouter = express.Router()

apiRouter.use('/user', userController)

export default apiRouter