const express = require('express')
const router = express.Router()
const userModle = require('../db/modle/userModle')


//用户登录
router.post('/login',(req,res)=>{

    let {username,password} = req.body
    if(!username || !password)
    {
        res.send()
    }
})

//添加用户
router.post('/add',(req,res)=>{
    

    let {username,password,power,asset} = req.body

    userModle.find({username})
    .then((data)=>{
        if(data.length===0)
        {
            return userModle.insertMany({username,password,power,asset})
        }
        else
        {
            res.send({err:-2, msg:'用户名已存在'})
        }
    })
    .then((data)=>{
        res.send({err:0,msg:'添加成功'})
    })
    .catch((err)=>{
        console.log(err)
        res.send({err: -1,msg: '添加失败'})
    })
})


//删除用户
router.post('/del',(req,res)=>{
    let {username} = req.body
    userModle.deleteOne({username})
    .then((data)=>{
        res.send({er:0,msg:'删除成功'})
    })
    .catch((err)=>{
        res.send({err:-1,msg:'删除失败'})
    })
})

//更新用户
router.post('/update',(req,res)=>{
    let {_id,username,password,power,asset} = req.body
    console.log({_id,username,password,power,asset})
    userModle.updateOne({_id},{username,password,power,asset})
    .then((data)=>{
        res.send({err:0,msg:'更新成功'})
    })
    .catch((err)=>{
        res.send({err:-1,msg:'更新失败'})
    })
})
module.exports = router