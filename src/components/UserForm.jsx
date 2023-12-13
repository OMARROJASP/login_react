import {useEffect, useState} from "react";

export const UserForm = ({initialUserForm,userSelected,handlerAddUser}) => {


    const [userForm, setUserForm] = useState(initialUserForm)

    const {username,password,email} = userForm;

    useEffect(() => {
        setUserForm({
            ...userSelected,
           // password:'',
        })
    }, [userSelected]);

    const onInputChange =({target})=> {
      const {name, value} = target;
      setUserForm(
          {
          ...userForm,
          [name]: value
           // el [atributo] : valor
          }
      )
    }
    const onSubmit = (event) => {
        event.preventDefault()
        if (!username || !password || !email){
            alert('Debe completar los campos del formulario!')
            return
        }
       // console.log(userForm)
        handlerAddUser(userForm)
        setUserForm(initialUserForm)
    }

    return(
        <>
        <form onSubmit={onSubmit}>
            <input
                className={'form-control my-3 w-75'}
                placeholder={'Username'}
                name={'username'}
                value={username}
                onChange={onInputChange}
            />
            <input
                className={'form-control my-3 w-75'}
                placeholder={'Password'}
                type={'password'}
                name={'password'}
                value={password}
                onChange={onInputChange}
            />
            <input
                className={'form-control my-3 w-75'}
                placeholder={'Email'}
                type={'email'}
                name={'email'}
                value={email}
                onChange={onInputChange}
            />
            <button
                className={'btn btn-primary'}
                type={'submit'}
            >Crear</button>
        </form>

        </>
    )
}