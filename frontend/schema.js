// import mongoose
const  mongoose = require (" mongoose")
 const orderSchema = new mongoose.Schema (  {
name:{
    type:String,
    required:true
},
email:{
    type:string 
},

phoneNumber:{
    type:string,
    required:true
},

 })
 module.exports = mongoose.model('orders', orderSchema)
  
 