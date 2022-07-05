import React, { Component } from 'react'
import { connect } from "react-redux";
import { IncreaseQuantity, DecreaseQuantity, DeleteCart } from '../actions';
import './Cart.css'

function Cart({ items, IncreaseQuantity, DecreaseQuantity, DeleteCart }) {
    //    console.log(items)
    let ListCart = [];
    let TotalCart = 0;
    ListCart.push(items.Carts)
    Object.keys(items.Carts).forEach(function (item) {
        TotalCart += items.Carts[item].quantity * items.Carts[item].price;
        ListCart.push(items.Carts[item]);
    });
    function TotalPrice(price, tonggia) {
        return Number(price * tonggia).toLocaleString('en-US');
    }

    console.log(ListCart);
    ListCart.shift()// It remove first element from array

    return (

        <div className='table-cart'>
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    {ListCart.length > 0 &&
                        ListCart.map((item, key) => {
                            return (

                                <tr key={key}>

                                    <td><i className="btn-cart" onClick={() => DeleteCart(key)}>Delete</i></td>
                                    <td>{item.title}</td>
                                    <td><img src={item.thumbnail} className='addtocart-img' /></td>
                                    <td>{item.price} $</td>
                                    <td>
                                        <span className="cart-btn" onClick={() => DecreaseQuantity(key)}>-</span>
                                        <span className="cart-btn">{item.quantity}</span>
                                        <span className="cart-btn" onClick={() => IncreaseQuantity(key)}>+</span>
                                    </td>
                                    <td>{TotalPrice(item.price, item.quantity)} $</td>
                                </tr>

                            )
                        })

                    }
                    <tr>
                        <td colSpan="5">Total Carts</td>
                        <td>{Number(TotalCart).toLocaleString('en-US')} $</td>
                    </tr>
                </tbody>

            </table>
        </div>

    )
}
const mapStateToProps = state => {
    //  console.log(state)
    return {
        items: state._todoProduct
    }
}

export default connect(mapStateToProps, { IncreaseQuantity, DecreaseQuantity, DeleteCart })(Cart)
