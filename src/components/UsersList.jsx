import {UserRow} from "./UserRow.jsx";

export const UsersList = ({handlerUserSelectedForm,handlerRemoveUser, users=[]})=> {
    return(
        <>
            <table className={'table table-hover table-striped'}>
                <thead>
                <tr>
                    <th>#</th>
                    <th>UserName</th>
                    <th>Email</th>
                    <th>Update</th>
                    <th>Remove</th>
                </tr>
                </thead>
                <tbody>
                {
                    users.map(({id,username,email}) => (
                        <UserRow
                            key={id}
                            id={id}
                            username={username}
                            email={email}
                            handlerUserSelectedForm={handlerUserSelectedForm}
                            handlerRemoveUser = {handlerRemoveUser}

                        />
                    ))
                }
                </tbody>
            </table>
        </>
    )
}