const mongoose=require('mongoose')
const { Schema } = mongoose;

const EmployeeSchema = new Schema({
  name:{
    type:String,
    required:true
  },
  lastName:{
    type:String,
    required:true,
  },
  contact:{
    type:String,
    required:true
  },
  address:{
    type:String,
    default:"Pakistan"
  },
  salary:{
    type:String,
    required:true
  },
  role:{
    type:String,
    default:"worker"
  }
},{timestamps:true});

module.exports=mongoose.model('Employee',EmployeeSchema)