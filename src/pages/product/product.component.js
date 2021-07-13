import { Formik,Form } from 'formik'
import React from 'react'
import TextField from '../../components/forms/text-field'
import ProductStateService from '../../services/product-state.service'
import SelectField from '../../components/forms/select-field'
import * as Yup from 'yup'
import ProductService from '../../services/product.service'
import SupplierModalComponent from '../../components/modals/supplier-modal.component'
import SupplierService from '../../services/supplier.service'
import SupplierListComponent from '../suppplier/supplier-list.component'
import CountryService from '../../services/country.service'
import SupplierAddModalComponent from '../../components/modals/supplier-add-modal.component'

class ProductComponent extends React.Component{

    constructor(){
        super();
        this.state = {
            productStates: [],
            showSupplerModal: false , 
            showAddSupplerModal: false,            
            suppliers: [], 
            supplersToSave: [],
            countries: []          
        }
    }

    componentDidMount(){
        this.loadAllProductState();
        this.loadAllSuppliers();
        this.loadAllCountries();
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

    setShowSupplierAddModal = (show)=>{
        this.setState({
            showAddSupplerModal: show
        })        
    }


    setShowSupplierModal = (show)=>{
        this.setState({
            showSupplerModal: show
        })
    }

    addNewSupplier = (suplier)=>{
        this.setShowSupplierModal(false);
        this.setShowSupplierAddModal(true);
    }


    loadAllCountries =()=>{
        CountryService.getAll().then(response=>{
            this.setState({
                countries: response.data.data
            })            
        }).catch(error=>{
            console.log(error)
        })
    }

    loadAllProductState = ()=>{
        ProductStateService.getAllProductSatate().then(response =>{
            let productStates = response.data.data.map(productState=>({value:productState, key:productState}))
            this.setState({
                productStates 
            })            
        }).catch(error=>{
            console.log(error)
        })
    }

    getValidationSheme = ()=>(
        Yup.object({
            name: Yup.string()
                .max(30 , 'Must be 30 characters or less ')
                .required('Required'),
            code:  Yup.number()
                .required('Required'),
            price:  Yup.number()
                .required('Required'),
            description:  Yup.string()
                .max(40 , 'Must be 40 characters or less ')
                .required('Required'),
            productState: Yup.string()
                .required('Required')
        })
    )

    handleSubmit = (product)=>{        
        console.log(product)
        ProductService.save(product).then(response=>{
            console.log(response.data.data)
        })
        .catch(error=>{
            console.log(error.response)
        })
    }


    addSupplierFromList = (index)=>{ 
        this.state.supplersToSave.push(this.state.suppliers[index])
        this.state.suppliers.splice(index, 1);       
        this.setShowSupplierModal(false);
    }

    //TODO each product id is not dynamic
    render(){       
        const {productStates} = this.state
        const initialValues = {
            name : '',
            code: '',
            price: '',
            description: '',
            productState: 'ACTIVE',
            userId: '1'
        }

        const {suppliers} = this.state

        return (
            <div className="row justify-content-start">                                
                <div className ="col-7">
                <h3 className ="mb-4">Product</h3>
                    <div className="row shadow p-4 mb-5 bg-white rounded">
                        <div className="col">
                      <Formik
                      onSubmit = {this.handleSubmit}
                      initialValues= {initialValues}
                      validationSchema = {this.getValidationSheme}
                      >
                        {
                            formik =>(
                                <Form>
                                <TextField label ="Name" name ="name" type="text"></TextField>
                                <TextField label ="Code" name ="code" type="number"></TextField>
                                <TextField label ="Price" name ="price" type="number"></TextField>
                                <TextField label ="Description" name ="description" type="text"></TextField>
                                <SelectField label="Product State" name="productState"
                                options = {productStates}
                                />
                                <div className="row text-center">                                    
                                    <div className="col">                                       
                                            <button type="submit" name=""  className="btn btn-primary btn-sm pl-5 pr-5 mr-2">
                                            <i className="fas fa-save"></i> Save
                                            </button> 

                                            <button type="button" name=""  onClick={() =>(this.setShowSupplierModal(true))}  className="btn btn-info btn-sm pl-5 pr-5 ">
                                            <i className="fas fa-plus"></i> Add Supplier
                                            </button> 

                                            <button type="button" name=""  className="btn btn-dark btn-sm pl-5 pr-5 ml-2">
                                            <i className="fas fa-plus"></i> Add Reduced Price
                                            </button>                                        
                                    </div>                                                                       
                                </div>
                            </Form>
                            )                            
                        }
                     </Formik>
                        </div>           
                    </div>
                </div>
                <SupplierModalComponent addNewSupplier = {this.addNewSupplier} addSupplierFromList = {this.addSupplierFromList} suppliers = {suppliers}  show= {this.state.showSupplerModal} setShow = {this.setShowSupplierModal}></SupplierModalComponent>                   
                <SupplierAddModalComponent countries = {this.state.countries} setShow ={this.setShowSupplierAddModal} show ={this.state.showAddSupplerModal}></SupplierAddModalComponent>
               { this.state.supplersToSave.length > 0 ?
               
               <div className="col-4">
                <h3 className ="mb-4">Suppliers added</h3>
                <div className="row shadow p-4 ml-3 bg-white rounded">
                     <SupplierListComponent suppliers={this.state.supplersToSave}></SupplierListComponent>
                     
                </div>                   
                </div>
                : null
                }
            </div> 
                      
        );
    }
}

export default ProductComponent;