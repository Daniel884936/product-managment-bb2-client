import ReactDOM from 'react-dom';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import {BrowserRouter} from 'react-router-dom'


const container = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter>
      <App/>
  </BrowserRouter>
  , container
);

