const WebSocket = require('ws')
const ws = new WebSocket.Server({ port: 8080 }, () => {
    console.log('socket start')
})

ws.on('connection', (client) => {
    client.send('hello')
    client.on('message', (msg) => {
        console.log('来自前端数据：' + msg)
    })
    client.on('close', (msg) => {
        console.log('前端主动断开连接')
    })
})