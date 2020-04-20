const express = require('express')

const app = express()

app.get('/test',(req,res)=>{

    let {token} = req.query
    if(token)
    {
        res.send('ok')
    }
    else
    {
        res.send('no ok')
    }

})

app.listen(3000,()=>{
    console.log('server start')
    console.log(__dirname)
})