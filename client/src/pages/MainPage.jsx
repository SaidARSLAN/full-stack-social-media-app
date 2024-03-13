
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { SET_USER } from '../store/user'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SideBar from '../components/SideBar';
import MiddlePlace from '../components/MiddlePlace';
import LeftBar from '../components/LeftBar';

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
            <Row className='main-page-row'>
                <Col className='sidebar-col'>
                    <SideBar />
                </Col>
                <Col lg={6} xs={12}>
                    <MiddlePlace />
                </Col>
                <Col>
                    <LeftBar />
                </Col>
            </Row>
        </Container>
    )
    
}

export default MainPage;