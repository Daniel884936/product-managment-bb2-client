import React from "react";
import { Switch, Route, Link   } from "react-router-dom";
import ProductListComponent from "./pages/product/product-list.component";
import ProductComponent from "./pages/product/product.component";
import SupplierPageComponent from "./pages/suppplier/supplier-page.component";
import UserPageComponent from "./pages/user/user-page.component";


class App extends React.Component{
    render(){
        return (
    <div id="wrapper" className="animate">
      <nav className="navbar header-top fixed-top navbar-expand-lg navbar-dark bg-primary">
        <Link className="navbar-brand" to ="/">LOGO</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav animate side-nav">
            <li className="nav-item">
              <Link className="nav-link" to ="/" title="Products"><i className="fas fa-cube"></i> Products <i className="fas fa-cube shortmenu animate"></i></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link"  to="/user" title="Users"><i className="fas fa-users"></i> Users <i className="fas fa-users shortmenu animate"></i></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/supplier" title="Suppliers"><i className="fas fa-handshake"></i> Suppliers <i className="fas fa-handshake shortmenu animate"></i></Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-md-auto d-md-flex">
            <li className="nav-item">
              <Link className="nav-link" to ="/"><i className="fas fa-user"></i> Profile</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to ="/"><i className="fas fa-key"></i> Logout</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container-fluid">
          <div className ="container">          
                          <Switch>
                              <Route exact path ="/" component ={ProductListComponent}></Route>
                              <Route exact path ="/supplier" component ={SupplierPageComponent}></Route>
                              <Route exact path ="/user" component ={UserPageComponent}></Route>                            
                              <Route exact path ="/product/new" component ={ProductComponent}></Route>                           
                          </Switch>          
          </div>
      </div>
    </div>                    
     );
    }
}
export default App;
