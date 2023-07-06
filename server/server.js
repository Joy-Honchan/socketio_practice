const WebSocket = require('ws')
const server = new WebSocket.Server({ port: 8080 })
server.on('connection', (ws) => {
  console.log('connection')
  ws.on('close', () => {
    console.log('connection closed')
  })
})
