//Las variables son con LET

//Metodo de salida
//console.log()
//alert("Hola Mundo")
//alert("El valor de resultado es" + " " + resultado)

//Metodo de entrada

//let usuario= prompt("Ingresa tu nombre de usuario");

//alert("Bienvenido/a a nuestra pagina web" + " " + usuario);

// Definicion del precio por botella de vino

const precioPorBotella = 1200;

// Función para calcular el precio total
function calcularPrecioTotal(cantidad) {
  return cantidad * precioPorBotella;
}

// Función para realizar una compra de vino
function comprarVino() {
  const cantidadBotellas = prompt("¿Cuántas botellas de vino deseas comprar?");

  const cantidadNumerica = parseInt(cantidadBotellas);

  // Verifica si la entrada es un número válido
  if (isNaN(cantidadNumerica)) {
    alert("Por favor, introduce un número válido.");
  } else {
    const precioTotal = calcularPrecioTotal(cantidadNumerica);

    alert(`Has comprado ${cantidadNumerica} botellas de vino.\nPrecio total: $${precioTotal}`);
  }
}

// Verifica la edad del usuario
const edadUsuario = prompt("Por favor, introduce tu edad:");
const edadNumerica = parseInt(edadUsuario);

if (isNaN(edadNumerica)) {
  alert("Por favor, introduce una edad válida.");
} else {
  if (edadNumerica < 18) {
    alert("Lo siento, debes ser mayor de 18 años para comprar vino.");
  } else {
    // Bucle que prmite al usuario comprar varias veces
    let deseaComprarMas = true;
    while (deseaComprarMas) {
      comprarVino();

      // Preguntar al usuario si desea comprar más
      const respuesta = prompt("¿Deseas comprar más botellas de vino? (sí/no)").toLowerCase();

      // Evalua la respuesta del usuario
      if (respuesta !== "sí") {
        deseaComprarMas = false;
        alert("Gracias por tu compra. ¡Hasta luego!");
      }
    }
  }
}


    



