const { Posts } = require("../models/posts")




const getPosts = () => {

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



module.exports = {
    getPosts,
}