const mongoose=require('mongoose')
const { Schema } = mongoose;

const CategorySchema = new Schema({
   title:{
    type:String,
    required:true,
   },
   image:{
    type:String,
    required:true,
   }
},{timestamps:true});

module.exports=mongoose.model('Category', CategorySchema)