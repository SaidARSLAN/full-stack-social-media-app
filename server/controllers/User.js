const {User} = require('../models/user')


const getUser = (email) => {

    return User.find({email:email})
    .then(user => {
        if (user) {
            return user
        }
        else {
            return "User Couldn't Find!"
        }
    })
    .catch(error => {
        console.log("User Error#",error.message)
    })

}

const createUser = (req) => {

    const user = new User({

        email : req.body.email,
        username : req.body.username,
        password : req.body.password

   })

   return user.save()
   .then(result => result)
   .catch(err => err)

}

const loginUser = (req) => {

    const {email,password} = req.body

    return User.findOne({email:email,password:password})
    .then(result => result)
    .catch((err) => {
        console.log(err.message)
        return null}
        )

}

module.exports = {
    getUser,
    createUser,
    loginUser
}