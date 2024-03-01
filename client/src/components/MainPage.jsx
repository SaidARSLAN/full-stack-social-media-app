import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import SearchInput from "./SearchInput"
import SideBar from "./SideBar"
const MainPage = () => {



    return (
                        <Container fluid>
                                <Row style={{height:"100vh"}}>
                                        <Col >
                                        <h1>TravLr</h1>
                                                <SideBar />
                                        </Col>
                                        <Col >
                                        <SearchInput />
                                                MainPage
                                        </Col>
                                        <Col>
                                        <h4>Admin Trust</h4>
                                                Friends
                                        </Col>
                                </Row>
                        </Container>
    )
}

export default MainPage