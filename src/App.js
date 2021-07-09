import { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SupplierPageComponent from "./pages/suppplier/supplier-page.component";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"


class App extends Component{
    render(){
        return (
        <div class="s-layout">
                <div className="s-layout__sidebar">
                <a className="s-sidebar__trigger" href="#0">
                    <i className="fa fa-bars"></i>
                </a>
                
                <nav className="s-sidebar__nav">
                    <ul>
                        <li>
                        <a className="s-sidebar__nav-link" href="#0">
                            <i className="fa fa-home"></i><em>Home</em>
                        </a>
                        </li>
                        <li>
                        <a className="s-sidebar__nav-link" href="#0">
                            <i className="fa fa-user"></i><em>My Profile</em>
                        </a>
                        </li>
                        <li>
                        <a className="s-sidebar__nav-link" href="#0">
                            <i className="fa fa-camera"></i><em>Camera</em>
                        </a>
                        </li>
                    </ul>
                </nav>
                </div>
                <main class="s-layout__content">
                    <div className ="container">
                     <BrowserRouter >
                        <Switch>
                            <Route exact path ="/supplier" component ={SupplierPageComponent}></Route>
                        </Switch>
                    </BrowserRouter>  
                    </div>                     
                             
                </main>
        </div>                     
            );
    }
}
export default App;
