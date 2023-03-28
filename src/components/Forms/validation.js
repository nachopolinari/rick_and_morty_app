const validation = (userData) => { //esta es una funcion que va a recibir userData como parametro para comparar email y password
    let errors = {}; //este es un objeto donde guardaremos todos los errores encontrados.

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(userData.email)) { //con regex testeo que lo que usuario ingresa sea un mail 
        errors.email = "El email es invalido";                   //si no lo es arrojo este msj
    }
    if (!userData.email) {                                       //si el campo esta vacio, es decir no hay userData.email
        errors.email = "Este campo no puede estar vacío";
    }
    if (userData.email.length > 35) {                            //si el campo tiene mas de 35 caracteres..
        errors.email = "El email no puede superar los 35 carácteres.";
    }
    if (!userData.password.match(/\d/)) {                            // si el password  NO matchea con numeros...
        errors.password = "La contraseña debe contener al menos un numero"
    }

    if (userData.password.length < 6 || userData.password.length > 10) { //si la longitud de password es menor que 6 o mayor que 10...
        errors.password = "La contraseña debe contener entre 6 y 10 carácteres." // TODOS ESTOS TAMB PODRIAN HABER SIDO UN REGEX
    }
    return errors;     //retorname este objeto errors armado...
}

export default validation;