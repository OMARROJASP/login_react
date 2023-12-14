import {useReducer, useState} from "react";
import {usersReducer} from "../reducers/usersReducer.js";
import Swal from "sweetalert2";

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
export const useUsers = () => {

    const [users,dispatch] = useReducer(usersReducer,initialUsers)
    const [userSelected, setUselected] = useState(initialUserForm)
    const [visiblForm, setVisibleForm] = useState(false)

    const handlerAddUser = (user) => {
        console.log(user)

    /*
        if(user.id === 0){
            type='addUser'
        }else{
            type='updateUser'
        }
     */
        dispatch({
            type : (user.id === 0)? 'addUser' : 'updateUser',
            payload:user
        })

        Swal.fire(
            (user.id === 0)? "Usuario Creado": "Usuario Actualizado",
            (user.id === 0)?
           "El usuario ha sido creado con exito":
                "El usuario ha sido actualizado con exito",
            "success"
        );
        setVisibleForm(false)
        setUselected(initialUserForm)
    }


    const handlerRemoveUser = (id) => {
        console.log(id)

        Swal.fire({
            title: "¿esya seguro que desea eliminar?",
            text: "Cuidado el usuario sera eliminado",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "si, eliminar!"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch({
                    type:'removeUser',
                    payload:id,
                })
                Swal.fire(
                    "Usuario Eliminado!",
                    "El usuario ha sido eliminado con exito",
                    "success"
                );
            }
        });
    }

    const handlerUserSelectedForm=(user)=> {
        // console.log(user)
        setVisibleForm(true)
        setUselected({
            ...user
        })
    }



    return{
        users,
        userSelected,
        initialUserForm,

        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm
    }
}