// Obtener body
var fondo = document.getElementById("body");
var verFondo = false; // Verificar el color de fondo: True == Oscuro, false == claro

// Obtener boton para cambiar el fondo
var botonFondo = document.getElementById("botonFondo");

// Obtener textos para cambiar su color
var texto1 = document.getElementById("textColor");
var texto2 = document.getElementById("textSize");
var texto3 = document.getElementById("textRotation");

// Obtener cuadrado
var cuadrado = document.getElementById("cuadrado");

// Obtener Input del color
var controlColor = document.getElementById("controlColor");

// Obtener Input del tamaño
var controlTamaño = document.getElementById("controlTamaño");

// Obtener Input de rotacion
var controlRotacion = document.getElementById("controlRotacion");

// Obtener Input del texto que muestra los datos en pantalla
var textoDatos = document.getElementById("texto");

// Obtener click del boton para intercalar figura
var controlFigura = document.getElementById("botonFigura");
var datoFigura = true; // True == cuadrado y false == circulo

// Funciones necesarias para la página
function cambiarFondo(){ // Funcion para cambiar color de fondo
    if(verFondo == true){
        fondo.style.backgroundColor = "#23274a";
        botonFondo.style.backgroundColor = "#eac643";
        texto1.style.color = "#eac643";
        texto2.style.color = "#eac643";
        texto3.style.color = "#eac643";
        textoDatos.style.color = "#eac643";
        controlFigura.style.backgroundColor = "white";
        botonFondo.classList.add("botonDeterminado");
        botonFondo.classList.remove("botonClaro");
        textoDatos.innerHTML = "Dark Mode";
        verFondo = false;
    }else{
        fondo.style.backgroundColor = "#eac643";
        botonFondo.style.backgroundColor = "#505aa3";
        texto1.style.color = "#23274a";
        texto2.style.color = "#23274a";
        texto3.style.color = "#23274a";
        textoDatos.style.color = "#23274a";
        controlFigura.style.backgroundColor = "black";
        botonFondo.classList.add("botonClaro");
        botonFondo.classList.remove("botonDeterminado");
        textoDatos.innerHTML = "Light Mode";
        verFondo = true;
    }
}

function color(){
    // Obtener el valor seleccionado por el usuario
    var color = controlColor.value;
  
    // Aplicar el color al cuadrado
    cuadrado.style.backgroundColor = color;

    // Mostrar valor en pantalla
    textoDatos.innerHTML = color;
}

function tamaño(){
    const value = this.value;
    cuadrado.style.width = value + 'px';
    cuadrado.style.height = value + 'px';

    // Mostrar valor en pantalla
    textoDatos.innerHTML = value + "px";
}

function rotacion(){
    // Obtenemos el valor del Input
    const rotacion = controlRotacion.value;

    // Le decimos al cuadrado que debe girar dependiendo del valor del Input
    cuadrado.style.transform = `rotate(${rotacion}deg)`;

    // Mostrar valor en pantalla
    textoDatos.innerHTML = rotacion + "deg";
}

function figura(){
    if(datoFigura == true){
        cuadrado.classList.remove("cuadrado");
        cuadrado.classList.add("circulo");
        controlFigura.classList.remove("botonCirculo");
        controlFigura.classList.add("botonCuadrado");
        textoDatos.innerHTML = "Circle";
        datoFigura = false;
    }else{
        cuadrado.classList.remove("circulo");
        cuadrado.classList.add("cuadrado");
        controlFigura.classList.remove("botonCuadrado");
        controlFigura.classList.add("botonCirculo");
        textoDatos.innerHTML = "Square";
        datoFigura = true;
    }
}

// Obtener click de diferentes botones
botonFondo.addEventListener("click", cambiarFondo); // Boton para cambiar color fondo

// Llamar a funcion cuando se cambie el color
controlColor.addEventListener("input", color);

// Llamar a funcion cuando se cambie el tamaño
controlTamaño.addEventListener("input", tamaño);

// Llamar a funcion cuando se cambie la rotacion
controlRotacion.addEventListener("input", rotacion);

// Obtener click para cambiar de figura
controlFigura.addEventListener("click", figura);