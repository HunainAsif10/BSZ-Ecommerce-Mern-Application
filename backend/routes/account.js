const express=require('express');
const { fetchSuper } = require('../middleware/fetchUser');
const router=express.Router()
const Account =require('../models/Account')



// createAccount
router.post("/createAccount",fetchSuper,async(req,res)=>{
    let account=await Account(req.body)
    let savedAccount=await account.save();
    res.status(200).json({savedAccount})

})
// deleteAccount
router.delete('/deleteAccount/:id',fetchSuper,async(req,res)=>{
    let account=await Account.findByIdAndDelete(req.params.id);
    res.status(200).json({account})

})
// updateAccount

router.put('/updateAccount/:id',fetchSuper,async(req,res)=>{
    let account=await Account.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
    res.status(200).json({account})
})
// getAccount

router.get('/getAccount/:id',fetchSuper,async(req,res)=>{
    let account=await Account.findById(req.params.id)
    res.status(200).json({account})
})
// getAllAccounts
router.get('/getAllAccounts',fetchSuper,async(req,res)=>{
    let account=await Account.find();
    res.status(200).json({account})
})
module.exports=router;