const express = require ("express")

const mongoose = require ("mongoose")
require('dotenv/config')
const app = express()



mongoose.connect()
.then(()=>console.log('CONNECTED TO THE DB'))
.catch(error=>{console.log('Encountered error', error)})

// app.listen('${port}')
app. listen (process.env.port, ()=>console.log('CONNECTED TO PORT'))

