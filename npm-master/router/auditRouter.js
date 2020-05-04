const express = require('express')
const router = express.Router()
const auditModle = require('../db/modle/auditModle')

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




module.exports = router