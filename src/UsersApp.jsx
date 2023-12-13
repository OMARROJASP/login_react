import {UserForm} from "./components/UserForm.jsx";
import {UsersList} from "./components/UsersList.jsx";
import {useReducer} from "react";
import {usersReducer} from "./reducers/usersReducer.js";

const initialUsers = [
    {
        id:1,
        username:'omar',
        password:'123456',
        email:'omarrokja@gmail.com'

    }
]
export const UsersApp = ()=> {

    const [users,dispatch] = useReducer(usersReducer,initialUsers)
    const handlerAddUser = (user) => {
        console.log(user)
        dispatch({
            type:'addUser',
            payload:user
        })
    }

    const handlerRemoveUser = (id) => {
        console.log(id)
        dispatch({
            type:'removeUser',
            payload:id,
        })
    }

    return(
        <>
            <div className={'container my-4'}>
                <h1>Users App</h1>
                <div className={'row'}>
                    <div className={'col'}>
                        <UserForm
                            handlerAddUser ={handlerAddUser}
                        />
                    </div>
                    <div className={'col'}>
                        <UsersList
                            handlerRemoveUser ={handlerRemoveUser}
                            users={users}

                        />
                    </div>
                </div>

            </div>

        </>
    )
}