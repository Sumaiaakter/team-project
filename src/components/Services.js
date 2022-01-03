import React from 'react';
import { Card, Container } from 'react-bootstrap';
import './Services.css'

const Services = () => {
    return (
        <Container>
            <div className='container text-center m-5'>
                <div>
                    <p >THE PRODUCTS</p>
                    <h2 className='title-left'>Our Services</h2>
                </div>

            </div>
            <div className='row'>
                <div className='col-md-3'>
                    <Card style={{ width: '18rem', borderStyle: "none" }}>
                        <Card.Img className='img'
                            variant="top" src="https://cdn.shopify.com/s/files/1/0301/7274/1770/files/serviceicon1.png?v=1610084829" />
                        <Card.Body>
                            <Card.Title className='text-center'>Free delivery</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>

                    </Card>
                </div>
                <div className='col-md-3'>
                    <Card style={{ width: '18rem', borderStyle: "none" }}>
                        <Card.Img className='img'
                            variant="top" src="https://cdn.shopify.com/s/files/1/0301/7274/1770/files/serviceicon2.png?v=1610084841" />
                        <Card.Body>
                            <Card.Title className='text-center'>Way To Buy</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>

                    </Card>
                </div>
                <div className='col-md-3'>
                    <Card style={{ width: '18rem', borderStyle: "none" }}>
                        <Card.Img className='img'
                            variant="top" src="https://cdn.shopify.com/s/files/1/0301/7274/1770/files/serviceicon3.png?v=1610084856" />
                        <Card.Body>
                            <Card.Title className='text-center'>Personal Session</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>

                    </Card>
                </div>
                <div className='col-md-3'>
                    <Card style={{ width: '18rem', borderStyle: "none" }}>
                        <Card.Img className='img'
                            variant="top" src="https://cdn.shopify.com/s/files/1/0301/7274/1770/files/serviceicon4.png?v=1610084868" />
                        <Card.Body>
                            <Card.Title className='text-center'>Gift Voucher</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>

                    </Card>
                </div>
            </div>
        </Container>
    );
};

export default Services;