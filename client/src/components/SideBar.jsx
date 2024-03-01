import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'




const SideBar = () => {



    return (

        <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link eventKey="link-1">Friends</Nav.Link>
        <Nav.Link eventKey="link-2">Saved</Nav.Link>
        <Nav.Link eventKey="">
            <Button variant='danger'>Logout</Button>
        </Nav.Link>
      </Nav>

    )

}

export default SideBar