import React, { Component } from 'react'
import {actFetchProductsRequest,AddCart} from '../actions'
import './ProductCard.css'
import {connect} from 'react-redux';
export class Product extends Component {
    constructor(props) {
        super(props)
       
    }

    componentDidMount(){
        this.props.actFetchProductsRequest();
    }
    
    
    render() {
        const {_products} = this.props._products;
        if(_products.length>0){
           
           return (
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            {
                                _products.map((item,index)=>(
                                    <div key={index} className="card">
                                        <img src={item.thumbnail} className="card-img"/>
                                        <h5>{item.title}</h5>
                                        <span className="badge badge-primary" style={{cursor:'pointer'}} onClick={()=>this.props.AddCart(item)}>Add Cart</span>
                                    </div>
                                    
                                ))
                            }
                        </div>
                    </div>
                </div>
            ) 
        }
        return(
            <div className="row">
                <h2>Loading...!</h2>
            </div>
        )
        
    }
}

const mapStateToProps = state =>{
    return {
         _products: state._todoProduct,
       };
}
function mapDispatchToProps(dispatch){
   
    return{
        actFetchProductsRequest:()=>dispatch(actFetchProductsRequest()),
        AddCart:item=>dispatch(AddCart(item))
     
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Product)
