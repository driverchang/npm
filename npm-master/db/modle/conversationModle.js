const mongoose = require('mongoose')

var conversationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    action: { type: String, required: true },
    con_time: { type: String }

});


//将scheme 对象转化为数据模型

var Conversation = mongoose.model('conversationlogs', conversationSchema) //该数据对象和集合关联('集合名''scheme对象')

module.exports = Conversation