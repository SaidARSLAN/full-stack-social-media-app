const mongoose = require('mongoose')

const userSchema = mongoose.Schema({

    id : Number,
    username : String,
    email : String,
    password : String


})


const User = mongoose.model("User",userSchema)


module.exports = {User}