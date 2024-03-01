import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav'
import {useNavigate,NavLink} from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios'



const LoginPage = () => {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")
    const navigate = useNavigate()
    const [checkEmail,setCheckEmail] = useState(false)
    const [checkPassword, setCheckPassword] = useState(false)
    const [checkConfirmPassword, setCheckConfirmPassword] = useState(false)
    const handleRegisterProcess =  () => {
      if (email !== "" && password !== "" && confirmPassword !== "") {
          if (password == confirmPassword) {
             axios.post("http://localhost:3438/user/create",{
              email: email,
              password:password
            })
            .then(result =>
              {
                console.log(result)
                  setEmail("")
                  setPassword("")
                  navigate('/')
              
                })
              .catch(err => console.log(err.message))
              setCheckEmail(false)
              setCheckPassword(false)
              setCheckConfirmPassword(false)
            }
            else {
                alert("Password and confirm didn't match!")
            }
    }
        if (email != "") {
          setCheckEmail(false)
        }
        if (password != "") {
          setCheckPassword(false)
        }
        if (confirmPassword != "") {
          setCheckConfirmPassword(false)
        }
        if (email == "") {
          setCheckEmail(true)
        }
        if (password == "") {
          setCheckPassword(true)
        }
        if (confirmPassword == "") {
          setCheckConfirmPassword(true)
        }
  }
    return (
            <Container fluid className='h-100'>
                  <Row className='h-100'>
                    <Col className='h-100 main-image'>
                    </Col>
                    <Col xs={8} className='d-flex flex-column justify-content-center'>
                      <h1 className='text-center mb-4'>Register</h1>
                      <Form className='d-flex flex-column align-items-center'>
                      <Form.Group className="mb-3 w-50" controlId="formPlaintextPassword">
                          <Form.Label className='text-center'>
                            Email
                          </Form.Label>
                          <Col>
                            <Form.Control value={email} onChange={e => setEmail(e.target.value)} type="plaintext" placeholder="Email" />
                            <p style={checkEmail ? {color:"red"} : {display:"none"}}>Please write your email</p>
                          </Col>
                        </Form.Group>
                        <Form.Group className="mb-3 w-50" controlId="formPlaintextPassword">
                          <Form.Label className='text-center'>
                            Password
                          </Form.Label>
                          <Col>
                            <Form.Control value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
                            <p style={checkPassword ? {color:"red"} : {display:"none"}}>Please write your password</p>
                          </Col>
                        </Form.Group>
                        <Form.Group className="mb-3 w-50" controlId="formPlaintextPassword">
                          <Form.Label className='text-center'>
                            Password Confirm
                          </Form.Label>
                          <Col>
                            <Form.Control value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} type="password" placeholder="Confirm Password" />
                            <p style={checkConfirmPassword ? {color:"red"} : {display:"none"}}>Please rewrite your password</p>
                          </Col>
                        </Form.Group>
                      <Nav style={{width:"100%",display:"flex","alignItems":'center',justifyContent:"space-around","padding":"0 150px"}}>
                        <Nav.Item>
                      <Button variant='primary' onClick={handleRegisterProcess}>Register</Button>
                        </Nav.Item>
                        <Nav.Item>
                              <Nav.Link><NavLink to="/">Log in <small><p style={{fontSize:"10px"}}>If you already have account</p></small></NavLink></Nav.Link>
                        </Nav.Item>
                      </Nav>
                      </Form>
                    </Col>
                  </Row>
            </Container>
    )

}

export default LoginPage;