import React from 'react';
import './Slider.css'

import { Carousel, Container, } from 'react-bootstrap';






const Slider = () => {



    return (
        <Container style={{ height: "80vh" }} >
            <div className="banner mb-10px">
                <div className="row mb-10px">
                    <div className="col-md-6 mt-5">
                        <p className='slider-left'>Beauty</p>
                        <h1>Super Natural</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni inventore quia placeat a. Iusto error saepe adipisci cupiditate suscipit repellat!</p>
                        <button className='text-center btn btn-center'>Shop Now</button>
                    </div>
                    <div className="col-md-6 mt-5">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100  "
                                    src="https://cdn.shopify.com/s/files/1/0301/7274/1770/files/countdownbanner.png?v=1610090122 " alt="First-Slide"
                                />
                                <Carousel.Caption>
                                    {/* <h3>Pencil eyeliner</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://cdn.shopify.com/s/files/1/0301/7274/1770/files/aboutus-2.png?v=1610092477" alt="Second-slide"
                                />

                                <Carousel.Caption>
                                    {/* <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 h-50"
                                    src="https://cdn.shopify.com/s/files/1/0301/7274/1770/files/Untitled-1.png?v=1610109448
                            " alt="Third-slide"
                                />

                                <Carousel.Caption>
                                    {/* <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Slider;