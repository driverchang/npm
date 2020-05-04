const mongoose = require('mongoose')

var auditSchema = new mongoose.Schema({
    power: { type: Number, required: true },
    action: { type: String },

});


//将scheme 对象转化为数据模型

var Audit = mongoose.model('audits', auditSchema) //该数据对象和集合关联('集合名''scheme对象')

module.exports = Audit