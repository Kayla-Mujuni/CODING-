const express = require ("express")
const mongoose = require ("mongoose")
require('dotenv/config')

const bodyParser = require('body-parser')
const routes = require('./routes')
const app = express()

app.use(bodyParser.json())
app.use('/api',routes)

mongoose.connect(process.env.MongoDBlink)
.then(()=>console.log('CONNECTED TO THE DB'))
.catch(error=>{console.log('Encountered error', error)})

// app.listen('${port}')
app. listen (process.env.port, ()=>console.log('CONNECTED TO PORT'))

