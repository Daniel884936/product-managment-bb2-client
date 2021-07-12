import { useField, ErrorMessage } from "formik";

const TextField = ({label, ...props}) => {
    const [field, meta] = useField(props)
    return ( 
        <div className ="mb-2">
            <div className="form-group">
                <label htmlFor={field.name}>{label}</label>
            <input
            className ={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
            {...field} {...props}
            autoComplete="off"
            />
            <ErrorMessage component="div" name={field.name} className="invalid-feedback"/>
            </div>            
        </div>
     );
}

export default TextField;