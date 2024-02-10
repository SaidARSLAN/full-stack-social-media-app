const express = require('express')
const { getPosts } = require('../controllers/Posts')




const posts = express.Router()

posts.get("/posts", async (_,res) => {

    const getResult = await getPosts()
    res.status(200).json(getResult)

})



module.exports = posts