import React from 'react';
import { NavLink } from 'react-router-dom';
import Feature from '../Products/Feature';
import './Home.css'

const Home = () => {
    return (
        <>
        <div className="home carousel slide" id="carouselExampleIndicators" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="homeBackground">
                        <div className="homeBody d-grid d-lg-flex container">
                            <img src="assets/google-home.png" alt="" className="googleHomeImages" />
                            <div className="rightContent col-12">
                                <span className="fw-bold">Google Home ---------</span>
                                <p>Hello <span>User</span>, Your Home <br />
                        Smart Devices & Best Solutions</p>
                        <NavLink to="/products"><button>Go to Product</button></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item ">
                    <div className="homeBackground">
                        <div className="homeBody  d-grid d-lg-flex container">
                            <img src="assets/google-mini.png" alt="" className="homeImages" />
                            <div className="rightContent smallImage" >
                                <span className="fw-bold">Google Mini ---------</span>
                                <p>Hello <span>User</span>, Your Home <br />
                        Smart Devices & Best Solutions</p>
                        <NavLink to="/products"><button>Go to Product</button></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item ">
                    <div className="homeBackground">
                        <div className="homeBody  d-grid d-lg-flex container">
                            <img src="assets/alexa-2nd.png" alt="" className="homeImages" />
                            <div className="rightContent smallImage mt-3 mt-sm-0" >
                                <span className="fw-bold">Amazon Echo Dot ---------</span>
                                <p>Hello <span>User</span>, Your Home <br />
                        Smart Devices & Best Solutions</p>
                        <NavLink to="/products"><button>Go to Product</button></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="homeBackground">
                <div className="homeBody d-flex container">
                    <img src="assets/alexa-home.png" alt="" />
                    <div className="rightContent">
                        <span className="fw-bold">Amazon Echo Dot ---------</span>
                        <p>Your Home <br />
                        Smart Devices & Best Solutions</p>
                        <button>Shop Device</button>
                    </div>
                </div>
            </div> */}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
            <Feature></Feature>
       </>     
    )
}

export default Home
