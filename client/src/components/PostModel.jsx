import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const PostModel = ({title,description,images}) => {




    return (
        <Card style={{ width: '75rem',height:"25rem" }}>
      <Card.Body>
        <Card.Img src={images} />
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary">See detail...</Button>
      </Card.Body>
    </Card>
    )   
}

export default PostModel;