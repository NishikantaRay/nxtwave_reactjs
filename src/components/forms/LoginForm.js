import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react'
import {useDispatch} from 'react-redux';
import {login} from '../../actions/index';
function LoginForm() {
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login({ phoneNumber, password }))


    }
    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} placeholder="Enter your phone Number" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your Password" />
                </Form.Group>
                <Button variant="primary" onClick={(e)=>handleSubmit(e)} type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default LoginForm