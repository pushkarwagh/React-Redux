import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom'

import { GrEdit } from "react-icons/gr";
import { MdDelete } from "react-icons/md";

import { userFetch } from './actions/operations'
import { DeleteUser, EditUser, ViewUser } from './actions/actions';

const App = () => {
    const users = useSelector((state) => state.UserReducer.users)
    // console.log(users)
    // const user = useSelector((state) => state)
    // console.log('user',user.UserReducer.adduser)
    const dispatch = useDispatch();
    // console.log("users",users )

    const handleView = (user) => {
        dispatch(ViewUser(user))
    }
    
    return ( 
        <div>
            <button 
              className='btn btn-primary m-2' 
              onClick={() => dispatch(userFetch())}
            >
            API
            </button>
            
            <Link to = '/addUser'>
            <button className='btn btn-success m-2' > 
              Add-User
            </button>
            </Link>

            
            <Table striped bordered hover variant="light">
                <thead>
                    <tr>
                        <th scope='col'>Name</th>
                        <th scope='col-2'>Actions..</th>
                    </tr>
                </thead>
                <tbody>
                    { 
                        users && users.map((user, i) => (
                            <tr key={i}>
                                <td> 
                                  <Link to={{
                                       pathname:`/viewUser/${user.id}`                                        
                                        }}
                                        onClick={ () => handleView(user) }
                                  >
                                   {user.name} 
                                  </Link>
                                 </td>

                                 <td> 
                                   <Link to={{
                                       pathname:`/editUser/${user.id}` ,
                                       state:{ data: user}
                                    }}
                                    >
                                     <GrEdit className='m-2'
                                       onClick={() => dispatch(EditUser(user)) }
                                     />
                                   </Link>

                                    <MdDelete 
                                       onClick={ () => dispatch(DeleteUser(user.id)) }
                                     />
                                 </td>

                            </tr>
                        ))
                    }
                </tbody>
            </Table>
           
        </div>
    )
}

export default App