import { Sequelize, SequelizeOptions } from 'sequelize-typescript'
import Chat from '../models/Chat'
import Message from '../models/Message'
import User from '../models/User'
import ChatUser from '../models/ChatUser'
import Session from "../models/Session";

function initDatabase () {
  const sequelizeOptions: SequelizeOptions = {
    // connection
    host: process.env.databaseHost,
    port: +process.env.databasePort,
    username: process.env.databaseUsername,
    password: process.env.databasePassword,
    database: process.env.databaseUsername,

    // db options
    dialect: 'postgres'
  }
  const sequelize = new Sequelize(sequelizeOptions)
  sequelize.addModels([Chat, Message, User, ChatUser, Session])
}

export default initDatabase
