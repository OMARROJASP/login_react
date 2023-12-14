export const UserRow = ({
                            handlerUserSelectedForm,
                            handlerRemoveUser,
                            id,
                            username,
                            email,
                        password
})=> {



    return(
        <>
            <tr key={id}>
                <td>{id}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td><button type={"button"}
                            className={'btn btn-secondary btn-sm'}
                            onClick={() => handlerUserSelectedForm({
                                id,
                                username,
                                email
                            })}
                >Update</button></td>
                <td><button type={"button"}
                            className={'btn btn-danger btn-sm'}
                            onClick={() => handlerRemoveUser(id)}
                >Delete</button></td>
            </tr>
        </>
    )
}