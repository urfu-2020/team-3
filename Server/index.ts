import { expressApp, nextApp } from './routes'
import initDatabase from './database/database'
// import createDatabase from './database/createDatabase'
import bodyParser from 'body-parser'

const port = process.env.PORT || 80

expressApp.use(bodyParser.json())

nextApp.prepare().then(async () => {
  await initDatabase()

  expressApp.listen(port, (err?: any) => {
    if (err) throw err
    console.log(`> Ready on localhost:${port} - env ${process.env.NODE_ENV}`)
  })
})
