const express=require('express')
const router=express.Router()

router.get('/',(req,res)=>{
    res.status().send("Welcome")
})

module.exports = router
