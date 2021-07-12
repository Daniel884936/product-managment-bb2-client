import { Button } from "react-bootstrap";

const UserListComponent = (props) => {

    let {users, deleteUser} =  props;
    
    return (                
        <table className="table">
            <thead className="thead-light">
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Surnames</th>
                    <th>Username</th>
                    <th>Role</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index)=>(
                    <tr key= {user.userId}>
                        <td >{index + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.surnames}</td>
                        <td>{user.username}</td>
                        <td>{user.userRole}</td>
                        <td>                            
                            <Button variant="danger" onClick ={() =>deleteUser(user.userId)}><i className="fas fa-trash-alt"></i></Button>
                        </td>
                    </tr>
                ))                   
                }
            </tbody>
        </table>
     );
}

export default UserListComponent;