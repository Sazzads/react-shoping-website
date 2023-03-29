import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        const storedcart = getShoppingCart();
        const savedcart = [];
        //step1: get id of the added product
        for (const id in storedcart) {
            //step2: get product from products state by using id
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                //step 3 add quantity
                const quantity = storedcart[id];
                addedProduct.quantity = quantity;
                //step-4 add addProduct to the saved cart
                savedcart.push(addedProduct);

            }
            // console.log('added product', addedProduct)


        }
        //step 5 : set the cart
        setCart(savedcart);
    }, [products])


    const handleAddToCart = (product) => {
        // const newCart = [...cart, product];
        let newCart = [];
        // if product doesnt exist in the cart , thn set quantity=1
        //if exist update quantity by 1
        const exist = cart.find(pd => pd.id === product.id)
        if (!exist) {
            product.quantity = 1
            newCart = [...cart, product]
        }
        else{
            exist.quantity+1;
            const remaining=cart.filter(pd=>pd!==product.id);
            newCart=[...remaining,exist]
        }

        setCart(newCart);
        addToDb(product.id)
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}></Product>)
                }

            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;