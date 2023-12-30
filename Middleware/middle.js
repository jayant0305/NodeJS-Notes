// CLIENT ==> MIDDLEWARE ==> SERVER
//   ^    <==                   v
//   ^                          v    
//   ^                          v    
//   ^             <==          v


// access to req object , res object and next middleware

//IMPORTANT POINT FOR MIDDLEWARE
//1. execute the code
//2. call next middleware
//3. emd req-res cycle 
//4. make changes to req and req object [ changes are through out globally]


//DON'T USE
// => res.json() 
// => no use of next()


const expres=require('express')
const App=express()

App.use((req,res,next) =>{
    req.user="Jayant"
    next()
})

App.use((req,res,next) =>{
    console.log(req.user)
    next()
})



App.get('/api',(req,res)=>{
    console.log(req.user)
    res.end(req.user)
})
App.listen(4098,()=>{
    console.log('listening on 4098')
})