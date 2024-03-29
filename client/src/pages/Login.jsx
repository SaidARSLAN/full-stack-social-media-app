import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { fetchUser } from '../store/user';
import {useDispatch, useSelector} from 'react-redux'
import ErrorModal from '../modals/error';
import Spinner from 'react-bootstrap/Spinner';

const Login = () => {
    
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const dispatch = useDispatch()
    const user = useSelector(state=>state.user)

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

    useEffect(() => {

        if (user.status === "succeeded") {
            localStorage.clear()
            localStorage.setItem('user',JSON.stringify({email,password,username:user.username}))
            setTimeout(() => {
                navigate("/main-page")
            },3000)
        }
        if (user.status === "failed") {
            handleShow()
            setEmail("")
            setPassword("")
        }

    },[user])
    const navigate = useNavigate()
    
    const handleLogin = (event)  => {
        event.preventDefault()
        dispatch(fetchUser({email,password}))
        
    }

    return (
        <Container fluid className='h-100'>
            <Row className='h-100'>
                    <Col className='login-image'>
                            
                    </Col>
                    <Col className='d-flex align-items-center justify-content-center w-100'>
    <div style={{width:"100%"}} className='mx-auto'> 
        <Row>
            <h1 className='text-center'>Login</h1>
        </Row>
        <Row className='w-100'>
            <Form>
                <Form.Group className="mb-3 d-flex flex-column align-items-center" controlId="formBasicEmail">
                    <Form.Control value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter email" className='form-control-login'/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3 d-flex flex-column align-items-center" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className='form-control-login'/>
                </Form.Group>
                <Form.Group className="mb-3 d-flex flex-column align-items-center" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                    {user.status === "succeeded" ? <Spinner animation='grow' size='md' variant='primary'/> : 
                    <Button variant="primary" type="submit" onClick={(event) => handleLogin(event)} style={{width:"25%",height:"40px"}}>
                    Login
                </Button>}
                </Form.Group>
            </Form>
        </Row>
    </div>
</Col>

                    </Row>
                {show && <ErrorModal show={show} setShow={setShow}/>}
        </Container>
    )
}

export default Login