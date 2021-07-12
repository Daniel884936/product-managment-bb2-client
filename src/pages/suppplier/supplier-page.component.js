import React, { Fragment } from 'react'
import SupplierComponent from './supplier.component';
import SupplierListComponent from './supplier-list.component';
import SupplierService from '../../services/supplier.service';
import Swal from 'sweetalert2'

export default class SupplierPageComponent extends React.Component{

    constructor(){                
        super();
        this.state = {
            suppliers: []
        }             
    }

    componentDidMount(){
        this.loadAllSuppliers();  
    }

    handleSubmit = (supplier) =>{ 
        Swal.fire({
            title: 'Please wait!',
            text : 'loading',
            icon: 'info',
            allowOutsideClick: false
        })
        Swal.showLoading();
        console.log(supplier)
        SupplierService.add(supplier)
        .then(response =>{            
          console.log(response)   
          this.loadAllSuppliers();

          Swal.fire({
            title: 'Saved!',
            text: `${response.data.data.name} saved`,
            icon: 'success',
            confirmButtonColor: '#007bff'
          });
        })
        .catch(error =>{
          console.log(error)
          Swal.fire({
            title:'Error!',
            text: error.response.data.message,
            icon: 'error',
            confirmButtonColor: '#007bff'
          });
        })    
      }

      loadAllSuppliers = ()=> {
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
        const {suppliers} = this.state
        return (
            <Fragment>
                    <h3 className ="mb-4">Supplier</h3>
                <div className ="row shadow p-4 mb-5 bg-white rounded">  
                    <div className="col-7 col-md-6 shadow-sm p-3 bg-white rounded">
                        <SupplierComponent onSubmit ={this.handleSubmit} ></SupplierComponent>                
                    </div>
                    <div className ="col-7 col-md-6 shadow-sm p-3  bg-white rounded">
                        <SupplierListComponent  suppliers = {suppliers}></SupplierListComponent>
                    </div>
                </div>
            </Fragment>
        )
    }
}

