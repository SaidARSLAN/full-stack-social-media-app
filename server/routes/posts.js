const express = require('express')




const posts = express.Router()

posts.get("/posts", (req,res) => {

    
    res.send("Connection has been established!")

})



module.exports = posts