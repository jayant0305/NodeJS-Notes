const User=require('../DB/userSchema')
async function signupHandler(req,res){
    const {name,password}=req.body
    if(User.findOne({name:name,password:password})==null){
        await User.create(name,password)
        res.status(200).render("home")
    }
    
    else res.end("User already exists")
}

async function loginHandler(req,res){
    const {name,password}=req.body
    const user=await User.find({name:name}, {password:password})
    if(user!=null){
        res.status(200).render("home")
    }
    else{
        res.status(403).render("login")
    }
    
}
module.exports = {signupHandler,loginHandler}