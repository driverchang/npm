const express = require('express')
const router = express.Router()
const assetModle = require('../db/modle/assetModle')
const actionlogModle = require('../db/modle/actionlogModle')
const getTime = require('../getTime')

//添加资产
router.post('/add',(req,res)=>{
    

    let {assetname,ip} = req.body

    assetModle.find({assetname})
    .then((data)=>{
        if(data.length===0)
        {
            return assetModle.insertMany({assetname,ip})
        }
        else
        {
            res.send({err:-1, msg:'资产名已存在'})
        }
    })
    .then((data)=>{
        res.send({err:0,msg:'添加成功'})
        actionlogModle.insertMany({username:'',action:'删除'})
    })
    .catch((err)=>{
        console.log(err)
        res.send({err:-2,msg: '添加失败'})
    })
})


//删除资产
router.post('/del',(req,res)=>{
    let {assetname} = req.body
    assetModle.deleteOne({assetname})
    .then((data)=>{
        res.send({err:0,msg:'删除成功'})

    })
    .catch((err)=>{
        res.send({err:-1,msg:'删除失败'})
    })
})

//更新资产
router.post('/update',(req,res)=>{
    let {_id,assetname,ip} = req.body
    uassetModle.updateOne({_id},{assetname,ip})
    .then((data)=>{
        res.send({err:0,msg:'更新成功'})
    })
    .catch((err)=>{
        res.send({err:-1,msg:'更新失败'})
    })
})

module.exports = router