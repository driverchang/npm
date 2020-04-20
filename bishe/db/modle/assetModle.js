const mongoose = require('mongoose')

var assetSchema = new mongoose.Schema({
    as : {type:String,required:true},
    ip : {type:String,required:true}
  
});


//将scheme 对象转化为数据模型

var Asset = mongoose.model('assets',assetSchema) //该数据对象和集合关联('集合名''scheme对象')

module.exports = Asset