const express=require('express')
const users=require('./MOCK_DATA.json')
const App=express()


//IMPORTANT POINT TO REMEMBER
//1. for POST and json format use body-parser => App.use(bodyParser)
//2. for POST and urlencoded format use => App.use(express.urlencoded({ extended:true}))

//Middleware or Plugin
App.use(express.urlencoded({ extended:true}))

//ROUTES
App.get('/users',(req,res)=>{
    // const html=`<ul>
    // ${users.map(user=> `<li>${user.first_name}</li>`}
    // </ul>`
    res.end('HTML PAGE WILL RENDER')
})


App.get('/api/users',(req,res)=>{
    res.json(users)
})
App.get('/api/users/:id',(req,res)=>{
    const id=Number(req.params.id)
    const user=users.find((u)=>u.id===id)
    res.send(user)
})


//Port Listening at
App.listen(4000,()=>{
    console.log('listening at PORT 4000')
})


