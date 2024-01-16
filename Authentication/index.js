const express=require('express')
const App= express()
const userRouter= require('./route/userRoute')

App.set("view engine", "ejs")
App.set("views",path.resolve("./views"))

App.use('/user',userRouter)


App.listen(2000,()=>{
    console.log('listening at 2000')
})

