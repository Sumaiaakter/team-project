import React from 'react';
import './Product.css'
import { Col, Container, Row } from 'react-bootstrap';

const Products = () => {
    return (
        <Container className='my-20px'>
            <Row>
                <Col md={6} sm={12}>
                    <img className='w-70%' src="https://cdn.shopify.com/s/files/1/0301/7274/1770/files/Untitled-1.png?v=1610109448" alt="" />
                </Col>
                <Col md={6} sm={12}>
                    <div >
                        <h4>THE PRODUCTS</h4>
                        <h2 className='title-left'>All About Fabulous</h2>
                        <p className='m-5'>Halsey is the latest celebrity to launch her own beauty brand: About Face. Her products are both playful and electrifying, but are they worth every penny? E! News has the scoop!</p>
                        <div className='row mx-5'>
                            <div className='col-md-6'>
                                <ul>
                                    <li>Eye and facial makeup</li>
                                    <li>Hair Serum</li>
                                    <li>Makeup Brush</li>
                                    <li>Professional Powder</li>

                                </ul>
                            </div>
                            <div className='col-md-6'>
                                <ul>
                                    <li>Lipstick & Nail Art</li>
                                    <li>Skincare Cream</li>
                                    <li>Hair Shampoo</li>
                                    <li>facial Kit</li>

                                </ul></div>
                        </div>
                        <div className='row'>
                            <div className='col-md-5 mx-3'>
                                <button className='button'  >View More</button>
                            </div>
                        </div>

                    </div>
                </Col>
            </Row>
            {/* <div className="banner mt-5px">
                <div className="row my-70px g-4">
                    <div className="col-md-6 col-12 mt-5">
                        <img className='w-70%' src="https://cdn.shopify.com/s/files/1/0301/7274/1770/files/Untitled-1.png?v=1610109448" alt="" />
                    </div>
                    <div className="col-md-6 col-12 mt-2 text-center">
                        <h4>THE PRODUCTS</h4>
                        <h2 className='title-left'>All About Fabulous</h2>
                        <p className='m-5'>Halsey is the latest celebrity to launch her own beauty brand: About Face. Her products are both playful and electrifying, but are they worth every penny? E! News has the scoop!</p>
                        <div className='row mx-5'>
                            <div className='col-md-6'>
                                <ul>
                                    <li>Eye and facial makeup</li>
                                    <li>Hair Serum</li>
                                    <li>Makeup Brush</li>
                                    <li>Professional Powder</li>

                                </ul>
                            </div>
                            <div className='col-md-6'>
                                <ul>
                                    <li>Lipstick & Nail Art</li>
                                    <li>Skincare Cream</li>
                                    <li>Hair Shampoo</li>
                                    <li>facial Kit</li>

                                </ul></div>
                        </div>
                        <div className='row'>
                            <div className='col-md-5 mx-3'>
                                <button className='button'  >View More</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div> */}
        </Container>
    );
};

export default Products;