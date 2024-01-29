import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts',postRoutes)

// 30m restriction, extended for complicated URLs parameters!
app.use(bodyParser.json({limit: "30m", extended: true}))

// For secure!
app.use(bodyParser.urlencoded({limit:"30m",extended:true}))
app.use(cors())

const CONNECTION_URL = "mongodb://localhost:27017/localDatabase"
const PORT = process.env.PORT || 5000;

// This second options are just for version control to mongodb
mongoose.connect(CONNECTION_URL)
.then(() => app.listen(PORT, () => console.log(`Server is running at port : ${PORT}`)))
.catch((error) => console.log(error.message))

