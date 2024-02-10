const express = require('express')
const { getPost, createPost } = require('../controllers/Posts')
const { Posts } = require('../models/posts')




const router = express.Router()


router.get("/posts", async (_,res) => {

    const fetchedPosts = await getPost()
    res.status(200).json(fetchedPosts)

})

router.post("/posts", async (req,res) => {

    const createdPost = await createPost(req)

    res.status(201).json(createdPost)

})



module.exports = router