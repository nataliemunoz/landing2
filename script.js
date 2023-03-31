function saludo() {
  alert("hola marte");
  var nombre = prompt("Ingrese su nombre: ");
  alert("hola " + nombre);
}

var inicio = document.getElementsByClassName("link")[0];

inicio.addEventListener("click", function() {
  saludo();
});

var acercade = document.getElementsByClassName("link")[1];

acercade.addEventListener("click", function() {
  alert("gracias por visitar la página");
});