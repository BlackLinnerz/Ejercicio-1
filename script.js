document.getElementById("registro").addEventListener("submit", function(e){

e.preventDefault();

let nombre = document.getElementById("nombre").value;

document.getElementById("mensaje").innerText =
"Registro enviado correctamente. Bienvenido " + nombre + "!";

});