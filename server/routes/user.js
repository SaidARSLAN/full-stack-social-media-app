const express = require('express')
const { getUser, createUser } = require('../controllers/User')



const router = express.Router()


router.post('/', async (req,res) => {

    const user = await getUser(req.body.email)
    console.log(user)
    
    res.status(200).json(user)

})

router.post('/create-user',async (req,res) => {

        const createdUser = await createUser(req)

        res.status(201).json(createdUser)

})


module.exports = router