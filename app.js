import express from 'express'
import { resolve } from 'path'
const app = express()

const hostname = '127.0.0.1',
  port = 4000,
  This = resolve('./index.html')

app.get('/', (req, res) => {
  res.sendFile(This, e => console.log(e))
})
app.get('/num', (req, res) => {
  res.send(gen.next().value + '')
})

app.listen(port, hostname, e => console.log(`http://${hostname}:${port}`))
