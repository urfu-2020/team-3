import express = require("express");
import User from "../models/User";

const userController = express.Router()

userController.get('/:id', async (req, res) => {
    const user = await User.findOne({
        where: {
            userId: +req.params.id
        }
    })
    if (user === null) {
        res.sendStatus(404);
        return;
    }
    res.json(user)
})

userController.get('/', async (req, res) => {
    const users = await User.findAll()
    res.json(users)
})

userController.post('/', async (req, res) => {
    // для авторизации через github
    // для добавления в базу данных юзать уже готовую модель для юзеров User.create({...}) или User.findOrCreate({...})
})

export default userController