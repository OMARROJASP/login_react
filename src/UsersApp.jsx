import {UserForm} from "./components/UserForm.jsx";
import {UsersList} from "./components/UsersList.jsx";
import {useUsers} from "./hooks/useUsers.js";
import {UserModalForm} from "./components/UserModalForm.jsx";


export const UsersApp = ()=> {

    const {
        users,
        userSelected,
        initialUserForm,
        visibleForm,

        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm,
        handlerOpenForm,
        handlerCloseForm
    } = useUsers()


    return(
        <>
            {!visibleForm ||
                <UserModalForm
                    userSelected={userSelected}
                    initialUserForm={initialUserForm}
                    handlerAddUser={handlerAddUser}
                    handlerCloseForm={handlerCloseForm}
                />
                }
            <div className={'container my-4'}>
                <h1>Users App</h1>
                <div className={'row'}>


                    <div className={'col'}>
                        {visibleForm || <button
                            className={'btn btn-primary my-2'}
                            onClick={handlerOpenForm}
                        >Nuevo usuario</button>}

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