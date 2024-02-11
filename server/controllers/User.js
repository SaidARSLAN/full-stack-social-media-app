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

        id : req.body.id,
        email : req.body.email,
        password : req.body.password

   })

   return user.save()
   .then(result => result)
   .catch(err => err)

}

module.exports = {
    getUser,
    createUser
}