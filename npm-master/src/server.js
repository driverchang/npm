const express = require('express')
const db = require('../db/connect')
const app = express()

//对url进行解析

const bodyparser = require('body-parser')

app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())


//路由
const userRouter = require('../router/userRouter')
const assetRouter = require('../router/assetRouter')
const actionlogRouter = require('../router/actionRouter')
const auditRouter = require('../router/auditRouter')
const loginlogRouter = require('../router/loginRouter')
const conversationRouter = require('../router/conversationRouter')

app.use('/user', userRouter)
app.use('/asset', assetRouter)
app.use('/audit', auditRouter)
app.use('/loginlog', loginlogRouter)
app.use('/actionlog', actionlogRouter)
app.use('/conversationlog', conversationRouter)

//将static目录设置为静态目录
app.use('/public', express.static('../static'))
app.use('/node_modules', express.static('../node_modules'))




app.listen(3005, () => {
    console.log('server start')

})