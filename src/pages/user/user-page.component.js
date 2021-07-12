import React ,{ Fragment} from 'react'
import UserService from '../../services/user.service';
import UserComponent from './user.component';
import UserListComponent from './user-list.component';
import Swal from 'sweetalert2'


class UserPageComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            users: []
          }
    }

    handleSubmit = (user) =>{
        console.log(user)
        Swal.fire({
            title: 'Please wait!',
            text : 'loading',
            icon: 'info',
            allowOutsideClick: false
        })
        Swal.showLoading();

        UserService.add(user).then(response=>{
            this.loadAllUsers();
            Swal.fire({
                title: 'Saved!',
                text: `${response.data.data.name} saved`,
                icon: 'success',
                confirmButtonColor: '#007bff'
              });
        }).catch(error=>{
            console.log(error.response.data)
            Swal.fire({
                title:'Error!',
                text: error.response.data.message,
                icon: 'error',    
                confirmButtonColor: '#007bff'            
              });
        })
    }


    componentDidMount(){
        this.loadAllUsers();
    }

    deleteUser =(userId) =>{
        Swal.fire({

            title: 'Are you sure?',
            text: 'Are you sure that you want to delete it?',
            icon: 'question',
            showConfirmButton : true,
            showCancelButton : true,
            confirmButtonColor: '#007bff'

          }).then(res=>{              
            if(res.isConfirmed){
                Swal.showLoading();
                UserService.delete(userId).then(response=>{
                console.log(response);
                Swal.fire({
                    title: 'Delete!',
                    text: 'User deleted',
                    icon: 'success',
                    confirmButtonColor: '#007bff'
                  });
                  this.loadAllUsers();
            })
            }            
          })
        .catch(error=>{
            Swal.fire({
                title:'Error!',
                text: error.response.data.message,
                icon: 'error',    
                confirmButtonColor: '#007bff'            
              });
        })
    }

    loadAllUsers = () =>{
        UserService.getAll()
        .then(response=>{
            this.setState({
                users: response.data.data
            })
        })
        .catch(error =>{
            console.log(error.response.data)
        })
    }

    render() { 
        let {users} =  this.state
        return (
            <Fragment>
                    <h3 className ="mb-4">User</h3>
                <div className ="row shadow p-4 mb-5 bg-white rounded">  
                    <div className="col-7 col-md-6 shadow-sm p-3 bg-white rounded">
                        <UserComponent onSubmit ={this.handleSubmit} ></UserComponent>                
                    </div>
                    <div className ="col-7 col-md-6 shadow-sm p-3  bg-white rounded">
                        <UserListComponent  deleteUser = {this.deleteUser} users = {users}></UserListComponent>
                    </div>
                </div>
            </Fragment>
        );
    }
}
 
export default UserPageComponent;