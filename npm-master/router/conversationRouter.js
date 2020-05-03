const express = require('express')
const router = express.Router()
const WebSocket = require('ws')
const utf8 = require('utf8')
const sshClient = require('ssh2').Client
const conversationModle = require('../db/modle/conversationModle')
const getTime = require('../src/getTime')

//查询数据
router.post('/list', (req, res) => {
    conversationModle.find({})
        .then((data) => {
            res.send({ err: 0, msg: 'ok', list: data })
        })
        .catch((err) => {
            res.send({ err: -1, msg: '失败' })
        })
})

router.post('/log', (req, res) => {
    let { username } = req.body
    name = username
    res.send({ err: 0 })

})

var name = ''


//创建websocket连接
const ws = new WebSocket.Server({ port: 8080 }, () => {
    console.log('websocket start')
})

ws.on('connection', (client) => {
    //    client.send('hello')
    createNewServer(client)
    client.on('close', (msg) => {
        console.log('前端主动断开连接')
    })
})


function createNewServer(client) {
    var ssh = new sshClient()
    ssh.on('ready', () => {
        ssh.shell((err, stream) => {
            if (err) {
                return client.send('\r\n*** SSH SHELL ERROR: ' + err.message + ' ***\r\n')
            }
            client.on('message', (msg) => {
                stream.write(msg + '\n')
                let con_time = getTime.getTime()
                let action = msg
                conversationModle.insertMany({ name, action, con_time })

                .catch((err) => {
                    console.log(err)
                })
            })
            stream.on('data', (data) => {
                client.send(utf8.decode(data.toString('binary')))
            }).on('close', () => {
                ssh.end()
            })

        })
    }).connect({
        host: '47.101.51.46',
        port: 22,
        username: 'root',
        password: 'Super2316173893'
    })
}

module.exports = router