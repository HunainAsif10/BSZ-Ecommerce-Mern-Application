const mongoose=require('mongoose')
const { Schema } = mongoose;

const StockSchema = new Schema({
   productName:{
    type:String,
    required:true
   },
   quantity:{
    type:Number,
    required:true
   },
   categoryName:{
    type:String,
    required:true
   },
   price:{
    type:Number,
    required:true
   },
   value:{
    type:Number,
    default:0
   }
},{timestamps:true});

module.exports=mongoose.model('Stock',StockSchema)