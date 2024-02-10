const mongoose = require('mongoose')

const postsSchema = mongoose.Schema({

    id : Number,
    title : String,
    description : String,
    like : Number,
    dislike : Number,
    comments : String 


})


const Posts = mongoose.model("Posts",postsSchema)


module.exports = {Posts}