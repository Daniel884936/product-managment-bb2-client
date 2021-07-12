import React from 'react';

export default class SupplierListComponent extends React.Component{
    constructor(props){
        super();  
    }

    render(){    
        let {suppliers} = this.props;
        console.log(suppliers)

        return (
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>#</th>
                            <th>Name</th>                
                        </tr>
                    </thead>
                    <tbody>
                        { 
                        suppliers.map((supplier, index) =>(                                    
                        <tr key = {supplier.supplierId}>
                            <td>{index + 1}</td>
                            <td>{supplier.name}</td>
                        </tr>
                        ))                
                        }
                    </tbody>
                </table>
        );
    }
}
