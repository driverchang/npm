const express = require('express')
const router = express.Router()
const loginlogModle = require('../db/modle/loginlogModle')

//查询数据
router.post('/list', (req, res) => {
    loginlogModle.find({})
        .then((data) => {
            res.send({ err: 0, msg: 'ok', list: data })
        })
        .catch((err) => {
            res.send({ err: -1, msg: '失败' })
        })
})

module.exports = router