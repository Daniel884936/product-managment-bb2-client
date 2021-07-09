import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import SupplierService from '../../services/supplier.service';

export default class SupplierListComponent extends React.Component{
    constructor(props){
        super();
        this.loadAllSuppliers = this.loadAllSuppliers.bind(this);        
        this.state = {
            suppliers: []
        }
    }

    componentDidMount(){
        this.loadAllSuppliers();
    }

    loadAllSuppliers(){
        SupplierService.getAll().then(response=>{
            this.setState({
                suppliers : response.data.data
            })
            console.log(response.data);
        })
        .catch(err=>{
            console.log(err);
        });
    }

    render(){    
        const suppliers = this.state.suppliers;

        return (
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>                
                        </tr>
                    </thead>
                    <tbody>
                        { 
                        suppliers.map((supplier, index) =>(                                    
                        <tr>
                            <td>{index}</td>
                            <td>{supplier.name}</td>
                        </tr>
                        ))                
                        }
                    </tbody>
                </table>
        );
    }
}
