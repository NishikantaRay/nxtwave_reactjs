// This file contains the code for the create item page
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './createItem.css'

//import modules from react-bootstrap
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//import assets
import imgBg from '../assets/backgroundImg.jpg'

//import from react-toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//import from axios
import axios from 'axios';

function CreateItem() {

  const navigate = useNavigate();

  const [details, setDetails] = useState({
    title: '',
    iconUrl: '',
    link: '',
    tagName: '',
    category: '',
    description: ''
  })

  // handle submit for the form
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/resources')
  }

  // handle change for the form
  const inputHandler = (category, value) => {
    setDetails({ ...details, [category]: value })
  }

  // handle submit for the form
  const handleSubmitForm = (e) => {
    e.preventDefault()
    if (details.title === '' || details.iconUrl === '' || details.link === '' || details.tagName === '' || details.category === '' || details.description === '') {
      toast.error("Form field cannot be empty!", {
        position: toast.POSITION.BOTTOM_CENTER
      });
    } else if (details.link.match(/^(ftp|http|https):\/\/[^ "]+$/) === null) {
      toast.error("Invalid URL", {
        position: toast.POSITION.BOTTOM_CENTER
      });

    } else if (details.iconUrl.match(/^(ftp|http|https):\/\/[^ "]+$/) === null) {
      toast.error("Invalid ICON URL", {
        position: toast.POSITION.BOTTOM_CENTER
      });
    } else if (details.tagName !== 'User' && details.tagName !== 'Resources' && details.tagName !== 'Request') {
      toast.error("Invalid Tag Name", {
        position: toast.POSITION.BOTTOM_CENTER
      });
    }
    else if (details.title.length < 3) {
      toast.error("Title should be atleast 3 characters long", {
        position: toast.POSITION.BOTTOM_CENTER
      });
    } else if (details.category.length < 3) {
      toast.error("Category should be atleast 3 characters long", {
        position: toast.POSITION.BOTTOM_CENTER
      });
    } else if (details.description.length < 3) {
      toast.error("Description should be atleast 3 characters long", {
        position: toast.POSITION.BOTTOM_CENTER
      });
    }
    else {
      axios.post('https://media-content.ccbp.in/website/react-assignment/add_resource.json', details)
        .then(res => {
          toast.success("Items details saved Successfully", {
            position: toast.POSITION.BOTTOM_CENTER
          });
        })
        .catch(err => {
          console.log(err)
          toast.error("Something went wrong", {
            position: toast.POSITION.BOTTOM_CENTER
          });
        })
    }
  }

  return (
    <>
      <Container>
        <a href='' onClick={(e) => handleSubmit(e)}> go to users</a><br /><br />
        <Row>
          <Col md={6} sm={12}>
            <h1 className='loginHeader'>ITEM DETAILS</h1>
            <Form style={{ backgroundColor: "aliceblue", padding: "50px" }} onSubmit={(e) => handleSubmitForm(e)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Item Title</Form.Label>
                <Form.Control type="text" placeholder="Enter Item Title"
                  onChange={(e) => inputHandler('title', e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Icon Url</Form.Label>
                <Form.Control type="text" placeholder="Enter Icon Url"
                  onChange={(e) => inputHandler('iconUrl', e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Link</Form.Label>
                <Form.Control type="text" placeholder="Enter Link"
                  onChange={(e) => inputHandler('link', e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Tag Name</Form.Label>
                <Form.Select aria-label="Default select example"
                  onChange={(e) => inputHandler('tagName', e.target.value)}
                >
                  <option>Open this select menu</option>
                  <option value="User">User</option>
                  <option value="Resources">Resources</option>
                  <option value="Request">Request</option>
                </Form.Select></Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Category</Form.Label>
                <Form.Control type="text" placeholder="Enter Category"
                  onChange={(e) => inputHandler('category', e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter Description"
                  onChange={(e) => inputHandler('description', e.target.value)}
                />
              </Form.Group>
              <ToastContainer />
              <Button variant="primary" type="submit">
                Create
              </Button>
            </Form>
          </Col>
          <Col md={6} sm={12}>
            <br />
            <br />
            <img height={700} width={600} src={imgBg} alt="" />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default CreateItem