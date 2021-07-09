import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import SupplierComponent from './supplier.component';
import SupplierListComponent from './supplier-list.component';

export default class SupplierPageComponent extends React.Component{

    constructor(props){        
        super()
    }

    render(){
        return (
            <div className ="row shadow p-4 mb-5 bg-white rounded">    a        
                <div className="col">
                    <SupplierComponent></SupplierComponent>                
                </div>
                <div className ="col">
                    <SupplierListComponent></SupplierListComponent>
                </div>
            </div>
        )
    }
}

