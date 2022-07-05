import React, { Component } from 'react'
import { actFetchProductsRequest, AddCart } from '../actions'
import './ProductCard.css'
import { connect } from 'react-redux';
export class Product extends Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.actFetchProductsRequest();
    }


    render() {
        const { _products } = this.props._products;
        if (_products.length > 0) {

            return (

                <div className="main-card">
                    {
                        _products.map((item, index) => (
                            <div key={index} className="card-container">
                                <img src={item.thumbnail} className="card-img" />
                                <h2>{item.title}</h2>
                                <p className='rating'>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                </p>
                                <span className="btn" onClick={() => this.props.AddCart(item)}>Add Cart</span>
                            </div>

                        ))
                    }
                </div>


            )
        }
        return (
            <div className="row">
                <h2>Loading...!</h2>
            </div>
        )

    }
}

const mapStateToProps = state => {
    return {
        _products: state._todoProduct,
    };
}
function mapDispatchToProps(dispatch) {

    return {
        actFetchProductsRequest: () => dispatch(actFetchProductsRequest()),
        AddCart: item => dispatch(AddCart(item))

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Product)
