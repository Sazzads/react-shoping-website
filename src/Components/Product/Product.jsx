import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const { name, img, seller, quantity, price, ratings } = props.product;
    const handleAddToCart=props.handleAddToCart

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Menufacturer: {seller}</p>
                <p>Ratings:{ratings} stars</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>Add to Cart <FontAwesomeIcon icon={faShoppingBag} /></button>
        </div>
    );
};

export default Product;