import axios from "axios";


class SupplierService{
   constructor(){
       this.baseUrl = 'http://localhost:8080/api/suppliers';
   }
   
    add(supplier) {
        return axios.post(this.baseUrl, supplier);
    }

    getById(supplierId){
        return axios.get(`${this.baseUrl}/${supplierId}`)
    }

    getAll(){
        return axios.get(this.baseUrl)
    }
}

export default new SupplierService();
