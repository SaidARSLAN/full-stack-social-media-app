import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { useEffect, useState } from 'react';
import axios from 'axios'
import { SAVE_USERNAME } from '../store/user';



const LoginPage = () => {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [token,setToken] = useState("");
    const navigate = useNavigate()
    const [checkEmail,setCheckEmail] = useState(false)
    const [checkPassword, setCheckPassword] = useState(false)
    const dispatch = useDispatch()
    const handleLoginProcess = async () => {
      if (email !== "" && password !== "") {
      await axios.post("http://localhost:3438/user/login",{
      email: email,
      password:password
      })
      .then(result => 
        {
          setToken(result.data.token)
          if (result.data !== "INVALID ACCESS") {
            setEmail("")
            setPassword("")
            navigate('/index')
            dispatch(SAVE_USERNAME(result.data.isSuccess.username))
          }
          else {
            alert(result.data)
          }
        })
      .catch(err => console.log(err.message))
      setCheckEmail(false)
      setCheckPassword(false)
    }
    else {
        console.log(email)
        if (email == "" && password ==""){
          setCheckEmail(true)
          setCheckPassword(true)
        }
        else if (email == "") {
          setCheckEmail(true)
        }
        else if (password == "") {
          setCheckPassword(true)
        }
        else {
          
        }
    }
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
                      <Button variant='primary' onClick={handleLoginProcess} className='w-20'>Login</Button>
                      </Form>
                    </Col>
                  </Row>
            </Container>
    )

}

export default LoginPage;