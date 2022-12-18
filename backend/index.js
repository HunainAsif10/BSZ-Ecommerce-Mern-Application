const express=require('express')
const app=express()
const dotenv=require('dotenv')
dotenv.config()
const PORT=process.env.PORT
const connectToMongo=require('./db')
connectToMongo();
app.use(express.json())

app.use('/auth',require('./routes/auth'))
app.use('/user',require('./routes/user'))
app.use('/category',require('./routes/category'))
app.use('/product',require('./routes/product'))
app.use('/order',require('./routes/order'))
app.use('/cart',require('./routes/cart'))
app.use('/stock',require('./routes/stock'))
app.use('/employee',require('./routes/employee'))
app.use('/account',require('./routes/account'))
app.listen(PORT,()=>{
    console.log(`Server is listening on Port ${PORT}`)
})