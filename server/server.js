// const WebSocket = require('ws')
// const server = new WebSocket.Server({ port: 8080 })
// server.on('connection', (ws) => {
//   console.log('connection')
//   ws.on('close', () => {
//     console.log('connection closed')
//   })
// })

const express = require('express')
const app = express()
const http = require('http')
const cors = require('cors')

const { Server } = require('socket.io')

app.use(cors())
const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3005/',
    methods: ['GET', 'POST']
  }
})

server.listen(8080, () => {
  console.log('listening on *:8080')
})

io.on('connection', (socket) => {
  console.log(`${socket.id} is connected`)

  socket.on('disconnect', (socket) => {
    console.log(`${socket.id} is disconnected`)
  })
})
