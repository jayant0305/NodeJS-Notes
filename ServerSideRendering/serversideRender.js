//Use template engines for SSR
// 1. EJS
// 2. handlebars
// 3. pug
const express = require('express')
const app = express()
const path=require('path')

app.set("view engine", "ejs")
app.set("views",path.resolve("./views"))

app.get('/', (req, res)=>{
    res.render('home',{
        name:Jayant
    })
})
app.listen(8080,()=>{
    console.log("listening on 8080")
})