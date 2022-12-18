const mongoose=require('mongoose')
const { Schema } = mongoose;

const OrderSchema = new Schema({
   userId:{
    type:mongoose.Schema.Types.ObjectId,
    required:true
   },
   products:[
    {
      productId:{
        type:String,
        reequired:true
      },
      quantity:{
        type:Number,
        default:1
      },
    }
   ],
   address:{
    type:String,
    required:true
  },
  amount:{
    type:Number,
    required:true
},
status:{
    type:String,
    default:"pending"
}
},{timestamps:true});

module.exports=mongoose.model('Order', OrderSchema)