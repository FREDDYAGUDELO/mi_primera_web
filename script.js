//alert("Hola este es mi Javascript");

let nombre = "Freddy";
nombre = "Yhon";

var nombre1 = "Freddy";

const nombre2 = "Freddy";
//nombre2 = "Yhon";

console.log(nombre);
console.log(nombre1);
console.log(nombre2); 

// SELECCIONAR ELEMENTOS 

let contenidoTitulo = "nombre";

let textoTitulo = documento.queySelector(".logo .fuente-")
textoTitulo.innerHTML = contenidoTitulo;

// CONDICIONALES
let textoTitulo = titulo.innerText;
console.log(textoTitulo);

if (textoTitulo == "nombre") {
    titulo.innerHTML = "otro";
} else {
    console.log("no se cumple");
}

//FUNCIONES

let nombre = "YHON";
let ciudad = "Bogota-Colombia";
let gusto = "chocolate";

let parrafo = documento.queySelector(".parrafo2");

function nombredelafuncion(){

}

function cambiarTexto(nombre, ciudad, gusto) {
    let contenido = 'Me llamo ${nombre}, vivo en ${ciudad}. tengo 33 años, Me gusta el ${gusto} y salir a pasear en días de sol. el cine, la musica, lapesca, tambien soy amante a DBZ. Me encantaría aprender a programar para poder ayudar a las personas a mostrar lo que hacen. Tambien soy Enfermero llevo 13 años en esta profesion, Me he desempeñado en todos los servivios de hospitalizacion, UCI, UCE, Vacunación, Referencia y contrarreferencia, Aplicación de medicamentos de alto costo, Sistema de PQRS, Cuentas de alto costo, Gestión del riesgo de pacientes con enfermedades crónicas y autoinmunes. Con calidad de trabajo, motivado y responsable.';

    return contenido;
}

parrafo.innerText = cambiarTexto(nombre, ciudad, gusto)

let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {

  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
}

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});