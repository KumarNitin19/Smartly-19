import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { data } from '../../Data';
import './Product.css'


const Products = () => {

    const [dropdown, setDropdown] = useState('All');


    const cardItem = (item) => {
        if (item.type == dropdown) {
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

        if (dropdown == 'All') {
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

    }

    let dropdownValue = [
        { id: 1, value: "All" },
        { id: 2, value: "Smart Pod" },
        { id: 3, value: "Security" },
        { id: 4, value: "Tablet" },
        { id: 5, value: "Clock" },
        { id: 6, value: "Home" },
        { id: 7, value: "Amazon" },
        { id: 8, value: "Solar" },
    ]


    return (
     <>
           
                    <div className="productComponent">
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-12 text-center productHeading">
                                    <h1>P<p>roducts</p></h1>
                                    <hr />
                                </div>
                            </div>
                            <h5>Categories</h5>
                            <div className="dropdown">
                                <button className="btn dropdownButton dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    {dropdown}
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    {
                                        dropdownValue.map((item) => (
                                            <li key={item.id} onClick={e => { setDropdown(item.value); }}><a className="dropdown-item">{item.value}</a></li>
                                        )
                                        )
                                    }

                                </ul>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row justify-content-around">
                                {data.map(cardItem)}
                            </div>
                        </div>
                    </div>
                )
                   
      </>
    )
}

export default Products
