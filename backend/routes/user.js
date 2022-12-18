const express=require('express');
const { fetchAndAuthenticate, fetchAdmin } = require('../middleware/fetchUser');
const User=require('../models/User')
const router=express.Router()
const bcrypt = require('bcrypt');


// updateUser
router.put('/updateUser/:id',fetchAndAuthenticate,async(req,res)=>{
     if(req.body.password){
        const salt =await bcrypt.genSalt(10);
        const hash =await bcrypt.hash(req.body.password, salt);
        req.body.password=hash;
     }
    let updateUser=await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
     res.status(200).json({updateUser})

})
// deleteUser
router.delete('/deleteUser/:id',fetchAdmin,async(req,res)=>{
    let user=await User.findByIdAndDelete(req.params.id);
    res.status(200).json({user})
})

// getUser
router.get('/getUser/:id',fetchAdmin,async(req,res)=>{
    let user=await User.findById(req.params.id).select("-password");
    res.status(200).json({user});
})
// getAllUsers

router.get('/getAllUsers',fetchAdmin,async(req,res)=>{
    let users=await User.find().select("-password");
    res.status(200).json({users})
})
module.exports=router;