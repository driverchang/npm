const express=require('express')
const db = require('./db/connect')

const app = express()


const bodyparser =require('body-parser')

app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())


//路由
const userRouter = require('./router/userRouter')
const assetRouter = require('./router/assetRouter')

app.use('/user',userRouter)
app.use('/asset',assetRouter)



app.listen(3005,()=>{
    console.log('server start')
    
})