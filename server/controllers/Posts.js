const { Posts } = require("../models/posts")




const getPost = () => {

    return Posts.find({})
    .then(Posts => {

            if (Posts) {
                return Posts
            }
            else {
                return "There is no posts!"
            }

    })
    .catch(error => {

        console.log("Posts Error #", error.message)

    })

}

const createPost = (req) => {
    const post = new Posts({

        id : req.body.id,
        title : req.body.title,
        description : req.body.description,
        like : req.body.like,
        dislike : req.body.dislike,
        comments : req.body.comments

   })

   return post.save()
   .then(result => result)
   .catch(err => err)

}
const createAllPost = (data) => {
    const post = new Posts({

        id : data.id,
        title : data.title,
        description : data.description,
        like : data.like,
        dislike : data.dislike,
        comments : data.comments,
        images : data.images,
   })

   return post.save()
   .then(result => result)
   .catch(err => err)

}


module.exports = {
    getPost,
    createPost,
    createAllPost
}