import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import SearchInput from "./SearchInput"
import SideBar from "./SidarBar"
import MainSection from "./MainSection"
import { useSelector } from "react-redux"

const MainPage = () => {
        const username = useSelector(state => state.user.user)


    return (
                        <Container fluid className="main-page-container"> 
                                <Row style={{height:"100vh"}}>
                                        <Col className="sidebar-column">
                                        <h1 className="main-logo">TravLr</h1>
                                                <SideBar />
                                        </Col>
                                        <Col xs={8}>
                                        <SearchInput />
                                                <MainSection />
                                        </Col>
                                        <Col className="main-page-right-bar">
                                        <h4>{username && username}</h4>
                                                Friends
                                        </Col>
                                </Row>
                        </Container>
    )
}

export default MainPage