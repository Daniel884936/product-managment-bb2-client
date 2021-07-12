import React from 'react';

export default class SupplierListComponent extends React.Component{
    constructor(props){
        super();  
    }

    render(){    
        let {suppliers} = this.props;
        console.log(suppliers)
        const {enableAddButton} = this.props;
        const {addSupplierFromList} = this.props        

        return (
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>#</th>
                            <th>Name</th>

                            {enableAddButton ?
                                <th></th> : null
                            }                                        
                        </tr>
                    </thead>
                    <tbody>
                        { 
                        suppliers.map((supplier, index) =>(                                    
                        <tr key = {supplier.supplierId}>
                            <td>{index + 1}</td>
                            <td>{supplier.name}</td>

                            {
                            enableAddButton ?
                                <th><button type="button" name="" onClick ={()=> (addSupplierFromList(index))} className="btn btn-primary btn-sm pl-5 pr-5 ml-2">
                                <i className="fas fa-plus"></i> Add Supplier
                                </button> </th> 
                                : null
                            }                
                        </tr>
                        ))                
                        }
                    </tbody>
                </table>
        );


    }
}
