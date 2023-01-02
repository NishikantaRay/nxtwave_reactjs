
//import from react-bootstrap
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

//import from react-redux and react
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

//import from actions
import { login } from '../../actions/index';
import './LoginForm.css'

function LoginForm() {
    // state for the form
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')

    // dispatch for the form
    const dispatch = useDispatch();

    // handle submit for the form
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login({ phoneNumber, password }))
        // reset the form
        setPhoneNumber('')
        setPassword('')
    }
    return (
        <>
            <Row>
                <Col md={4}>
                </Col>
                <Col md={4} className="loginform">
                    <h1 className='loginHeader'>LOGIN</h1>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Enter your phone Number" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your Password" />
                        </Form.Group>
                        <div className="text-center"><Button variant="primary" onClick={(e) => handleSubmit(e)} type="submit">
                            SUBMIT
                        </Button></div>
                        
                    </Form>
                </Col>
                <Col md={4}>
                </Col>
            </Row>

        </>
    )
}

export default LoginForm