const express=require('express');
const { fetchAdmin } = require('../middleware/fetchUser');
const router=express.Router()
const Category=require("../models/Category");
const Product = require('../models/Product');

// createCategory
router.post('/createCategory',fetchAdmin,async(req,res)=>{
     let category =await Category.findOne({title:req.body.title})
     if(category){
       return res.status(400).json("this category already exists");
     }
     try {
        category=await Category(req.body);

        const savedCategory= await category.save()
    
        res.status(200).json(savedCategory)
     } catch (error) {
         res.status(500).json("Internal Server Error")
     }
   

})
// updateCategory
router.put('/updateCategory/:id',fetchAdmin,async(req,res)=>{
  let updatedCategory=await Category.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
  res.status(200).json({updatedCategory})

})
// deleteCategory
router.delete('/deleteCategory/:id',fetchAdmin,async(req,res)=>{
  let deletedCategory=await Category.findByIdAndDelete(req.params.id);
  res.status(200).json({deletedCategory})
})
// getCategory
router.get('/getCategory/:categoryName',async(req,res)=>{
    let category=await Product.find({categoryName:req.params.categoryName})
    res.status(200).json({category})
})
// getAllCategories
router.get('/getAllCategories',async(req,res)=>{
  let categories=await Category.find();
  res.status(200).json({categories})
})
module.exports=router;