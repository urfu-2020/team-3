import Chat from '../models/Chat'
import ChatUser from '../models/ChatUser'
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
  if (req.body.users.length >= 2){
    if (req.body.users.length===2){
      let intersection = await Promise.all([ChatUser.findAll({
        where: {
          userIdInChat: req.body.users[0]["userId"] }
      }), ChatUser.findAll({
        where: {
          userIdInChat: req.body.users[1]["userId"] }
      })]).then(chats => chats.map(chat => chat.map(c => c["chatId"])))
      .then(chats => chats[0].filter(id => chats[1].includes(id)))
      for (let i=0; i<intersection.length; i++){
        const chat = await Chat.findOne({
          where: {
            chatId: intersection[i] }
        })
        if (chat["isPersonalChat"] === true){
          res.json(null)
          return
        }
      }
    }
    const chat = await Chat.create({
      isPersonalChat: req.body.users.length===2,
      usersInChat: req.body.users
    })
    if (chat){
      for (const user in req.body.users){
        await ChatUser.findOrCreate({
          where: {
            chatId: chat["chatId"],
            userIdInChat: req.body.users[user]["userId"] },
          defaults: {
            chatId: chat["chatId"],
            userIdInChat: req.body.users[user]["userId"]
          }
        })
      }
    }
    res.json(chat)
  }
  res.json(null)
})

export default chatController
