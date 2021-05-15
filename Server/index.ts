import app from './app'
import initDatabase from './database/database'

const port = process.env.PORT || 80

async function main () {
  await initDatabase()
}

main()

app.listen(port)
