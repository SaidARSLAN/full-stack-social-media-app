import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express();

// 30m restriction, extended for complicated URLs parameters!
app.use(bodyParser.json({limit: "30m", extended: true}))

// For secure!
app.use(bodyParser.urlencoded({limit:"30m",extended:true}))
app.use(cors())