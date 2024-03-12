import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


const Login = () => {
    
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()

    const handleLogin = (event)  => {
        event.preventDefault()
        navigate("/main-page")
    }

    return (
        <Container fluid>
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
                    <Form.Control value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3 d-flex flex-column align-items-center" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3 d-flex flex-column align-items-center" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                    <Button variant="primary" type="submit" onClick={(event) => handleLogin(event)}>
                    Login
                </Button>
                </Form.Group>
            </Form>
        </Row>
    </div>
</Col>

                    </Row>
        </Container>
    )
}

export default Login