//import modules from react and axios
import React, { useEffect, useState } from 'react'
import axios from 'axios';

//import modules from react-bootstrap
import { Container } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

//import components
import ItemCard from '../components/ItemCard';

function Resources() {
  //statate for card data
  const [cardData, setCardData] = useState([])
  const [activeKey, setActiveKey] = useState('resources');
  const [searchData, setSearchData] = useState([])
  const [searchInput, setSearchInput] = useState('');

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
    if (activeKey === 'resources') {
      const data = cardData.filter((element) => {
        return element.tag === 'resource'
      })
      setSearchData(data)
    }
    else if (activeKey === 'request') {
      const data = cardData.filter((element) => {
        return element.tag === 'request'
      })
      setSearchData(data)
    }
    else if (activeKey === 'users') {
      const data = cardData.filter((element) => {
        return element.tag === 'user'
      })
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
    if (searchInput !== "") {
      const data = cardData.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
      })
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
        <div className='container'>
          <ItemCard searchData={searchData} />
        </div>
      </Container>

    </>
  )
}

export default Resources