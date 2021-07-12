import { Formik,Form } from 'formik'
import React from 'react'
import TextField from '../../components/forms/text-field'
import ProductStateService from '../../services/product-state.service'
import SelectField from '../../components/forms/select-field'
import * as Yup from 'yup'
import ProductService from '../../services/product.service'

class ProductComponent extends React.Component{

    constructor(){
        super();
        this.state = {
            productStates: []            
        }
    }

    componentDidMount(){
        this.loadAllProductState();
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

        return (
            <div className="row justify-content-center">                                
                <div className ="col-9">
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

                                            <button type="button" name=""  className="btn btn-info btn-sm pl-5 pr-5 ">
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
            </div>           
        );
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
}

export default ProductComponent;