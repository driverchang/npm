const express = require('express')
const db = require('../db/connect')

const app = express()


const bodyparser = require('body-parser')

app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())


//路由
const userRouter = require('../router/userRouter')
const assetRouter = require('../router/assetRouter')
const actionlogRouter = require('../router/actionRouter')
const loginlogRouter = require('../router/loginRouter')

app.use('/user', userRouter)
app.use('/asset', assetRouter)
app.use('/loginlog', loginlogRouter)
app.use('/actionlog', actionlogRouter)
app.use('/public', express.static('../static'))




app.listen(3010, () => {
    console.log('server start')

})