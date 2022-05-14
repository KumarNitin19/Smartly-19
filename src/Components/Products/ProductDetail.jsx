import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useParams} from 'react-router';
import { data } from '../../Data';
import { delItem,addItem } from '../../Redux/Action';
import './Product.css';


const ProductDetail = () => {

    const [cartBtn, setCardBtn] = useState('Add to Cart');
    const proId = useParams(); 
    const proDetail = data.filter(x=> x.id == proId.id);
    const product = proDetail[0];

    const dispatch = useDispatch();

    const handleCart = (item) =>{
           if(cartBtn === 'Add to Cart'){
               dispatch(addItem(item));
               setCardBtn('Remove from Cart')
           } else{
               dispatch(delItem(item));
               setCardBtn('Add to Cart')
           }
    }

    return (
        <div>
            <div className="container my-5 py-3 productDetail">
                <div className="row d-lg-flex justify-content-lg-around productContainer">
                    <div className="col-9 col-lg-6 d-flex product">
                        <img src={product.img} alt="" />
                    </div>
                    <div className="col-sm-8 col-10 col-lg-5 justify-content-center flex-coloumn productContent">
                        <h1 className="display-5 fw-bold">{product.title}</h1>
                        <hr/>
                        <h2 className="my-4">&#8377; {product.price}</h2>
                        <p>{product.desc}</p>
                        <button onClick={()=>handleCart(product)} className="btn arrowButton w-100">{cartBtn} &nbsp;  {cartBtn == 'Add to Cart' ? (<i className="fa fa-plus"></i>) : (<i className="fa fa-minus"></i>)}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
