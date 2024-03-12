import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { FaHome, FaLeaf } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
import { BsPeopleFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LOG_OUT } from '../store/user';
import Spinner from 'react-bootstrap/Spinner';
import { useState } from 'react';


const SideBar = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [logOut,setLogOut] = useState(false)
    const handleLogOut = () => {
        dispatch(LOG_OUT())
        setLogOut(true)
        setTimeout(() => {
            navigate("/login")
        },2000)
    }
    return (
        <Nav defaultActiveKey="/home" className="flex-column position-sticky top-0 pt-4  justify-content-between" style={{height:"100vh"}}>
                    <Container>
                    <h1 className='sidebar-title text-warning'>TravLr</h1>
                    <Nav.Link><FaHome /> Home</Nav.Link>
                    <Nav.Link><IoPerson /> Profile</Nav.Link>
                    <Nav.Link><TiMessages /> Messages</Nav.Link>
                    <Nav.Link><BsPeopleFill /> Friends</Nav.Link>
                    <Nav.Link><IoSettings/> Settings</Nav.Link>
                    </Container>
                    <Container>
                    {logOut ? <Spinner animation='grow' size='md' variant='warning'/> : <Nav.Link onClick={handleLogOut}><MdOutlineLogout /> Logout</Nav.Link>}
                    </Container>
                    </Nav>
    )
}

export default SideBar