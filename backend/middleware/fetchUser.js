const jwt = require('jsonwebtoken');
const dotenv=require('dotenv')
dotenv.config()

const fetchUser=(req,res,next)=>{
    const token=req.header("auth-token")
    if(!token){
        res.status(401).json({error:"Please Authenticate using Correct Token"})
    }

    let data=jwt.verify(token,process.env.JWT_SEC);

    req.user=data.user;
    next();

}
// fetchAndAuthenticate

const fetchAndAuthenticate=(req,res,next)=>{
    fetchUser(req,res,()=>{
        if(req.params.id === req.user.id || (req.user.role === "admin" || "superAdmin")  ){
            next();
        }
        else{
            res.status(401).json({error:"Authentication"})
        }
    })
}
// fetchadmin

const fetchAdmin=(req,res,next)=>{
    fetchUser(req,res,()=>{
        if(req.user.role === "admin" ||"superAdmin"){
            next();
        }
        else{
            res.status(401).json({error:"Valid For Admin or Super Admin Only"})
        }
    })
}
// fetchSuper
const fetchSuper=(req,res,next)=>{
    fetchUser(req,res,()=>{
        if(req.user.role === "superAdmin"){
            next()
        }
        else{
            res.status(401).json({error:"Only For Admin"})
        }
    })

}
module.exports={fetchUser,fetchAndAuthenticate,fetchAdmin,fetchSuper}
