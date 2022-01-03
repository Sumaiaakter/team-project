import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './LatestProducts.css'

const LatestProducts = () => {
    return (
        <Container className='my-6'>
            <div className="banner mt-5px">
                <div className='container text-center m-5'>
                    <div>
                        <p className='trend' >THE Latest</p>
                        <h2 className='title-left'>Fabolous Products</h2>
                    </div>

                </div>
                <Row xs={1} md={3} className="g-4">

                    <Col>
                        <Card>
                            <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0301/7274/1770/products/Cosmetic3_c2f965a7-7057-45ac-8b1b-804bd10adfca_720x.png?v=1610003571" />
                            <Card.Body>
                                <Card.Title className='title'>Pencil Eyeliner</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0301/7274/1770/products/Cosmetic2_37a36615-de25-4223-8f5c-7bb439541072_720x.png?v=1610003448" />
                            <Card.Body>
                                <Card.Title className='title'>Dior Lip Glow</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0301/7274/1770/products/Cosmetic3_c2f965a7-7057-45ac-8b1b-804bd10adfca_720x.png?v=1610003571" />
                            <Card.Body>
                                <Card.Title className='title'>Collagen Spray</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>

                <div className='container text-center m-5'>
                    <button className='btn text-center'>View All</button>

                </div>
            </div>

        </Container>
    );
};

export default LatestProducts;