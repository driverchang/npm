const fs=require('fs')
//同步读取
try{
    let dirs=fs.readdirSync('./')
    console.log(dirs)
}
catch(err){
    console.log('error')
    console.log(err)

}

// console.log(2222)

// 异步读取
fs.readdir('./',(err,data)=>{
    if(err){
        console.log(Error)
    }
    else
    {
        console.log(data)
    }
})
console.log(222)