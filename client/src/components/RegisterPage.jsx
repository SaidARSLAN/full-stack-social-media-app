import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import {useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios'



const LoginPage = () => {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [username,setUsername] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")
    const navigate = useNavigate()
    const [checkEmail,setCheckEmail] = useState(false)
    const [checkPassword, setCheckPassword] = useState(false)
    const [checkConfirmPassword, setCheckConfirmPassword] = useState(false)
    const [checkUsername, setCheckUsername] = useState(false)
    const handleRegisterProcess =  () => {
      if (email !== "" && password !== "" && confirmPassword !== "") {
          if (password == confirmPassword) {
             axios.post("http://localhost:3438/user/create",{
              username : username,
              email: email,
              password:password
            })
            .then(result =>
              {
                console.log(result)
                  setUsername("")
                  setEmail("")
                  setPassword("")
                  navigate('/')
              
                })
              .catch(err => console.log(err.message))
              setCheckUsername(false)
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
        if (username != "") {
          setCheckUsername(false)
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
        if (username == "") {
          setCheckUsername(true)
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
                            Username
                          </Form.Label>
                          <Col>
                            <Form.Control value={username} onChange={e => setUsername(e.target.value)} type="plaintext" placeholder="Username" />
                            <p style={checkUsername ? {color:"red"} : {display:"none"}}>Please write your username</p>
                          </Col>
                        </Form.Group>  
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
                      <Button variant='primary' onClick={handleRegisterProcess} className='w-20'>Register</Button>
                      </Form>
                    </Col>
                  </Row>
            </Container>
    )

}

export default LoginPage;