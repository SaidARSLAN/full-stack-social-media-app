import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Nav from 'react-bootstrap/Nav'
import {faHouse,faUser,faShoppingBag,faGear,faRightToBracket,faUserGroup} from '@fortawesome/free-solid-svg-icons'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { NavLink } from 'react-router-dom'


const SideBar = () => {



    return (
        
        <Nav defaultActiveKey="/home" className="flex-column sidebar" style={{position:"relative"}}>
            <Container className='inside-sidebar' style={{position:"sticky"}}>
            <Row>
      <NavLink to="/"><Nav.Link><FontAwesomeIcon icon={faHouse}></FontAwesomeIcon> Main Page</Nav.Link></NavLink>
      <NavLink><Nav.Link eventKey="link-1"><FontAwesomeIcon icon={faUser}></FontAwesomeIcon> My Profile</Nav.Link></NavLink>
      <NavLink><Nav.Link eventKey="link-2"><FontAwesomeIcon icon={faUserGroup}></FontAwesomeIcon> Friends</Nav.Link></NavLink>
      <NavLink><Nav.Link eventKey="link-2"><FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon> Buy</Nav.Link></NavLink>
      <NavLink><Nav.Link eventKey="link-2"><FontAwesomeIcon icon={faGear}></FontAwesomeIcon> Settings</Nav.Link></NavLink>
            </Row>
            <Row>
            <NavLink><Nav.Link eventKey="link-2"><FontAwesomeIcon icon={faRightToBracket}  className='sidebar-logout'></FontAwesomeIcon> Logout</Nav.Link></NavLink>
            </Row>
        </Container>
    </Nav>

    )
}

export default SideBar