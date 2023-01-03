//import modules from react and axios
import React, { useEffect, useState } from 'react'
import axios from 'axios';

//import modules from react-bootstrap
import { Container } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import { LoadingOverlay, Loader } from 'react-overlay-loader';
 
import 'react-overlay-loader/styles.css';

function Resources() {
  //statate for card data
  const [cardData, setCardData] = useState([])
  const [activeKey, setActiveKey] = useState('resources');
  const [searchData, setSearchData] = useState([])
  const [searchInput, setSearchInput] = useState('');
  const [loading, setLoading] = useState(false);

  //api call to get the data
  useEffect(() => {
    axios.get('https://media-content.ccbp.in/website/react-assignment/resources.json')
      .then((response) => {
        setCardData(response.data)
        setSearchData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  //handle select for the tabs
  const handleSelect = (key) => {
    setActiveKey(key)
  }

  //filter the data based on the active key
  const dataFilter = () => {
    setLoading(true)
    if (activeKey === 'resources') {
      const data = cardData.filter((element) => {
        return element.tag === 'resource'
      })
      setInterval(() => setLoading(false), 2000);
      setSearchData(data)
    }
    else if (activeKey === 'request') {
      const data = cardData.filter((element) => {
        return element.tag === 'request'
      })
      setInterval(() => setLoading(false), 2000);
      setSearchData(data)
    }
    else if (activeKey === 'users') {
      const data = cardData.filter((element) => {
        return element.tag === 'user'
      })
      setInterval(() => setLoading(false), 2000);
      setSearchData(data)
    } else {
      setSearchData(cardData)
    }
  }

  useEffect(() => {
    dataFilter();
  }, [activeKey])

  //search function
  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    setLoading(true)
    if (searchInput !== "") {
      const data = cardData.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
      })
      setInterval(() => setLoading(false), 3000);
      setSearchData(data)
    }
    else {
      setSearchData(cardData)
    }
  }

  return (
    <>
      <Container>
        <Tabs
          defaultActiveKey="users"
          id="justify-tab-example"
          className="mb-3"
          justify
          onSelect={(k) => handleSelect(k)}
          style={{ backgroundColor: "aliceblue", width: "50%", marginLeft: "25%" }}
        >
          <Tab eventKey="resources" title="Resources">
          </Tab>
          <Tab eventKey="request" title="Requests">
          </Tab>
          <Tab eventKey="users" title="Users">
          </Tab>
        </Tabs>


        <div className="form-group m-5 search-inp" style={{ width: "50%" }}>
          <input type="text" className="form-control item" id="search" placeholder="Search..."
            onChangeCapture={(e) => {
              searchItems(e.target.value);
            }}
          /></div>
          <LoadingOverlay > 
          <div className='container'>
        <div className='row'>
          
          {searchData.map((element) => {
                        return (
                            <div className='col col-sm-6 col-md-4 col-lg-4' >
                                <div id="divLogin" className="m-3 bgImage panel-body-appointment1 d-flex justify-content-center">
                                    <div className="m-2" style={{ width: "25rem", height: "15 rem" }} >
                                        <Link className='text-decoration-none text-dark'>
                                            <Card style={{ width: '100%', height: '15rem', backgroundColor: "aliceblue" }}>
                                                <Card.Body >
                                                    <Card.Title>
                                                        <img src={element.icon_url} width={50} height={50} className="mr-5 mx-auto card-img-sm text-right" alt="Request icon" />
                                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                                        {element.title}
                                                    </Card.Title>
                                                    <Card.Text className='mt-4'>
                                                        <a target="_blank" href="{element.link}" className='text-decoration-none'>{element.link}</a>
                                                    </Card.Text>
                                                    <Card.Text className='mt-1'>
                                                        {element.description}
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        )
                    })}

            </div>
        </div>
            <Loader loading={loading}/>
        </LoadingOverlay>
        
      </Container>

    </>
  )
}

export default Resources