import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { FaComment } from "react-icons/fa";

    

const PostCard = ({post}) => {

    const [like,setLike] = useState(false)
    const [dislike,setDislike] = useState(false)

    const handleClick = (payload) => {

        switch(payload) {
            case "like":
                if (like) {
                    setLike(false)
                }
                else {
                    setLike(true)
                    setDislike(false)
                }
                return
            case "dislike":
                if (dislike) {
                    setDislike(false)
                }
                else {
                    setLike(false)
                    setDislike(true)
                }
                return
        }

    }

    return (
        <Card>
        <Card.Img variant="top" src={post.images} />
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>
          {post.description}
        </Card.Text>
            <AiFillLike size={30} className='icon' style={like ? {color:"rgb(121, 167, 235)"} : ""} onClick={() => handleClick("like")}/>
            <AiFillDislike size={30} className='icon' style={dislike ? {color:"rgb(240, 62, 62)"} : ""}  onClick={() => handleClick("dislike")}/>
            <FaComment size={30} className='m-0 p-0 icon'/>
          </Card.Body>
    </Card>
    )
}

export default PostCard