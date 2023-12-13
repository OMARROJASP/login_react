import {UserForm} from "./components/UserForm.jsx";
import {UsersList} from "./components/UsersList.jsx";
import {useReducer, useState} from "react";
import {usersReducer} from "./reducers/usersReducer.js";

const initialUsers = [
    {
        id:1,
        username:'omar',
        password:'123456',
        email:'omarrokja@gmail.com'

    }
]

const initialUserForm = {
    id:0,
    username:"",
    password:"",
    email:""
}
export const UsersApp = ()=> {

    const [users,dispatch] = useReducer(usersReducer,initialUsers)
    const [userSelected, setUselected] = useState(initialUserForm)
    const handlerAddUser = (user) => {
        console.log(user)
        let type;
        if(user.id === 0){
            type='addUser'
        }else{
            type='updateUser'
        }
        dispatch({
            type,
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

    const handlerUserSelectedForm=(user)=> {
       // console.log(user)
        setUselected({
            ...user
        })
    }

    return(
        <>
            <div className={'container my-4'}>
                <h1>Users App</h1>
                <div className={'row'}>
                    <div className={'col'}>
                        <UserForm
                            initialUserForm={initialUserForm}
                            userSelected={userSelected}
                            handlerAddUser ={handlerAddUser}
                        />
                    </div>
                    <div className={'col'}>
                        {
                            users.length === 0 ?
                            <div className={'alert alert-warning'}>
                                No hay usuarios en el sistema!
                            </div>
                            :
                        <UsersList
                            handlerUserSelectedForm={handlerUserSelectedForm}
                                handlerRemoveUser ={handlerRemoveUser}
                                users={users}
                                />
                        }

                    </div>
                </div>

            </div>

        </>
    )
}