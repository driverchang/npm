const express = require('express')
const router = express.Router()
const auditModle = require('../db/modle/auditModle')
const actionlogModle = require('../db/modle/actionlogModle')
const getTime = require('../src/getTime')

router.post('/find', (req, res) => {
    let { power } = req.body
    auditModle.find({ power })
        .then((data) => {
            res.send({ err: 0, msg: '查询成功', list: data })

        })
        .catch((err) => {
            res.send({ err: -1, msg: '查询失败' })
        })
})

router.post('/add', (req, res) => {


    let { admin, power, order } = req.body
    let action = '添加审计规则  ' + getTime.change(parseInt(power)) + ' : ' + order
    let action_time = getTime.getTime()

    auditModle.find({ power, order })
        .then((data) => {
            if (data.length === 0) {
                return auditModle.insertMany({ power, order })
            } else {
                res.send({ err: -2, msg: '规则已存在' })
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
            res.send({ err: -1, msg: '添加失败' })
        })
})

router.post('/del', (req, res) => {
    let { admin, power, order } = req.body
    let action = '删除审计规则  ' + getTime.change(parseInt(power)) + ' : ' + order
    let action_time = getTime.getTime()
    auditModle.deleteOne({ power, order })
        .then((data) => {
            res.send({ err: 0, msg: '删除成功' })
            return actionlogModle.insertMany({ admin, action, action_time })
        })
        .then(() => {
            // no code
        })
        .catch((err) => {
            console.log(err)
            res.send({ err: -1, msg: '删除失败' })
        })
})



router.post('/list', (req, res) => {
    auditModle.find({})
        .then((data) => {
            res.send({ err: 0, msg: '查询成功', list: data })

        })
        .catch((err) => {
            res.send({ err: -1, msg: '查询失败' })
        })
})




module.exports = router