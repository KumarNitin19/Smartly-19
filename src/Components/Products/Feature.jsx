import React from 'react';
import { NavLink } from 'react-router-dom';
import { featuredData } from '../../Data';
import './Product.css'

const Feature = () => {


    const cardItem = (item) => {
        return (
            <div className="card my-5 py-4" key={item.id} style={{ width: "18rem" }}>
                <img src={item.img} className="card-img-top mt-3" alt={item.title} />
                <div className="card-body text-center  d-flex justify-content-between align-items-center">
                    <div className="cardContent col-6">
                        <h5 className="card-title mb-1">{item.title}</h5>
                        <p className="lead">&#8377; {item.price}</p>
                    </div>
                    <NavLink to={`/product/${item.id}`} className="btn arrowButton">Buy Now  <i className="fa fa-arrow-right"></i></NavLink>
                </div>
            </div>
        )
    }
  


    return (
        <div className="productComponent">
        <div className="container py-5">
            <div className="row">
                <div className="col-12 text-center productHeading">
                    <h1>F<p>eatured Products</p></h1>
                    <hr />
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row justify-content-around">
                {featuredData.map(cardItem)}
            </div>
        </div>
    </div>
    )
}

export default Feature
