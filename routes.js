const express = require('express')

const router = express.Router()
const orders = require('./schema')

// Get method 
router.get('/',async(req,res)=>
     {
try{
const allOrders = await orders.find()
res.json(allOrders)
}
catch(err){
res.json({err})
}
     })


//  the asynchronous approach 
router.post ('/sendOrder',async(req, res)=>{
    const order = new orders({
        name:req.body.name,
        email: req.body.email,
         phoneNumber:req.body.phoneNumber
    
    })

    try{
        const savedOrder = await order.save()
        res.json(savedOrder)
    }
    catch(err){
        res.json({err})
    }
    
    } )

    // Post method 
router.post ('/orders',(req, res)=>{
const order = new orders({
    name:req.body.name,
    email: req.body.email,
     phoneNumber:req.body.phoneNumber

})
order.save()
.then(data=>{res.json(data)})
.catch(err=>{res.json({mss:err})})

} )

    module.exports = router