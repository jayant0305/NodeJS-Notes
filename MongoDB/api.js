const express=require('express')
const App=express()
const User=require('./mongoDB')
const DB=require('./connectDB')


App.use(express.json())

DB()


App.get('/', async(req,res)=>{
    const result=await User.findOne({})
    res.json(result)
})
App.post('/', async(req,res)=>{
    const user=req.body
    const newUser = await User.create(user)
    newUser.save()
    res.json(User.findOne({}))
})

App.listen(4981,()=>{
    console.log('listening on http://localhost:4981')
})