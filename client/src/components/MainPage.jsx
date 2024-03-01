import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import SearchInput from "./SearchInput"
const MainPage = () => {



    return (
                        <Container fluid>
                                <Row style={{height:"100vh"}}>
                                        <Col style={{backgroundColor:"yellow"}}>
                                        <h1>TravLr</h1>
                                                sidebar
                                        </Col>
                                        <Col style={{backgroundColor:"green"}}>
                                        <SearchInput />
                                                MainPage
                                        </Col>
                                        <Col style={{backgroundColor:"blue"}}>
                                        <h4>Admin Trust</h4>
                                                Friends
                                        </Col>
                                </Row>
                        </Container>
    )
}

export default MainPage