 const User = require("../models/userModel")
 const bcrypt=require("bcrypt")
 const asyncHandler=require("express-async-handler");
 //@description Register a user
 //@route POST /api/users/register
 //@access public
const registerUser=asyncHandler(async(req,res)=>{
    const {username,email,password}=req.body;
    if (!username  || !email || !password){
        res.status(400);
        throw new Error("All fields are mandotory!");
    }
    const userAvailable=await User.findOne({email});
    if (userAvailable){
        res.status(400);
        throw new Error("User already registered!");
    }
    res.json({message:"Register the user"});
});


//@description Login user
//@route POST /api/users/register
//@access public
const loginUser=asyncHandler(async(req,res)=>{
    res.json({message:"Login the user"});
});
 

//@description user info
//@route POST /api/users/current
//@access private
const currentUser=asyncHandler(async(req,res)=>{
    res.json({message:"Current User Information"});
});
 
module.exports={registerUser,loginUser,currentUser}