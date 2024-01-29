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

const CONNECTION_URL = "mongodb://localhost:27027/localDatabase"
const PORT = process.env.PORT || 5000;

// This second options are just for version control to mongodb
mongoose.connection(CONNECTION_URL, {  useNewUrlParser : true, useUnifiedTopology : true })
.then(() => console.log(app.listen(PORT, () => console.log(`Server is running at port : ${PORT}`))))
.catch((error) => console.log(error.message))

// For controlling old version or new version find and update commands!
mongoose.set('useFindAndModify', false)