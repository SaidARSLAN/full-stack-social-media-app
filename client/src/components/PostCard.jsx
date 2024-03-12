import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { FaComment } from "react-icons/fa";

    

const PostCard = ({post}) => {


    return (
        <Card>
        <Card.Img variant="top" src={post.images} />
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>
          {post.description}
        </Card.Text>
            <AiFillLike size={30}/>
            <AiFillDislike size={30}/>
            <Container fluid className='mt-4'>
            <FaComment size={30} className='m-0 p-0'/>
            </Container>
          </Card.Body>
    </Card>
    )
}

export default PostCard