const express=require("Express");
const { fetchAdmin } = require("../middleware/fetchUser");
const router=express.Router()
const Product=require('../models/Product')



// createProducts
router.post('/createProduct',fetchAdmin,async(req,res)=>{
    let product=await Product(req.body)
    
    let savedProduct=await product.save();

    res.status(200).json({savedProduct})
})
// updateProducts
router.put('/updateProduct/:id',fetchAdmin,async(req,res)=>{
    let updatedProduct=await Product.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
    res.status(200).json({updatedProduct})
})
// deleteProducts

router.delete('/deleteProduct/:id',fetchAdmin,async(req,res)=>{
    let deletedProduct=await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({deletedProduct})
})
// getProduct

router.get('/getProduct/:id',async(req,res)=>{
    let product=await Product.findById(req.params.id);
    res.status(200).json({product})
})
// getAllProducts

router.get('/getAllProducts',fetchAdmin,async(req,res)=>{
    let product=await Product.find();
    res.status(200).json({product})
})

module.exports=router;