// Purpose: To display the search & tab change results in the form of cards
import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function ItemCard(props) {
    return (
        <>
            <div className='row'>
                {
                    props.searchData.map((element, index,key) => {
                        return (
                            <div className='col col-sm-6 col-md-4 col-lg-4' key={key} >
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
        </>
    )
}

export default ItemCard