import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import ErrorModal from '../modals/error';
import Spinner from 'react-bootstrap/Spinner';
import { createUser } from '../store/user';
import { useDispatch, useSelector } from 'react-redux';
const Register = () => {
    
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [username,setUsername] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")
    const dispatch = useDispatch()
    

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

    const user = useSelector(state => state.user)
    const navigate = useNavigate()


    useEffect(() => {

        if (user.registerStatus == "succeeded") {
            console.log(user)
            setTimeout(() => {
                navigate("/login")
            },3000)
        }

    },[user,dispatch])


    const handleRegister = (event)  => {
        dispatch(createUser({email:email,password:password,username:username}))   
        event.preventDefault()
    }
    return (
        <Container fluid className='h-100'>
            <Row className='h-100'>
                    <Col className='login-image'></Col>
                    <Col className='d-flex align-items-center justify-content-center w-100'>
    <div style={{width:"100%"}} className='mx-auto'> 
        <Row>
            <h1 className='text-center'>Register</h1>
        </Row>
        <Row className='w-100'>
            <Form>
            <Form.Group className="mb-3 d-flex flex-column align-items-center" controlId="formBasicEmail">
                    <Form.Control value={username} onChange={e => setUsername(e.target.value)} type="email" placeholder="Username" className='form-control-login'/>
                </Form.Group>
                <Form.Group className="mb-3 d-flex flex-column align-items-center" controlId="formBasicEmail">
                    <Form.Control value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter email" className='form-control-login'/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3 d-flex flex-column align-items-center" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className='form-control-login'/>
                </Form.Group>
                <Form.Group className="mb-3 d-flex flex-column align-items-center" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} className='form-control-login'/>
                </Form.Group>
                <Form.Group className="mb-3 d-flex flex-column align-items-center" controlId="formBasicCheckbox">
                {user.registerStatus === "succeeded" ? <Spinner animation='grow' size='md' variant='primary'/> : 
                    <Button variant="primary" type="submit" onClick={(event) => handleRegister(event)} style={{width:"25%",height:"40px"}}>
                    Register
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

export default Register