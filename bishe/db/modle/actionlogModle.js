const mongoose = require('mongoose')

var actionLogSchema = new mongoose.Schema({
    username : {type:String,required:true},
    action : {type:String},
    action_time : {type:Date}
  
});


//将scheme 对象转化为数据模型

var Action = mongoose.model('actions',actionLogSchema) //该数据对象和集合关联('集合名''scheme对象')

module.exports = Action