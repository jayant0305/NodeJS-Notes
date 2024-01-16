const mongoose = require('mongoose')
const url=""

function DB(){
    mongoose
    .connect(url)
    .then(()=>{
        console.log('Connect')
    }).catch(err =>{
        console.log("Not connected")
    })
}
module.exports = DB

