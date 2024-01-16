const express=require('express')
const router=express.Router()
const {signupHandler,loginHandler}=require('../controller/userController')

router.post('/signup',signupHandler)
router.post('/login',loginHandler)

module.exports = router