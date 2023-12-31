//WRITE CODE TO CONNECT DB
const mongoose=require('mongoose')
function DB(){
    mongoose.connect('URL')
    .then(()=>{

    })
    .catch(()=>{

    })
}
module.exports = DB