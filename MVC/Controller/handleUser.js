const User=require('../Models/userSchema')
async function handleGetUser(req,res){  
    const allUser=await User.findById({})
    res.status(200).end(allUser)
}

async function handleGetUserByID(req,res){ 
    const user=await User.findById({_id:req.body.id}) 
    if(!user)return res.status(404).end("User not found")
    return res.status(200).end(user)
}

async function handleUpdateUserByID(req,res){ 
    const user=await User.findByIdAndUpdate({_id:req.body.id}) 
    if(!user)return res.status(404).end("User not found")
    return res.status(200).end(user)
}

async function handleDeleteUserByID(req,res){ 
    const user=await User.findByIdAndDelete({_id:req.body.id}) 
    if(!user)return res.status(404).end("User not found")
    return res.status(200).end(user)
}

module.exports = {handleGetUser,handleGetUserByID,handleUpdateUserByID,handleDeleteUserByID}