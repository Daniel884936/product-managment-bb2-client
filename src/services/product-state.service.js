import axios from 'axios'

class ProductStateService{
    constructor(){
        this.baseUrl = 'http://localhost:8080/api/productsSate'
    }

    getAllProductSatate = ()=> axios.get(this.baseUrl);
}

export default new ProductStateService();