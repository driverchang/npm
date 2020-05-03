const express = require('express')
const router = express.Router()
const assetModle = require('../db/modle/assetModle')
const actionlogModle = require('../db/modle/actionlogModle')
const getTime = require('../src/getTime')

//添加资产
router.post('/add', (req, res) => {


    let { admin, assetname, ip } = req.body
    let action = '添加资产' + assetname
    let action_time = getTime.getTime()

    assetModle.find({ assetname })
        .then((data) => {
            if (data.length === 0) {
                return assetModle.insertMany({ assetname, ip })
            } else {
                res.send({ err: -1, msg: '资产名已存在' })
            }
        })
        .then((data) => {
            res.send({ err: 0, msg: '添加成功' })
            return actionlogModle.insertMany({ admin, action, action_time })
        })
        .then(() => {
            // no code
        })
        .catch((err) => {
            console.log(err)
            res.send({ err: -2, msg: '添加失败' })
        })
})


//删除资产
router.post('/del', (req, res) => {
    let { admin, assetname } = req.body
    let action = '删除资产' + assetname
    let action_time = getTime.getTime()
    assetModle.deleteOne({ assetname })
        .then((data) => {
            res.send({ err: 0, msg: '删除成功' })
            return actionlogModle.insertMany({ admin, action, action_time })

        })
        .then(() => {
            // no code
        })
        .catch((err) => {
            res.send({ err: -1, msg: '删除失败' })
        })
})

//更新资产
router.post('/update', (req, res) => {
    let { admin, _id, assetname, ip } = req.body
    let action = '更新资产' + assetname
    let action_time = getTime.getTime()
    assetModle.updateOne({ _id }, { assetname, ip })
        .then((data) => {
            res.send({ err: 0, msg: '更新成功' })
            return actionlogModle.insertMany({ admin, action, action_time })
        })
        .then(() => {
            // no code
        })
        .catch((err) => {
            res.send({ err: -1, msg: '更新失败' })
        })
})

router.post('/list', (req, res) => {
    assetModle.find({})
        .then((data) => {
            res.send({ err: 0, msg: 'ok', list: data })

        })
        .catch((err) => {
            res.send({ err: -1, msg: '失败' })
        })
})

module.exports = router