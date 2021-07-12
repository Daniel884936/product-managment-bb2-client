import React from 'react'
import {Formik, Form} from 'formik'
import TextField from '../../components/forms/text-field'
import SelectField from '../../components/forms/select-field'
import * as Yup from 'yup'

class UserComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            roles: [
                {key: 'Select one role', value: ''},
                {key: 'USER', value: 'USER'},
                {key: 'ADMIN', value: 'ADMIN'}                       
        ]
         }
    }

    getValidationShema = () => (
        Yup.object({
            name: Yup.string()
                .max(30 , 'Must be 30 characters or less ')
                .required('Required'),
            surnames : Yup.string()
                .max(30 , 'Must be 30 characters or less ')
                .required('Required'),
            username: Yup.string()
                .max(30 , 'Must be 30 characters or less ')
                .required('Required'),
            password : Yup.string()
                .max(30 , 'Must be 30 characters or less ')
                .required('Required'),  
            userRole: Yup.string()               
                .required('Required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Password must match')
                .required('Required')
        })
    )
    

    render() { 
        const {roles} = this.state;
        const {onSubmit} = this.props;
        const initialValues = {
            name: '',
            surnames :'',
            username : '',
            userRole : '',
            password: '',
            confirmPassword: ''
        }
        return (
            <Formik 
                initialValues = {initialValues}
                onSubmit = {onSubmit}
                validationSchema = {this.getValidationShema}
            >
                {
                    formik =>( 
                        <Form>
                            {console.log(formik)}
                            <TextField label ="Name" name ="name" type="text"></TextField>
                            <TextField label ="Surnames" name ="surnames" type="text"></TextField>
                            <TextField label ="Useraname" name ="username" type="text"></TextField>
                            <TextField label ="Password" name ="password" type="password"></TextField>
                            <TextField label="Confirm Password" name="confirmPassword" type="password" />
                            <SelectField label="Role" name="userRole"
                            options = {roles.map(role => ({value: role.value, key:role.key}))}
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

export default UserComponent;