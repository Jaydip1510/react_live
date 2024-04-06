import React, { useState } from 'react';
import '../css/bootstrap.min.css';
import '../css/tiny-slider.css';
import '../css/style.css';
import Heder from './Heder';
import img from '../images/product-1.png';
import img1 from '../images/product-2.png';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Cart = () => {
    // State to store the quantity for each product
    const [quantities, setQuantities] = useState({
        product1: 1,
        product2: 1,
    });

    // Function to increase the quantity for a specific product
    const increaseQuantity = (product) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [product]: prevQuantities[product] + 1,
        }));
    };

    // Function to decrease the quantity for a specific product
    const decreaseQuantity = (product) => {
        if (quantities[product] > 1) {
            setQuantities((prevQuantities) => ({
                ...prevQuantities,
                [product]: prevQuantities[product] - 1,
            }));
        }
    };

    // Function to calculate total price for a product based on quantity
    const calculateTotalPrice = (price, quantity) => {
        return (price * quantity).toFixed(2);
    };

    return (
        <div>
            <Heder />

            {/* Start Hero Section */}
            <div className="hero">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="intro-excerpt">
                                <h1>Cart</h1>
                            </div>
                        </div>
                        <div className="col-lg-7"></div>
                    </div>
                </div>
            </div>
            {/* End Hero Section */}
            <div className="untree_co-section before-footer-section">
                <div className="container">
                    <div className="row mb-5">
                        <form className="col-md-12" method="post">
                            <div className="site-blocks-table">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th className="product-thumbnail">Image</th>
                                            <th className="product-name">Product</th>
                                            <th className="product-price">Price</th>
                                            <th className="product-quantity">Quantity</th>
                                            <th className="product-total">Total</th>
                                            <th className="product-remove">Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="product-thumbnail">
                                                <img
                                                    src={img}
                                                    alt="Image"
                                                    className="img-fluid"
                                                />
                                            </td>
                                            <td className="product-name">
                                                <h2 className="h5 text-black">Product 1</h2>
                                            </td>
                                            <td>$49.00</td>
                                            <td>
                                                <div
                                                    className="input-group mb-3 d-flex align-items-center quantity-container"
                                                    style={{ maxWidth: 120 }}
                                                >
                                                    <div className="input-group-prepend">
                                                        <button
                                                            className="btn btn-outline-black decrease"
                                                            type="button"
                                                            onClick={() => decreaseQuantity('product1')}
                                                        >
                                                            −
                                                        </button>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        className="form-control text-center quantity-amount"
                                                        value={quantities.product1}
                                                        readOnly
                                                    />
                                                    <div className="input-group-append">
                                                        <button
                                                            className="btn btn-outline-black increase"
                                                            type="button"
                                                            onClick={() => increaseQuantity('product1')}
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>${calculateTotalPrice(49.00, quantities.product1)}</td>
                                            <td>
                                                <a href="#" className="btn btn-black btn-sm">
                                                    X
                                                </a>
                                            </td>
                                        </tr>
                                        {/* You can add more product rows here */}
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </div>
                    {/* Your remaining JSX code */}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Cart;
