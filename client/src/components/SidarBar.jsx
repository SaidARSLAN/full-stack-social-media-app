import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Nav from 'react-bootstrap/Nav'
import {faHouse,faUser,faShoppingBag,faGear,faRightToBracket,faUserGroup} from '@fortawesome/free-solid-svg-icons'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


const SideBar = () => {



    return (
        
        <Nav defaultActiveKey="/home" className="flex-column sidebar">
            <Container className='inside-sidebar'>
            <Row>
      <Nav.Link href="/home"><FontAwesomeIcon icon={faHouse}></FontAwesomeIcon> Main Page</Nav.Link>
      <Nav.Link eventKey="link-1"><FontAwesomeIcon icon={faUser}></FontAwesomeIcon> My Profile</Nav.Link>
      <Nav.Link eventKey="link-2"><FontAwesomeIcon icon={faUserGroup}></FontAwesomeIcon> Friends</Nav.Link>
      <Nav.Link eventKey="link-2"><FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon> Buy</Nav.Link>
      <Nav.Link eventKey="link-2"><FontAwesomeIcon icon={faGear}></FontAwesomeIcon> Settings</Nav.Link>
            </Row>
            <Row>
      <Nav.Link eventKey="link-2"><FontAwesomeIcon icon={faRightToBracket}  className='sidebar-logout'></FontAwesomeIcon> Logout</Nav.Link>
            </Row>
        </Container>
    </Nav>

    )
}

export default SideBar