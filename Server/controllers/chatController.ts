import User from '../models/User'
import Chat from '../models/Chat'
import Message from '../models/Message'
import ChatUser from '../models/ChatUser'
import Session from "../models/Session";
import express = require('express');

const chatController = express.Router()

// сам чат, его id и пользыватели чата
chatController.get('/:id', async (req, res) => {
  const chat = await Chat.findOne({
    where: {
        chatId: +req.params.id
    }
  })
  if (chat){
    res.json(chat)
  }
  res.json(null)
})

// id всех чатов пользывателя
chatController.get('/', async (req, res) => {
  const chats = await ChatUser.findAll({
    where: {
      userIdInChat: +req["user"][0]["userId"]
    }
  })
  if (chats){
    let ressult = []
    for (const chat in chats){
      ressult.push(chat["chatId"])
    }
    res.json(ressult)
  }
  res.json(null)
})

// создаём чат
chatController.post('/', async (req, res) => {
  if (req.body.users){
    const chat = await Chat.create({
      isPersonalChat: req.body.users.length===2,
      usersInChat: req.body.users
    })
    res.json(chat)
  }
  res.json(null)
})

export default chatController
