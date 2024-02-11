const PORT = 3438

const express = require('express')
const mongoose = require('mongoose')   
 
const posts = require('./routes/posts')
const user = require('./routes/user')
const { config } = require('./config')




const app = express()
app.use(express.json())
app.use('/',posts)
app.use('/user',user)
mongoose.connect(config.MONGODB_CONNECTION_URL)
.then(() => {

    console.log("Mongodb Connection has been established")
    app.listen(PORT,() => {

        console.log(`Server Application has been started at ${PORT}`)
    
    })

})
.catch((err) => {
        console.log("We could not established mongodb connection")
})

