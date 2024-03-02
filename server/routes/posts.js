const express = require('express')
const { getPost, createPost, createAllPost } = require('../controllers/Posts')
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

router.post("/more-post",async (req,res) =>  {

        const allPosts = req.body;
        const createdAllPosts = []
        for (const post of allPosts) {

            let result = await createAllPost(post)
            console.log(result)
            createdAllPosts.push(result)

        }
        res.status(201).json(createdAllPosts)
})



module.exports = router