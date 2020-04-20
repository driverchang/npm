const mongoose = require('mongoose')

var loginLogSchema = new mongoose.Schema({
    username : {type:String,required:true},
    log_time : {type:String}
 //   exit_time : {type:String}
  
});


//将scheme 对象转化为数据模型

var Loginlog = mongoose.model('loginlogs',loginLogSchema) //该数据对象和集合关联('集合名''scheme对象')

module.exports = Loginlog