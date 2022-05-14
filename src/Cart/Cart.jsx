import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { delItem } from '../Redux/Action';

const Cart = () => {

    const state = useSelector((state)=> state.addItem);

    const dispatch = useDispatch();

    const handleClose = (item) => {
           dispatch(delItem(item))
    }

    const cartItems = (cartItem) => {
        return(
            <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
                <div className="container py-4">
                    <button onClick={()=>handleClose(cartItem)} className="btn-close float-end" aria-label="Close"></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={cartItem.img} alt={cartItem.title} height="250"/>
                        </div>
                        <div className="col-md-4">
                            <h3 className="card-title fs-1">{cartItem.title}</h3>
                            <p className="lead fs-3">&#8377; {cartItem.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }



    const emptyCart = () =>{
        return (
            <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row">
                        <h1>Your Cart is Empty</h1>
                    </div>
                </div>
            </div>
        )
    }


    const button =() =>{
        return(
            <div className="container">
                <div className="row">
                    <NavLink to="/checkout" className="btn btn-outline-success mb-5 w-50 w-lg-25 fw-bold mx-auto">Proceed to Checkout</NavLink>
                </div>
            </div>
        )
    }


    return (
        <div>
             {state.length === 0 && emptyCart() }
             {state.length !== 0 && state.map(cartItems) }
             {state.length !== 0 && button() }
        </div>
    )
}

export default Cart
