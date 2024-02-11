const mongoose = require('mongoose')

const userSchema = mongoose.Schema({

    id : Number,
    email : String,
    password : String


})


const User = mongoose.model("User",userSchema)


module.exports = {User}