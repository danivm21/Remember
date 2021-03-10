function loginUsuario(){
    let email = document.getElementById("inputEmail").value
    let contraseña = document.getElementById("inputPassword").value

    let emailActual = ""
    let contraseñaActual= ""
    
    for(i=1; i<localStorage.length; i++){
      if (JSON.parse(localStorage.getItem('usuario' + i))){
        emailActual = JSON.parse(localStorage.getItem('usuario' + i)).email
        usuarioActual = JSON.parse(localStorage.getItem('usuario' + i)).nombre
        contraseñaActual = JSON.parse(localStorage.getItem('usuario' + i)).contraseña
      }
      if (emailActual === email && contraseñaActual === contraseña){
          window.location.assign("./remember.html")
          sessionStorage.setItem("usuarioActual", usuarioActual)
      }
      else {
        document.getElementById("error").innerHTML = "Error: Recuerda introducir todos los datos correctamente o registrarte"
      }
    }
  }