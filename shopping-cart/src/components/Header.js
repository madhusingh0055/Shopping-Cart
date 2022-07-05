import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import  {connect} from  'react-redux'

import './Header.css'

export class Header extends Component {
    render() {
        return (
            <div className="main">
            
             
                        <ul >
                            <li  ><Link to="/" className="nav-link active" style={{ color: 'inherit', textDecoration: 'inherit'}}>Shopping Cart</Link></li>
                            <li className='cart'><Link to="/carts" className="nav-link" style={{ color: 'inherit', textDecoration: 'inherit'}}><i class="fa fa-shopping-cart" aria-hidden="true" style={{fontSize: "30px"}}></i><sup>{this.props.numberCart}</sup></Link></li>
                        </ul>
                  
            
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return{
        numberCart:state._todoProduct.numberCart
    }
}
export default connect(mapStateToProps,null)(Header)
