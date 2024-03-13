import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from 'react-bootstrap/Image'
import {useSelector} from 'react-redux'

const LeftBar = () => {

    const user = useSelector(state => state.user.user)
    return (
        <Container className="mx-4 mt-2">
      <Row>
        <Col xs={2}>
          <Image src="https://cdn.pixabay.com/photo/2021/01/14/17/53/man-5917530_1280.jpg" className="leftbar-image" />
        </Col>
        <Col xs={10}>
                <h4>{user?.email}</h4>
        </Col>
      </Row>
    </Container>
    )
}

export default LeftBar;