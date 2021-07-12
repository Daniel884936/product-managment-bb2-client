import axios from 'axios';

class ProductService{

    constructor(){
        this.baseUrl = 'http://localhost:8080/api/products';
    }

    loadAllProducts = ()=> axios.get(this.baseUrl);
    update = (product)=> axios.put(this.baseUrl, product);
    save = (product)=> axios.post(this.baseUrl, product);
}

export default new ProductService();