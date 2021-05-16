import User from '../models/User'
import Chat from '../models/Chat'
import Message from '../models/Message'
import ChatUser from '../models/ChatUser'
import Session from "../models/Session";
import express = require('express');

const mesController = express.Router()

// все сообщения чата по id чата
mesController.get('/:id', async (req, res) => {
  const message = await Message.findAll({
    where: {
        chatId: +req.params.id
    }
  })
  res.json(message)
})

// создаём сообщениу по id чата
mesController.post('/:id', async (req, res) => {
  const chat = await Chat.findOne({
    where: {
      chatId: +req.params.id
    }
  })
  if (chat){
    const message = await Message.create({
      chatId: +req.params.id,
      chat: chat,
      senderId: +req["user"][0]["userId"],
      user: req["user"][0],
      messageText!: req.body.text
    })
    res.json(message)
  }
  res.json(null)
})

export default mesController
