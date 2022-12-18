const mongoose=require('mongoose')
const { Schema } = mongoose;

const AccountSchema = new Schema({
  title:{
    type:String,
    required:true,
  },
  Iban:{
    type:String,
    required:true
  },
  bank:{
    type:String,
    required:true
  },
  amount:{
    type:Number,
    required:true
  }

},{timestamps:true});

module.exports=mongoose.model('Account',AccountSchema)