import React, { Fragment } from 'react'
import ProductService from '../../services/product.service'
import moment from 'moment';
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';

class ProductListComponent extends React.Component{

    constructor(props){
        super();
        this.state = {
            products : []
        }
    }

    componentDidMount(){
        this.loadAllProducts();
    }

    render(){
        const {products} = this.state;
    return (
    <Fragment>        
        <div className="row mb-4 justify-content-between">
            <h3>Products</h3>
            <Link to="/product/new" className ="btn btn-primary mr-4"><i className="fa fa-plus"></i>  Add new product</Link>
        </div>        
            <div className ="row shadow p-4 mb-5 bg-white rounded table-responsive">
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>#</th>   
                            <th>Name</th>
                            <th>Description</th>
                            <th>Code</th>
                            <th>Price</th>                    
                            <th>Creation Date</th>             
                            <th>State</th>
                            <th>Utils</th>                    
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) =>(
                        <tr key ={product.productId}>                    
                            <td>{index + 1}</td>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{product.code}</td>
                            <td>{product.price}</td>
                            <td>{moment(product.creationDate).format("MMMM Do YYYY")}</td>
                            <td>{product.productState}</td>
                            <td>
                                 <Button variant="info"><i className="fas fa-pencil-alt"></i></Button>
                            </td>
                        </tr>   
                        ))}           
                    </tbody>
                </table>
            </div>
        </Fragment>                
    );
}

    loadAllProducts = ()=>{
        ProductService.loadAllProducts().then(response=>{
            this.setState({
                products: response.data.data
            });
        }).catch(error=>{
            console.log(error.response)
        })
    }
}
 
export default ProductListComponent;