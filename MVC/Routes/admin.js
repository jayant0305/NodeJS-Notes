const express=require('express')
const router=express.Router()

router
.route('/')
.get(handleGetUser)
.path((req,res)=>{

})

module.exports = router
