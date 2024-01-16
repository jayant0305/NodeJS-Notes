const express=require('express')
const staticRouter=express.Router()
const {signupHandler,loginHandler}=require('../controller/userController')

staticRouter.get('/signup',(req,res)=>{
    return res.status(200).render('signup')
})
staticRouter.get('/login',(req,res)=>{
    return  res.status(200).render('login')
})

module.exports = staticRouter