import {Sequelize, SequelizeOptions} from 'sequelize-typescript';
import app from "./routes";
import Chat from "./models/Chat"
import Message from "./models/Message";
import User from "./models/User";
import initDatabase from "./database/database"
import createDatabase from "./database/createDatabase"
const bodyParser = require("body-parser")

const port = process.env.PORT || 80

app.use(bodyParser.json())

async function main() {
    await initDatabase()
}

main()

app.listen(port)