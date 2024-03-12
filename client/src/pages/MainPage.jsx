
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { SET_USER } from '../store/user'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SideBar from '../components/SideBar';
import MiddlePlace from '../components/MiddlePlace';

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
                    <SideBar />
                </Col>
                <Col xs={8}>
                    <MiddlePlace />
                </Col>
                <Col>
                    leftbar
                </Col>
            </Row>
        </Container>
    )
    
}

export default MainPage;