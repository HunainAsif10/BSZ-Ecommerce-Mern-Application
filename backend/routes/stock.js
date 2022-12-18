const express=require('express');
const { fetchSuper } = require('../middleware/fetchUser');
const router=express.Router()
const  Stock =require('../models/Stock')



// createStock
router.post("/createStock",fetchSuper,async(req,res)=>{
    let stock=await Stock(req.body)
    let savedStock=await stock.save();
    res.status(200).json({savedStock})

})
// deleteStock
router.delete('/deleteStock/:id',fetchSuper,async(req,res)=>{
    let stock=await Stock.findByIdAndDelete(req.params.id);
    res.status(200).json({stock})

})
// updateStock

router.put('/updateStock/:id',fetchSuper,async(req,res)=>{
    let stock=await Stock.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
    res.status(200).json({stock})
})
// getStock

router.get('/getStock/:id',fetchSuper,async(req,res)=>{
    let stock=await Stock.findById(req.params.id)
    res.status(200).json({stock})
})
// getAllStock
router.get('/getAllStock',fetchSuper,async(req,res)=>{
    let stocks=await Stock.find();
    res.status(200).json({stocks})
})
module.exports=router;