import { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductListComponent from "./pages/product/product-list.component";
import ProductComponent from "./pages/product/product.component";
import SupplierPageComponent from "./pages/suppplier/supplier-page.component";
import UserPageComponent from "./pages/user/user-page.component";


class App extends Component{
    render(){
        return (
  <div id="wrapper" className="animate">
    <nav className="navbar header-top fixed-top navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="#">LOGO</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText"
        aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav animate side-nav">
          <li className="nav-item">
            <a className="nav-link" href="#" title="Dashboard"><i className="fas fa-cube"></i> Dashboard <i className="fas fa-cube shortmenu animate"></i></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" title="Cart"><i className="fas fa-cart-plus"></i> Cart <i className="fas fa-cart-plus shortmenu animate"></i></a>
          </li>
        </ul>
        <ul className="navbar-nav ml-md-auto d-md-flex">
          <li className="nav-item">
            <a className="nav-link" href="#"><i className="fas fa-user"></i> Profile</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"><i className="fas fa-key"></i> Logout</a>
          </li>
        </ul>
      </div>
    </nav>
    <div className="container-fluid">
        <div className ="container">
        <BrowserRouter >
                        <Switch>
                            <Route exact path ="/supplier" component ={SupplierPageComponent}></Route>
                            <Route exact path ="/user" component ={UserPageComponent}></Route>
                            <Route exact path ="/product" component ={ProductListComponent}></Route>
                            <Route exact path ="/product/new" component ={ProductComponent}></Route>
                        </Switch>
        </BrowserRouter> 
        </div>
    </div>
  </div>                    
     );
    }
}
export default App;
