function registrarUsuario(){
    let nombreUsuario = document.getElementById("signupName").value
    let email = document.getElementById("signupEmail").value
    let contraseña = document.getElementById("signupPassword").value
    
    const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    function duplicado() {
        for(i=1; i<localStorage.length; i++){
            if (JSON.parse(localStorage.getItem('usuario' + i)).email === email){
                return true
            }
        }
    }

    if (nombreUsuario && EMAIL_REGEX.test(String(email)) && contraseña && !duplicado()){
        let usuario = {
            "nombre": nombreUsuario,
            "email": email,
            "contraseña": contraseña
        }
        localStorage.setItem("usuario" + localStorage.length, JSON.stringify(usuario))
        document.getElementById("created").innerHTML = "Cuenta creada satisfactoriamente!"
        document.getElementById("error").innerHTML = ""
    }
    else {
        document.getElementById("created").innerHTML = ""
        document.getElementById("error").innerHTML = "Error creando cuenta: No se han introducido correctamente todos los datos o el email ya está registrado"
    }
}