//Las variables son con LET

//Metodo de salida
//console.log()
//alert("Hola Mundo")
//alert("El valor de resultado es" + " " + resultado)

//Metodo de entrada

//let usuario= prompt("Ingresa tu nombre de usuario");

//alert("Bienvenido/a a nuestra pagina web" + " " + usuario);

function calcularDescuento(precio, descuento) {
  if (precio > 100) {
      let precioConDescuento = precio - (precio * (descuento / 100));
      return precioConDescuento;
  } else {
      return precio;
  }
}

function aplicarDescuentos(productos, descuento) {
  for (let i = 0; i < productos.length; i++) {
      let precioOriginal = productos[i].precio;
      let precioConDescuento = calcularDescuento(precioOriginal, descuento);
      
      console.log("Producto: " + productos[i].nombre);
      console.log("Precio original: $" + precioOriginal);
      console.log("Precio con descuento: $" + precioConDescuento);
      
      if (precioConDescuento < 50) {
          console.log("¡Oferta imperdible!");
      } else {
          console.log("¡Aprovecha este descuento!");
      }
  }
}

const listaProductos = [
  { nombre: "Producto A", precio: 120 },
  { nombre: "Producto B", precio: 80 },
  { nombre: "Producto C", precio: 40 }
];

const descuentoGlobal = 20;

console.log("Aplicando descuentos a la lista de productos:");
aplicarDescuentos(listaProductos, descuentoGlobal);


