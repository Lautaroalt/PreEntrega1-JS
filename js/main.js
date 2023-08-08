//Las variables son con LET

//Metodo de salida
//console.log()
//alert("Hola Mundo")
//alert("El valor de resultado es" + " " + resultado)

//Metodo de entrada

//let usuario= prompt("Ingresa tu nombre de usuario");

//alert("Bienvenido/a a nuestra pagina web" + " " + usuario);

let edad= parseInt(prompt("Ingresa tu edad para continuar"));
    if (edad<18){
        alert("El consumo de alcohol esta prohibido para jovenes menores de 18 años")  
        
    } else{
        alert("Bienvenido a Bodega Santander!")
    }

  
let precioPorBotella = 2000;

const cantidadBotellas = prompt("¿Cuántas botellas de vino deseas comprar?");


const cantidadNumerica = parseInt(cantidadBotellas);


if (isNaN(cantidadNumerica)) {
  alert("Por favor, introduce un número válido.");
} else {
  
  const precioTotal = cantidadNumerica * precioPorBotella;

  
  alert(`Has comprado ${cantidadNumerica} botellas de vino.\nPrecio total: $${precioTotal}`);
}



alert("Compra exitosa, su producto esta siendo preparado. Muchas gracias!")


