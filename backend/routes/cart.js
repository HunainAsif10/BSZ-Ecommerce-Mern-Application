const express=require('express');
const { fetchAndAuthenticate, fetchUser, fetchAdmin } = require('../middleware/fetchUser');
const router=express.Router()
const Cart=require("../models/Cart")

// createCart

router.post('/createCart',fetchUser,async(req,res)=>{
    let cart=await Cart({...req.body,userId:req.user.id})

    let savedCart=await cart.save();
    res.status(200).json({savedCart})

})
// updateCart
router.put('/updateCart/:id',fetchAndAuthenticate,async(req,res)=>{
    let updatedCart=await Cart.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
     res.status(200).json({updatedCart})

})
// deleteCart
router.delete('/deleteCart/:id',fetchAndAuthenticate,async(req,res)=>{
    let deletedCart=await Cart.findByIdAndDelete(req.params.id)
    res.status(200).json({deletedCart})
})
// getCart

router.get('/getCart/:id',fetchAndAuthenticate,async(req,res)=>{
    let cart=await Cart.findById(req.params.id);
    res.status(200).json({cart})
})
// getAllCarts

router.get('/getAllCarts',fetchAdmin,async(req,res)=>{
    let cart=await Cart.find();
    res.status(200).json({cart})
})

module.exports=router;