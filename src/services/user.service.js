import axios from 'axios'

class UserService{
    constructor(){
       this.baseUsrl = 'http://localhost:8080/api/users'
    }

    add = (user) => axios.post(this.baseUsrl, user);
    delete = (userId) => axios.delete(`${this.baseUsrl}/${userId}`)
    getAll = () => axios.get(this.baseUsrl)
}

export default new UserService();