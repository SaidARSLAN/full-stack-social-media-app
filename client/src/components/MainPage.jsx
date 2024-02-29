import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
const MainPage = () => {



    return (
                        <Container fluid>
                                <Row>
                                        <Col>
                                                <h1>TravLr</h1>
                                        </Col>
                                        <Col>
                                        
                                                        <input></input>
                                                        <button>Search</button>

                                        </Col>
                                        <Col>
                                                <h4>Admin Trust</h4>
                                        </Col>
                                </Row>
                                <Row style={{height:"100vh"}}>
                                        <Col style={{backgroundColor:"yellow"}}>
                                                sidebar
                                        </Col>
                                        <Col style={{backgroundColor:"green"}}>
                                                MainPage
                                        </Col>
                                        <Col style={{backgroundColor:"blue"}}>

                                                Friends

                                        </Col>
                                </Row>
                        </Container>
    )
}

export default MainPage