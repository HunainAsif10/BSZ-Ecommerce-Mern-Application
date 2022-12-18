const express=require('express');
const { fetchSuper } = require('../middleware/fetchUser');
const router=express.Router()
const Employee=require('../models/Employee')



// createEmployee
router.post('/createEmployee',fetchSuper,async(req,res)=>{
    let employee=await Employee(req.body)
    let savedEmployee=await employee.save();
    res.status(200).json({savedEmployee})

})
// deleteEmployee
router.delete('/deleteEmployee/:id',fetchSuper,async(req,res)=>{
    let employee=await Employee.findByIdAndDelete(req.params.id);
    res.status(200).json({employee})

})
// updateEmployee

router.put('/updateEmployee/:id',fetchSuper,async(req,res)=>{
    let employee=await Employee.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
    res.status(200).json({employee})
})
// getEmployee

router.get('/getEmployee/:id',fetchSuper,async(req,res)=>{
    let employee=await Employee.findById(req.params.id)
    res.status(200).json({employee})
})
// getAllEmployees
router.get('/getAllEmployees',fetchSuper,async(req,res)=>{
    let employee=await Employee.find();
    res.status(200).json({employee})
})
module.exports=router;