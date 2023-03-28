import { useState } from "react";
import validation from "./validation";

const Forms = ({login}) => { //recibe login por props ya destructurado

    const [userData, setUserData] = useState({ //creo el estado userData con dos propie email y password que inician como string vacio
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({
        email: "",
        password: ""
    })

    const handleChange = (event) => { //creo la funcion que va a escuchar los cambios(events) en los inputs

        setUserData({ //cada vez q hay un event, seteo un nuevo estado
            ...userData, //guardo una copia del estado como está
            [event.target.name]: event.target.value //y dependiendo de dnd suene el event (target.name) le asigno el valor de ese mismo event(target.value)

        })

        setErrors(validation({                  //en la funcion handleChange que esta escuchando cambios en input ,   tambien vamos a setear los errores
            ...userData,                             //me traigo una copia del estado siempre
            [event.target.name]: event.target.value

        })
        )

    }

const handleSubmit=(event)=>{ //funcion handlesubmit recibe event onSubmit
    event.preventDefault() //esto evita que se recargue la pagina por default
    login(userData) //ejecuta la funcion login recibida por props y le pasa por parametro lo q esta en mi estado local userData
}

    return (
        <>
            <form onSubmit={handleSubmit} /**/ > 
                <label htmlFor="email" /** */>Email: </label>
                <input type="text"
                    name="email"
                    value={userData.email}
                    onChange={handleChange} /*value={userData.email} para bindear el estado con el input*/ />
                {errors.email && <p>{errors.email}</p> /*si hay errors.mail->renderizame este msj*/}

                <label htmlFor="password">Password: </label>
                <input type="password"
                    name="password"
                    value={userData.password}
                    onChange={handleChange} /*type:password para que no se vea lo q escribe en el input*/ />
                {errors.password && <p>{errors.password}</p> /*si hay errors.password->renderizame este msj*/}

                <button type="submit">Submit</button>
            </form>

            <p>
                email = "rick_sanchez@gmail.com"
                <hr />
                password = "WubbaLubbaDubDub1" 
            </p>

        </>
    )
}

export default Forms;