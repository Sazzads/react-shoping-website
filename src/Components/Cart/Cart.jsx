import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // const cart=props.cart //option 1
    // const {cart}=props //option 2
    console.log(cart);
    let totalPricee=0;
    let totalShipping=0
    for(const product of cart){
        totalPricee=totalPricee+product.price;
        totalShipping=totalShipping+product.shipping;
    }
    const tax=totalPricee*7/100;
    const grandTotal=totalPricee+totalShipping+tax;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>selected items: {cart.length}</p>
            <p>TotalPrice:$ {totalPricee}</p>
            Total Shipping: 
            {totalShipping}
            <p>Tax:{tax.toFixed(2)} </p>
            <h6>Grand Total: {grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;