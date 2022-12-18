const express=require('express');
const { fetchAndAuthenticate, fetchAdmin } = require('../middleware/fetchUser');
const router=express.Router()
const Order=require('../models/Order')
// createOrder
router.post("/createOrder",fetchAndAuthenticate,async(req,res)=>{
    let order=await Order( {...req.body,userId:req.user.id});
    let savedOrder=await order.save();
    res.status(200).json({savedOrder})
})
// deleteOrder


router.delete('/deleteOrder/:id',fetchAdmin,async(req,res)=>{
    let order=await Order.findByIdAndDelete(req.params.id);
    res.status(200).json({order})
})
// updateOrder

router.put('/updateOrder/:id',fetchAndAuthenticate,async(req,res)=>{
     let updatedOrder=await Order.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})

     res.status(200).json({updatedOrder})
})
// getOrder

router.get('/getOrder/:id',fetchAndAuthenticate,async(req,res)=>{
   
    let order=await Order.findById(req.params.id);
    res.status(200).json({order})
  

})
// getAllOrders

router.get('/getAllOrders',fetchAdmin,async(req,res)=>{
    let orders=await Order.find();
    res.status(200).json({orders})
})



module.exports=router;