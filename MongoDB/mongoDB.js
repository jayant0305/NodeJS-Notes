/**
    MONGODB
    1. No SQL Document based database
    2. Aggregation Pipeline
    3. Work on BSON format
    4. Best for Node applications


    commands for mongosh
    1. show dbs
    2. use dbs
    3. show collections
    4. db.coll.find({})
    5. db.coll.insert({})

 */

const mongoose=require('mongoose')
const UserSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    gender:{
        type:String,
    }
})

const User=mongoose.model('User',UserSchema)
module.exports = User
