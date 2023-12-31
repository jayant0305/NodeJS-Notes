const express = require('express');
const App=express()
const DB=require('./Models/DB')
const User=require('./Models/userSchema')
const userRouter= require('./Routes/route')
const adminRouter= require('./Routes/admin')


DB()
App.use('/user',userRouter);
App.use('/admin',adminRouter);

App.listen(4000, (req,res)=>{
    console.log("listening on 4000")
})