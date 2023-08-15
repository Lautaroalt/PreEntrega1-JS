//Las variables son con LET

//Metodo de salida
//console.log()
//alert("Hola Mundo")
//alert("El valor de resultado es" + " " + resultado)

//Metodo de entrada

//let usuario= prompt("Ingresa tu nombre de usuario");

//alert("Bienvenido/a a nuestra pagina web" + " " + usuario);

// Definir el precio por botella de vino
// Definir el precio por botella de vino
const precioPorBotella = 20;

// Función para calcular el precio total
function calcularPrecioTotal(cantidad) {
  return cantidad * precioPorBotella;
}

// Función para realizar una compra de vino
function comprarVino() {
  // Solicitar al usuario la cantidad de botellas de vino que desea comprar
  const cantidadBotellas = prompt("¿Cuántas botellas de vino deseas comprar?");

  // Convertir la entrada del usuario a un número
  const cantidadNumerica = parseInt(cantidadBotellas);

  // Verificar si la entrada es un número válido
  if (isNaN(cantidadNumerica)) {
    alert("Por favor, introduce un número válido.");
  } else {
    // Calcular el precio total
    const precioTotal = calcularPrecioTotal(cantidadNumerica);

    // Mostrar un mensaje con el detalle de la compra
    alert(`Has comprado ${cantidadNumerica} botellas de vino.\nPrecio total: $${precioTotal}`);
  }
}

// Verificar la edad del usuario
const edadUsuario = prompt("Por favor, introduce tu edad:");
const edadNumerica = parseInt(edadUsuario);

if (isNaN(edadNumerica)) {
  alert("Por favor, introduce una edad válida.");
} else {
  if (edadNumerica < 18) {
    alert("Lo siento, debes ser mayor de 18 años para comprar vino.");
  } else {
    // Bucle para permitir al usuario comprar varias veces
    let deseaComprarMas = true;
    while (deseaComprarMas) {
      comprarVino();

      // Preguntar al usuario si desea comprar más
      const respuesta = prompt("¿Deseas comprar más botellas de vino? (sí/no)").toLowerCase();

      // Evaluar la respuesta del usuario
      if (respuesta !== "sí") {
        deseaComprarMas = false;
        alert("Gracias por tu compra. ¡Hasta luego!");
      }
    }
  }
}


    



