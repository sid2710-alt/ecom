const User=require('../model/user');
const jwt=require('jsonwebtoken');
module.exports.create=async function(req,res){
try{
    let user=await User.findOne({email:req.body.email});
    if(user)
    {
        return res.status(200).json({message:"User Already exist"});
    }
    await User.create(req.body);
    return res.status(201).json({message:"User Created",user:req.body});
}
catch(e)
{
return res.status(501).json({
    message:"User cant be created",
    err:e
})
}
}
module.exports.create_session= async function(req,res){
    try{
  let user=await User.findOne({email:req.body.email});
  if(!user || user.password!=req.body.password){
     return res.json(422,{
         message:"User not found",
     }) ;
  }
  return res.json(200,{
  message:"Sign in successful,here is your token",
  date:{
      token:jwt.sign(user.toJSON(),'namonamo',{expiresIn:'1000000'})
  }
  })
  
  }
    catch(e)
    {
      console.log('error',err); 
      res.status(500).json({
          message:"Internal Server Error"
      })
    }
    }