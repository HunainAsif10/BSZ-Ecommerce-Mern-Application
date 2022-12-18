const express=require('express')
const router=express.Router()
const User=require('../models/User')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// createUser
router.post('/createUser',[
    body('name').isLength({min:3}),
    body('email').isEmail(),
    body('contact').isLength({min:5}),
    body('password').isLength({ min: 5 }),
],async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let success;
    let user=await User.findOne({email:req.body.email})
    if(user){
        res.status(400).json({error:"User With this email already exists"})
        success=false;
    }
    const salt =await bcrypt.genSalt(10);
    const hash =await bcrypt.hash(req.body.password, salt);
     
    user=await User.create({
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact,
        password:hash,
      })
     
      const data={
        user:{
            id:user.id,
            role:user.role
        }
      }
      const token = jwt.sign( data,process.env.JWT_SEC);
      success=true;

      res.status(200).json({success,token})

    
})

// loginUser

router.post('/loginUser',[
    body('email').isEmail(),
    body('password').exists(),
],async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    const {email,password}=req.body;
    try {
        let success;
        let user=await User.findOne({email})
        if(!user){
            res.status(400).json({error:"User Not Found"})
            success=false;
        }
        let passwordCompare=await bcrypt.compareSync(password,user.password);

        if(!passwordCompare){
            res.status(400).json({error:"Wrong Password"})
            success=false;
        }
        const data={
            user:{
                id:user.id,
                role:user.role
            }
          }
          const token = jwt.sign( data,process.env.JWT_SEC);
          success=true;
    
          res.status(200).json({success,token})
    } catch (error) {
        res.status(500).json({error:"Internal Server Error"})
    }

})


module.exports=router;