
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { SET_USER } from '../store/user'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

const MainPage = () => {

    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    useEffect(() => {
        const storedUser = localStorage.getItem('user')
        if (storedUser) {
            dispatch(SET_USER(JSON.parse(storedUser)))
        }
    },[dispatch])
    return (
        <Container fluid>
            <Row style={{height:"2000px"}}>
                <Col>
                <Nav defaultActiveKey="/home" className="flex-column position-sticky top-0">
                    <Nav.Link href="/home">Active</Nav.Link>
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                    <Nav.Link eventKey="disabled" disabled>
                        Disabled
                    </Nav.Link>
                    </Nav>
                </Col>
                <Col>
                    Middle
                </Col>
                <Col>
                    leftbar
                </Col>
            </Row>
        </Container>
    )
    
}

export default MainPage;