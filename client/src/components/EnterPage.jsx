import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios'



const EnterPage = () => {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [token,setToken] = useState("");
    const navigate = useNavigate()
    const handleLoginProcess = async () => {
      await axios.post("http://localhost:3438/user/login",{
      email: email,
      password:password
      })
      .then(result => 
        {
          setToken(result)
          if (result.data !== "INVALID ACCESS") {
            setEmail("")
            setPassword("")
            navigate('/index')
          }
        })
      .catch(err => console.log(err.message))
    }

    return (
            <Container fluid className='h-100'>
                  <Row className='h-100'>
                    <Col className='h-100 main-image'>
                    </Col>
                    <Col xs={8} className='d-flex flex-column justify-content-center'>
                      <h1 className='text-center mb-4'>Login</h1>
                      <Form className='d-flex flex-column align-items-center'>
                      <Form.Group className="mb-3 w-50" controlId="formPlaintextPassword">
                          <Form.Label className='text-center'>
                            Email
                          </Form.Label>
                          <Col>
                            <Form.Control value={email} onChange={e => setEmail(e.target.value)} type="plaintext" placeholder="Email" />
                          </Col>
                        </Form.Group>
                        <Form.Group className="mb-3 w-50" controlId="formPlaintextPassword">
                          <Form.Label className='text-center'>
                            Password
                          </Form.Label>
                          <Col>
                            <Form.Control value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
                          </Col>
                        </Form.Group>
                      <Button variant='primary' onClick={handleLoginProcess} className='w-20'>Login</Button>
                      </Form>
                    </Col>
                  </Row>
            </Container>
    )

}

export default EnterPage;