const express=require('express')
const db = require('./db/connect')

const app = express()


const bodyparser =require('body-parser')

app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())


//路由
const userRouter = require('./router/userRouter')

// app.get('/user/login',(req,res)=>{
//     console.log('你好')
//     res.send({error:0,msg:'ok'})
// })


app.use('/user',userRouter)

app.listen(3003,()=>{
    console.log('server start')

})