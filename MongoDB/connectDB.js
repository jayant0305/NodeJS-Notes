const mongoose= require('mongoose')
function DB(){
    mongoose.connect('URL')
    .then(()=>{
        console.log('mongodb://localhost:27017/Demo')
    }).catch((err)=>{
        console.log()
    })
}
module.exports=DB
