import { useField, ErrorMessage, Field } from "formik";

const SelectField = ({label, options = [], ...props}) =>{
    const [field, meta] = useField(props)
    return (
        <div className ="mb-2">
            <div className = "form-group">
                <label htmlFor ={field.name}>{label}</label>
                <Field as="select"
                 className ={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
                {...field}  {...props}> 
                {
                    options.map(option=>(
                        <option key = {option.value} value={option.value}>{option.key}</option>
                    ))
                }
                </Field>     
                 <ErrorMessage component="div" name={field.name} className="invalid-feedback"/>          
            </div>
        </div>
    );
}

export default SelectField;