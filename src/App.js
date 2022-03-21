import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AddUser } from './actions/actions'
import { userFetch } from './actions/operations'
import Form from './Form'
const App = () => {
    const users = useSelector((state) => state.userReducer.users)
    console.log(users)
    const user = useSelector((state) => state)
    console.log('user',user.userReducer.adduser)
    const dispatch = useDispatch();
   
    return (
        <div>
            <button onClick={() => dispatch(userFetch())}>API</button>
            <table border="2">
                <thead>
                    <tr>
                        <th scope='col'>Name</th>
                        <th scope='col'>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users && users.map((user, i) => (
                            <tr key={i}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <Form/>
            {/* <h1>{user.async.adduser}</h1> */}
        </div>
    )
}

export default App