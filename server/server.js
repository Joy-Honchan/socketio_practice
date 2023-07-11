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
    origin: 'http://localhost:3005',
    methods: ['GET', 'POST']
  }
})

server.listen(8080, () => {
  console.log('listening on *:8080')
})

io.on('connection', (socket) => {
  console.log(`${socket.id} is connected`)

  socket.on('client_add_name', (name) => {
    console.log(`${name} just joined the chat`)
    io.emit('server_send_msg', {
      type: 0,
      message: `${name} just joined the chat`
    })
  })

  socket.on('client_send_msg', (msgData) => {
    socket.broadcast.emit('server_send_msg', {
      type: 1,
      userName: msgData.userName,
      time: msgData.time,
      message: msgData.message
    })
  })

  socket.on('disconnect', () => {
    console.log(`${socket.id} is disconnected`)
  })
})
