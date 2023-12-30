// Headers are the important part of an API request 
// they represents the meta data associated with the request
// Always start custom headers with X like  "X-powered by = Express"
// tells the server details about the request such as what type of data 
// the client, user, or request wants in the response. 
// Type can be html , text , JSON , cookies or others.

const express = require('express')
const App=express();

App.use(express.urlencoded({extended: true}))
App.use(express.json())

App.get('/api/headers',(req,res)=>{

    res.setHeader("X-Name","Jayant")
    return res.end("Response Header set")

})

App.listen(5000,()=>{
    console.log("listening on PORT 5000")
})
