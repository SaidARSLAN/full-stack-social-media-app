import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
const MainPage = () => {



    return (
                        <Container fluid>
                                <Row>
                                        <Col>Logo</Col>
                                        <Col>Search</Col>
                                        <Col>Profile Info</Col>
                                </Row>
                                <Row style={{height:"100vh"}}>
                                        <Col>SideBar</Col>
                                        <Col>MainPage</Col>
                                        <Col>Friends</Col>
                                </Row>
                        </Container>
    )
}

export default MainPage