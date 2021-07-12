import React from 'react'
import CountryService from '../../services/country.service';
import { Formik, Form } from 'formik';
import TextField from '../../components/forms/text-field';
import SelectField from '../../components/forms/select-field'
import * as Yup from 'yup'

export default class SupplierComponent extends React.Component{

constructor(props){
    super(props);  
    this.state = {
      countries : []
    }    
}

loadAllCountries = () =>{
  CountryService.getAll().then((response) =>{       
    const countries = response.data.data;    
    countries.unshift({countryId: '', name: 'Select one country...'})
    this.setState({
      countries
    })
  })
  .catch(error =>console.log(error));
}

getValidationShema = () =>(
Yup.object({
  name : Yup.string()
      .max(30 , 'Must be 30 characters or less ')
      .required('Required'),
  surnames : Yup.string()
      .max(30 , 'Must be 30 characters or less ')
      .required('Required'),
  countryId : Yup.string()
      .required('Required')
}))

componentDidMount(){
  this.loadAllCountries();  
}

render(){    

  const {onSubmit} = this.props;
  const countries = this.state.countries;
  const initialValues = {
    name : '',
    surnames : '',
    countryId : ''
  }
    return (
    <Formik 
    initialValues = {initialValues}
    validationSchema = {this.getValidationShema}
    onSubmit = {onSubmit}
    >
      {
        formik =>(        
        <Form>    
            {console.log(formik)}      
            <TextField label ="Name" name ="name" type="text"></TextField>
            <TextField label ="Surnames" name ="surnames" type="text"></TextField>     
            <SelectField label="Country" name="countryId"
            options = {countries.map(country => ({value: country.countryId,key:country.name}))}
            />
            <div className ="text-center">
              <button type="submit" name=""  className="btn btn-primary btn-sm pl-5 pr-5 ">
                <i className="fa fa-plus" aria-hidden="true"></i> ADD
              </button> 
            </div>
        </Form>          
        )
      }
    </Formik>
    );
}
}