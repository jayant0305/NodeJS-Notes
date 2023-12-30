// Express is a frameworks 
// Maintainability
// Readability

const express=require('express');
const App=express() //Handler function

App.get('/',(req,res)=>{
    return res.end('Welcome to my page')
})

App.post('/',(req,res)=>{
    return res.end('Welcome to my page')
})

App.get('/profile',(req,res)=>{

    return res.end(`Welcome ${req.query.name}`)
})

App.listen(4000,()=>{
    console.log('listening on 4000')
})