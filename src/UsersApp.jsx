import {UserForm} from "./components/UserForm.jsx";
import {UsersList} from "./components/UsersList.jsx";
import {useUsers} from "./hooks/useUsers.js";


export const UsersApp = ()=> {

    const {
        users,
        userSelected,
        initialUserForm,

        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm
    } = useUsers()


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
                        <button className={'btn btn-primary my-2'}>Nuevo usuario</button>
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