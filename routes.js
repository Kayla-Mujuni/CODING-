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
    //  Get a specific order
    router.get('/:orderId', async(req,res)=>{
        try{
            const specificOrder= await orders.findById(req.params.orderId)
                res.json(specificOrder)
        }
        catch(err){
            res.json({err})
        }
    })

    // delete method 
    router.delete ('/delete/:orderID', async (req,res)=>{
        try{
    
     const deletedPost = await orders.deleteOne({_id:req.params.orderID})
    res.json(deletedPost)
    }
    catch(err){ 
        res.json({mssg:err.message})
    }
       } )
    
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
// UPDATE METHOD 
router.patch('/update/:orderID' , async(req,res)=>{
try{
    const updatedOrder = await orders.updateOne({_id:req.params.orderID},{$set:{name:req.body.name}})
    res.json(updatedOrder)
}
catch(err){
    res.json({mssg:err.message})
}
})

// function variable (){
// }
// const variable =()=>{}
// ()=>{}




    module.exports = router