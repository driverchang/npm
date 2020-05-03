const express = require('express')
const router = express.Router()
const actionlogModle = require('../db/modle/actionlogModle')

//查询数据
router.post('/list', (req, res) => {
    actionlogModle.find({})
        .then((data) => {
            res.send({ err: 0, msg: 'ok',list:data })
        })
        .catch((err) => {
            res.send({ err: -1, msg: '失败' })
        })
})
module.exports = router