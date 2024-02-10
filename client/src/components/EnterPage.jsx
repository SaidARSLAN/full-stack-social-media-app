import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { NavLink } from 'react-router-dom';
import { enterImage } from '../assets';




const EnterPage = () => {


    return (
            <Container fluid>
                  <Row>
                    <Col>
                        <Image  src={`${enterImage}`} width='100px'/>
                    </Col>
                    <Col>
                 <h1>Welcome To MyChat</h1>
                  <Button variant='primary'><NavLink to='/index' style={{color:'white',textDecoration:'none'}}>Let's dive</NavLink></Button>
                    </Col>

                  </Row>
            </Container>
    )

}

export default EnterPage;