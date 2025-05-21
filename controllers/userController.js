 const asyncHandler=require("express-async-handler");
 //@description Register a user
 //@route POST /api/users/register
 //@access public
const registerUser=asyncHandler(async(req,res)=>{
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