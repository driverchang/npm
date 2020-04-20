const express = require('express')
const router = express.Router()
const User = require('../db/module/userModle')


// 添加数据 注册
router.post('/reg',(req,res)=>{

    //获取数据
    let {us,ps}=req.body
    if(us&&ps)
    {
        User.insertMany({us:us,ps:ps})
        .then(()=>{
            res.send({err:0,msg:'ok'})
        })
        .catch((err)=>{
            res.send({err:-2,msg:'failed'})
        })
    }
    else{
        return res.send({err: -1,msg:'参数错误'})
    }

    console.log(us,ps)
    //数据处理
    //返回数据          


})

// 登录
router.post('/login',(req,res)=>{
    let {us,ps} = req.body
    if(!us&&!ps)
    {
        return  res.send({err:-1, msg : '参数错误'})
    }
    //{us:us,ps:ps} = {us,ps}
    User.find({us})
    .then((data)=>{
        if(data.length >0)
        {
            res.send({err:0,msg:'ok'})
        }
        else
        {
            res.send({err:-1,msg:'密码错误'})
        }
        
    })
    .catch((err)=>{
        return res.send({err:-2,msg:'failed'})
    })
})

// 删除数据
router.post('/del',(req,res)=>{

    //获取数据
    let {us,ps}=req.body
    if(us)
    {
        User.deleteMany({us,ps})
        .then(()=>{
            res.send({err:0,msg:' del ok'})
        })
        .catch((err)=>{
            res.send({err:-2,msg:'failed'})
        })
    }
    else{
        return res.send({err: -1,msg:'参数错误'})
    }

    console.log(us,ps)
    //数据处理
    //返回数据          


})

//更新数据 ???

router.post('/update',(req,res)=>{

    //获取数据
    let {us,ps}=req.body
    if(us||ps)
    {
        User.insertMany({us:us,ps:ps})
        .then(()=>{
            res.send({err:0,msg:'ok'})
        })
        .catch((err)=>{
            res.send({err:-2,msg:'failed'})
        })
    }
    else{
        return res.send({err: -1,msg:'参数错误'})
    }

    console.log(us,ps)
    //数据处理
    //返回数据          


})

module.exports = router