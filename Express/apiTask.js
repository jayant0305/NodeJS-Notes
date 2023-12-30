//create an api to push user in the mock_DATA
const express = require('express');
const App= express();
const Users=require('./MOCK_DATA.json')
const bodyParser = require('body-parser');


App.use(bodyParser.json());


App.get('/api/users',(req,res)=>{
    res.json(Users)
})

App.post('/api/push',(req,res)=>{
    const user=req.body
    Users.push({...user,id:Users.length+1})
    return res.json({id:Users.length,name:user.first_name})
})

App.listen(4000,()=>{
    console.log('listening on PORT 4000')
})