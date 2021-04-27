import server from './routes'
import initDatabase from './database/database'
// import createDatabase from './database/createDatabase'
import bodyParser from 'body-parser'
import next from 'next'

const app = next({ dev: process.env.NODE_ENV !== 'production' })
const port = process.env.PORT || 80

server.use(bodyParser.json())

app.prepare().then(async () => {
  await initDatabase()

  server.listen(port, (err?: any) => {
    if (err) throw err
    console.log(`> Ready on localhost:${port} - env ${process.env.NODE_ENV}`)
  })
})
