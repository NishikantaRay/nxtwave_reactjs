import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
function Resources() {
  const [cardData, setCardData] = useState([])
  // const data = useSelector(state => state.api.api)
  // const [cardData, setCardData] = useState(data[0])
  const [activeKey, setActiveKey] = useState('resources');
  // useEffect(() => {
  //   setCardData(data[0])
  // }, [data])
//   const dataFilter = () => {
//     if(cardData.length>1){
      
//       if (activeKey === 'resources') {
//         const data=cardData.filter((element) => {
//            return element.tag === 'resource'
//          })
//          setCardData(data)
//          console.log(data,activeKey);
//        }
//        else if (activeKey === 'request') {
//          const data=cardData.filter((element) => {
//            return element.tag === 'request'
//          })
//          setCardData(data)
//          console.log(data,activeKey);
         
//        }
//        else if (activeKey === 'users') {
//          const data=cardData.filter((element) => {
//            return element.tag === 'user'
//          })
//          setCardData(data)
//          console.log(data,activeKey);
//        }

//     }
    
//   }
//   useEffect(() => {
//  dataFilter();
//   }, [activeKey])

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
  const handleSelect = (key) => {
    setActiveKey(key)
  }
  console.log(activeKey);
  const [searchData, setSearchData] = useState([])
  const [searchInput, setSearchInput] = useState('');
  const dataFilter = () => {
    if (activeKey === 'resources') {
      const data = cardData.filter((element) => {
        return element.tag === 'resource'
      })
      setSearchData(data)
      console.log(data, activeKey);
    }
    else if (activeKey === 'request') {
      const data = cardData.filter((element) => {
        return element.tag === 'request'
      })
      setSearchData(data)
      console.log(data, activeKey);

    }
    else if (activeKey === 'users') {
      const data = cardData.filter((element) => {
        return element.tag === 'user'
      })
      setSearchData(data)
      console.log(data, activeKey);
    }else{
      setSearchData(cardData)
    }
  }
  useEffect(() => {
    dataFilter();
  }, [activeKey])
  console.log(searchData);
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
          style={{ backgroundColor: "aliceblue", width: "50%",marginLeft:"25%" }}
        >
          <Tab eventKey="resources"    title="Resources">

          </Tab>
          <Tab eventKey="request"  title="Requests">

          </Tab>
          <Tab eventKey="users"  title="Users">

          </Tab>

        </Tabs>
        
       
        <div className="form-group m-5 search-inp" style={{width:"50%"}}>
      <input type="text" className="form-control item" id="search" placeholder="Search..."
        onChangeCapture={(e) => {
          searchItems(e.target.value);
        }}
      /></div>
        <div className='container'>
          <div className='row'>
          {
                    searchData.map((element, index) => {
                      return (
                        <div className='col col-sm-6 col-md-4 col-lg-4' >
                        <div id="divLogin" className="m-3 bgImage panel-body-appointment1 d-flex justify-content-center">
                          <div className="m-2" style={{ width: "25rem", height: "15 rem" }} >
                            
                                  <Link className='text-decoration-none text-dark'>
                                    <Card style={{ width: '100%', height: '15rem',backgroundColor: "aliceblue" }}>
                                     
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
          
                      )})}
           
          </div>
        </div>
      </Container>

    </>
  )
}

export default Resources