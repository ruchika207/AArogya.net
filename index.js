const express = require("express")
const colors = require("colors")
const morgan = require('morgan')
const dotenv = require('dotenv')

//rest object
const app = express()

//middleewares
app.use(express.json())
app.use(morgan('dev'))

//routes
app.get('/',(req,res)=> {
res.status(200).send ({
    message: "server running",
});
});
