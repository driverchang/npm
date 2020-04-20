const mongoose = require('mongoose')

var loginlogSchema = new mongoose.Schema({
    us : {type:String,required:true},
    log_time : {type:Date,required:true},
    exit_time : {type:Date}
  
});


//将scheme 对象转化为数据模型

var Loginlog = mongoose.model('loginlogs',loginLogSchema) //该数据对象和集合关联('集合名''scheme对象')

module.exports = Loginlog