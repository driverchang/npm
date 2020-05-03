const mongoose = require('mongoose')

var actionLogSchema = new mongoose.Schema({
    admin: { type: String, required: true },
    action: { type: String },
    action_time: { type: String }

});


//将scheme 对象转化为数据模型

var ActionLog = mongoose.model('actions', actionLogSchema) //该数据对象和集合关联('集合名''scheme对象')

module.exports = ActionLog