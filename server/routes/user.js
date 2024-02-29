const express = require('express')
const { getUser, createUser,loginUser } = require('../controllers/User')
const jwt = require('jsonwebtoken')


const router = express.Router()


router.post('/', async (req,res) => {

    const user = await getUser(req.body.email)
    console.log(user)
    
    res.status(200).json(user)

})

router.post('/create',async (req,res) => {

        const createdUser = await createUser(req)

        res.status(201).json(createdUser)

})

router.post('/login',async (req,res) => {

    let isSuccess = await loginUser(req)
    if (isSuccess) {

        const token =   jwt.sign({email:isSuccess.email},'secret',{
            expiresIn : '1h'
        })
        
        res.json({token})
    }
    else {
        res.json("INVALID ACCESS")
    }
})


module.exports = router