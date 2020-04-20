const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/1902',{ useNewUrlParser: true ,useUnifiedTopology: true})

//连接数据库

var db = mongoose.connection  //数据连接对象
db.on('error',console.error.bind(console,'connect error:'))

db.once('open',function(){
    console.log('db ok')
})

//scheme 对象操作数据库

//创建一个和集合相关的scheme 对象  类似表头


//获取scheme对象



var userSchema = new mongoose.Schema({
    us : {type:String,required:true},
    ps : {type:String,required:true},
    age : Number,
    sex : {type:Number,default:0}
  
});


//将scheme 对象转化为数据模型

var User = mongoose.model('user',userSchema) //该数据对象和集合关联('集合名''scheme对象')

//操作数据库

// User.insertMany({us:'xcm',ps:'123',age:16})
// .then((data)=>{
//     console.log(data)
//     console.log('insert ok')
// })
// .catch((err)=>{
//     console.log('insert failed')
// })

