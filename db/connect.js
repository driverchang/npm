const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/bishe',{ useNewUrlParser: true ,useUnifiedTopology: true})

//连接数据库

var db = mongoose.connection  //数据连接对象
db.on('error',console.error.bind(console,'connect error:'))

db.once('open',function(){
    console.log('数据库连接成功')
})