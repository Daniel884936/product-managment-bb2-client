import axios from 'axios';

class CountryService{
    constructor(){
        this.baseUrl = 'http://localhost:8080/api/countries';
    }
     getAll = () => axios.get(this.baseUrl);
        
}
export default new CountryService();