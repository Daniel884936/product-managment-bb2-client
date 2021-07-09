import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

export default class SupplierComponent extends React.Component{

constructor(props){
    super();
}

render(){    
    return (
    <form>
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
          <small id="helpId" className="text-muted">Help text</small>
        </div>

        <div className="form-group">
          <label >Surnames</label>
          <input type="text" name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
          <small id="helpId" className="text-muted">Help text</small>
        </div>

        <div className="form-group">
          <label></label>
          <select className="form-control" name="" id="">
            <option>Domininican Republic</option>
            <option>Hiati</option>
            <option>Puerto Rico</option>
          </select>
        </div>     
    </form>
    );
}
}