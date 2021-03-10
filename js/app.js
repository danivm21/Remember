let body = document.getElementById("recuerdos")

// Recoger cada categoria
function peliculas(){
  fetch('./js/peliculas.json')
    .then(response => response.json())
    .then(data => data.forEach(element => body.insertAdjacentHTML("beforeend", "<div class='card' style='width: 18rem;'> <img src='" + element.img + "' class='card-img-top'> <div class='card-body'> <i class='fas fa-film' style='float:right;'></i> <h5 class='card-title'>" + element.titulo + "</h5> <h6 class='card-subtitle mb-2 text-muted'> Duración: " + element.duracion + "</h6> <h6 class='card-subtitle mb-2 text-muted'> Director/es: " + element.directores + "</h6> <h6 class='card-subtitle mb-2 text-muted'> Año: " + element.año + "</h6> </div> </div>"
    )));
}

function series(){
  fetch('./js/series.json')
    .then(response => response.json())
    .then(data => data.forEach(element => body.insertAdjacentHTML("beforeend", "<div class='card' style='width: 18rem;'> <img src='" + element.img + "' class='card-img-top'> <div class='card-body'> <i class='fas fa-video' style='float:right;'></i> <h5 class='card-title'>" + element.titulo + "</h5> <h6 class='card-subtitle mb-2 text-muted'> Temporadas: " + element.temporadas + "</h6> <h6 class='card-subtitle mb-2 text-muted'> Director/es: " + element.directores + "</h6> <h6 class='card-subtitle mb-2 text-muted'> Año: " + element.año + "</h6> </div> </div>"
    )));
}

function canciones(){
fetch('./js/canciones.json')
  .then(response => response.json())
  .then(data => data.forEach(element => body.insertAdjacentHTML("beforeend", "<div class='card' style='width: 18rem;'> <img src='" + element.img + "' class='card-img-top'> <div class='card-body'> <i class='fas fa-music' style='float:right;'></i><h5 class='card-title'>" + element.titulo + "</h5> <h6 class='card-subtitle mb-2 text-muted'> Autor: " + element.autor + "</h6> <h6 class='card-subtitle mb-2 text-muted'> Duración: " + element.duracion + "</h6> <h6 class='card-subtitle mb-2 text-muted'> Año: " + element.año + "</h6> </div> </div>"
  )));
}

function videojuegos(){
fetch('./js/videojuegos.json')
  .then(response => response.json())
  .then(data => data.forEach(element => body.insertAdjacentHTML("beforeend", "<div class='card' style='width: 18rem;'> <img src='" + element.img + "' class='card-img-top'> <div class='card-body'> <i class='fas fa-gamepad' style='float:right;'></i><h5 class='card-title'>" + element.titulo + "</h5> <h6 class='card-subtitle mb-2 text-muted'> Creador: " + element.creador + "</h6> <h6 class='card-subtitle mb-2 text-muted'> Año: " + element.año + "</div> </div>"
  )));
}

function restaurantes(){
fetch('./js/restaurantes.json')
  .then(response => response.json())
  .then(data => data.forEach(element => body.insertAdjacentHTML("beforeend", "<div class='card' style='width: 18rem;'> <img src='" + element.img + "' class='card-img-top'> <div class='card-body'> <i class='fas fa-utensils' style='float:right;'></i><h5 class='card-title'>" + element.nombre + "</h5> <h6 class='card-subtitle mb-2 text-muted'> Localidad: " + element.localidad + "</div> </div>"
  )));
}

function hoteles(){
fetch('./js/hoteles.json')
  .then(response => response.json())
  .then(data => data.forEach(element => body.insertAdjacentHTML("beforeend", "<div class='card' style='width: 18rem;'> <img src='" + element.img + "' class='card-img-top'> <div class='card-body'> <i class='fas fa-hotel' style='float:right;'></i><h5 class='card-title'>" + element.nombre + "</h5> <h6 class='card-subtitle mb-2 text-muted'> Localidad: " + element.localidad + "</div> </div>"
  )));
}

function viajes(){
fetch('./js/viajes.json')
  .then(response => response.json())
  .then(data => data.forEach(element => body.insertAdjacentHTML("beforeend", "<div class='card' style='width: 18rem;'> <img src='" + element.img + "' class='card-img-top'> <div class='card-body'> <i class='fas fa-plane' style='float:right;'></i><h5 class='card-title'>" + element.destino + "</h5> <h6 class='card-subtitle mb-2 text-muted'> </h6> <h6 class='card-subtitle mb-2 text-muted'> Dias: " + element.dias + "</h6> </div> </div>"
  )));
}

// Función concreta para recoger todas las categorias a la vez
function mostrarTodo(){
  peliculas()
  series()
  canciones()
  videojuegos()
  restaurantes()
  hoteles()
  viajes()
}

// Filtro que se utiliza para mostrar la categoria que se desee
function filtro(){
  if (lista.value == 0){
    body.innerHTML = ""
    mostrarTodo()
  }
  if (lista.value == 1){
    body.innerHTML = ""
    peliculas()
    click = 1
  }
  if (lista.value == 2){
    body.innerHTML = ""
    series()
  }
  if (lista.value == 3){
    body.innerHTML = ""
    canciones()
  }
  if (lista.value == 4){
    body.innerHTML = ""
    videojuegos()
  }
  if (lista.value == 5){
    body.innerHTML = ""
    restaurantes()
  }
  if (lista.value == 6){
    body.innerHTML = ""
    hoteles()
  }
  if (lista.value == 7){
    body.innerHTML = ""
    viajes()
  }
}

let lista = document.getElementById("lista")

lista.addEventListener("click", filtro())

// Muestra el nombre de usuario en la pagina principal
function mostrarUsuario(){
  document.getElementById("usuario").innerHTML = sessionStorage.getItem("usuarioActual")
}

mostrarUsuario()

// Checkea si un usuario está logueado, si no lo está vuelve a la página login
function usuarioLog(){
  if (!sessionStorage.getItem("usuarioActual")){
    window.location.assign("./index.html")
  }
}

usuarioLog()

// Cierra la sesión del usuario actual
function cerrarSesion() {
  sessionStorage.removeItem("usuarioActual")
  window.location.assign("./index.html")
}