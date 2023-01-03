
//import from react-bootstrap
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

//import from react-redux and react
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
//import from actions
import { login,getApiData } from '../../actions/index';
import './LoginForm.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import from axios
import axios from 'axios';
function LoginForm() {
    // state for the form
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')

    // dispatch for the form
    const dispatch = useDispatch();

    const getApiDataHandler = () => {
        
        axios.get('https://media-content.ccbp.in/website/react-assignment/resources.json')
            .then((response) => {
                dispatch(getApiData(response.data))
            })
            .catch((error) => {
                console.log(error)
            })
        
    }
    const navigate =useNavigate();
    // handle submit for the form
    const handleSubmit = (e) => {
        e.preventDefault()
        if(phoneNumber === '' || password === ''){
            toast.error("Form field cannot be empty!", {
                position: toast.POSITION.BOTTOM_CENTER
            });
        }else if(phoneNumber.length < 10){
            toast.error("Phone Number should be atleast 10 characters long", {
                position: toast.POSITION.BOTTOM_CENTER
            });
        }else if(password.length < 6){
            toast.error("Password should be atleast 6 characters long", {
                position: toast.POSITION.BOTTOM_CENTER
            });
        }
        else if(phoneNumber.match(/^[0-9]+$/) === null){
            toast.error("Phone Number should be a number", {
                position: toast.POSITION.BOTTOM_CENTER
            });
        }
        else{
        
        dispatch(login({ phoneNumber, password }))
        // reset the form
        setPhoneNumber('')
        setPassword('')
        getApiDataHandler()
        navigate('/resources')
        }
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
                            <Form.Control type="text" maxLength={10} value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Enter your phone Number" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your Password" />
                        </Form.Group>
                        <ToastContainer />
                        <div className="text-center"><Button variant="primary" disabled={!phoneNumber&&!password} onClick={(e) => handleSubmit(e)} type="submit">
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