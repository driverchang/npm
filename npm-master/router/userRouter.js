const express = require('express')
const router = express.Router()
const userModle = require('../db/modle/userModle')
const actionlogModle = require('../db/modle/actionlogModle')
const loginlogModle = require('../db/modle/loginlogModle')
const getTime = require('../src/getTime')




//用户登录
router.post('/login', (req, res) => {

    let { username, password } = req.body

    if (!username || !password) {

        res.send({ err: -3, msg: '用户名或密码为空' })
    } else {
        userModle.find({ username })
            .then((data) => {

                if (data.length === 0) {

                    return res.send({ err: -1, msg: '用户名不存在' })

                } else {

                    return userModle.find({ username, password })
                }
            })
            .then((data) => {
                if (data.length == 0) {

                    res.send({ err: -2, msg: '密码错误' })
                } else if (data.length > 0) {

                    res.send({ err: 0, msg: '登录成功' })
                    let log_time = getTime.getTime()
                    return loginlogModle.insertMany({ username, log_time })
                }
            })
            .then(() => {
                //no code
            })
            .catch((err) => {

                res.send({ err: -4, msg: '其他错误' })
            })
    }

})

//添加用户
router.post('/add', (req, res) => {


    let { admin, username, password, power, asset } = req.body
    let action = '添加用户' + username
    let action_time = getTime.getTime()

    userModle.find({ username })
        .then((data) => {
            if (data.length === 0) {
                return userModle.insertMany({ username, password, power, asset })
            } else {
                res.send({ err: -2, msg: '用户名已存在' })
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


//删除用户
router.post('/del', (req, res) => {
    let { admin, username } = req.body
    let action = '删除用户' + username
    let action_time = getTime.getTime()
    userModle.deleteOne({ username })
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

//更新用户
router.post('/update', (req, res) => {
    let { admin, _id, username, password, power, asset } = req.body
    let action = '更新用户' + username
    let action_time = getTime.getTime()

    userModle.updateOne({ _id }, { username, password, power, asset })
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

//查询数据
router.post('/list', (req, res) => {
    userModle.find({})
        .then((data) => {
            res.send({ err: 0, msg: '查询成功', list: data })

        })
        .catch((err) => {
            res.send({ err: -1, msg: '查询失败' })
        })
})

//查询数据
router.post('/find', (req, res) => {
    let { username } = req.body
    userModle.find({ username })
        .then((data) => {
            res.send({ err: 0, msg: '查询成功', list: data })


        })
        .catch((err) => {
            res.send({ err: -1, msg: '查询失败' })
        })
})

module.exports = router