/* STATUS CODE:
1. Informational 
2. Succcessful
3. Redirectional
4. CLient 
5. Server

*/

const express = require('express')
const App= express()
App.get('/api/statusCode200',(req,res)=>{
    res.status(200).end("200 - OK")
})
App.get('/api/statusCode201',(req,res)=>{
    res.status(201).end("201 - CREATED")
})
App.get('/api/statusCode202',(req,res)=>{
    res.status(202).end("202 - ACCEPTED FOR PROCESSING")
})
App.get('/api/statusCode203',(req,res)=>{
    res.status(203).end("203 - OK")
})
App.get('/api/statusCode204',(req,res)=>{
    res.status(203).end("204 - NO CONTENT")
})



App.get('/api/statusCode400',(req,res)=>{
    res.status(203).end("400 - BAD REQUEST")
})
App.get('/api/statusCode401',(req,res)=>{
    res.status(203).end("401 - UNAUTHORIZED")
})
App.get('/api/statusCode402',(req,res)=>{
    res.status(203).end("402 - PAYMENT REQUIRED")
})
App.get('/api/statusCode404',(req,res)=>{
    res.status(203).end("404 - NOT FOUND")
})



App.get('/api/statusCode500',(req,res)=>{
    res.status(203).end("500 - INTERNAL SERVER ERROR")
})
App.get('/api/statusCode501',(req,res)=>{
    res.status(203).end("501 - NOT IMPLEMENTED")
})

App.listen(4289,()=>{
    console.log("listening on port 4289")
})