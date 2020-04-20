const express = require('express')
const router = express.Router()
const userModle = require('../db/modle/userModle')
const actionlogModle = require('../db/modle/actionlogModle')
const loginlogModle = require('../db/modle/loginlogModle')
const getTime = require('../getTime')




//用户登录
router.post('/login',(req,res)=>{

    let {username,password} = req.body
    console.log({username,password})
    if(!username || !password)
    {
        return res.send({err:-3,msg:'用户名或密码为空'})
    }
    userModle.find({username})
    .then((data)=>{
        if(data.length > 0)
        {
            return userModle.find({username,password})
        }
        else if(data.length ===0)
        {
            res.send({err:-1,msg:'用户名不存在'})
        }
    })
    .then((data)=>{
        if(data.length > 0)
        {
            res.send({err:0,msg:'登录成功'})
            let log_time = getTime.getTime()
            loginlogModle.insertMany({username,log_time})
        }
        else
        {
            res.send({err:-2,msg:'密码错误'})
        }
    })
    .catch((err)=>{
        res.send({err:-4,msg:'其他错误'})
    })
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