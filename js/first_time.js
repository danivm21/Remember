// Check primera vez en la página web
var firstTime = localStorage.getItem("first_time");
if(!firstTime) {
    // Página primera vez cargada
    localStorage.clear();
    localStorage.setItem("first_time","1");

    // Crea un usuario por si no se quiere registrar uno para probar la página
        let usuario = {
            "nombre": "prueba",
            "email": "prueba@gmail.com",
            "contraseña": "1234"
        }
        localStorage.setItem("usuario" + localStorage.length, JSON.stringify(usuario))
}