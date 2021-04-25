import app from './routes'
import initDatabase from './database/database'
// import createDatabase from './database/createDatabase'
import bodyParser from "body-parser";

const port = process.env.PORT || 80

app.use(bodyParser.json())

async function main () {
  await initDatabase()
}

main()

app.listen(port)
