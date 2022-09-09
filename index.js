
// VERIFICACION DE EDAD PARA HTML PORFAVOR DESCOMENTAR PARA CORRER EN NAVEGADOR

/* let edad = parseInt (prompt ("Ingrese su edad"));

while ( edad < 18) {
    alert ("Prohibido ingresar, el consumo de bebidas alcholicas es para mayores de 18 años");
    edad = parseInt (prompt ("Ingrese su edad"));
}
    alert ("Puede ingresar.");*/


class Producto{
    constructor(nombre, precio,envase, stock){
        this.nombre = nombre;
        this.precio = precio;
        this.envase = envase;
        this.stock =  stock;
    }
    vender(cantidad){
        if ( this.stock - cantidad < 0){
            console.log ("No hay suficientes productos para la cantidad solicitada");
        }else{
            this.stock = this.stock - cantidad;
        }
    }
}

const cerveza1 = new Producto ("Witbier", 300, "1 lts", 10 );
const cerveza2 = new Producto ("Pale Ale", 450,"1 lts", 20 );
const cerveza3 = new Producto ("Wite IPA", 400, "1 lts", 40 );
const cerveza4 = new Producto ("Dry Stout", 300,"1 lts", 12 );
const cerveza5 = new Producto ("Wite IPA", 290, "1 lts", 30 );
const cerveza6 = new Producto ("Wite IPA", 380, "1 lts", 20 );
const cerveza7 = new Producto ("Wite IPA", 380, "1 lts", 12 );
const cerveza8 = new Producto ("Wite IPA", 450, "1 lts", 15 );
console.log (cerveza1);
console.log (cerveza2);
cerveza1.vender(11);
cerveza2.vender(1);
console.log (cerveza1);
console.log (cerveza2);

// PRECIO TOTAL A ABONAR
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const iva = x => x * 0.21;
let precioProducto = 400;
let descuento = 100;

let precioFinal = resta (suma (precioProducto, iva (precioProducto)), descuento);
console.log ( "El precio abonar es de " + precioFinal); 

// ARREGLO CON CERVEZAS
const cervezas = [
    {id: 1, nombre: "Witbier", precio: 300, envase: "1 lts", marca: "Oceanica", stock: 10 },
    {id: 2, nombre: "Pale Ale", precio: 450, envase: "1 lts",marca: "Oceanica", stock: 20 },
    {id: 3, nombre: "Wite IPA", precio: 400, envase: "1 lts",marca: "Oceanica", stock: 40 },
    {id: 4, nombre: "Dry Stout", precio: 300, envase: "1 lts",marca: "Oceanica", stock: 12 },
    {id: 5, nombre: "K7 Doble IPA", precio: 290, envase: "1 lts",marca: "Barbarian", stock: 30 },
    {id: 6, nombre: "174 IPA", precio: 380, envase: "1 lts",marca: "Barbarian", stock: 20 },
    {id: 7, nombre: "Garaje Brown ALE", precio: 380, envase: "1 lts",marca: "Barbarian", stock: 12 },
    {id: 8, nombre: "LIMA pale ALE", precio: 450, envase: "1 lts",marca: "Barbarian", stock: 15 },
]

console.log(cervezas);

// PROMOCION DESCUENTO DE IVA PARA CERVEZAS
let descuentoProductos = cervezas.map (item => {
    return {
        id: item.id,
        nombre: item.nombre,
        precio: item.precio - item.precio * 0.21,
    }
})

console.log(descuentoProductos);

// TOTAL CARRITO
const carrito = [
    {id: 1, nombre: "Witbier", precio: 300, envase: "1 lts" },
    {id: 2, nombre: "Pale Ale", precio: 450, envase: "1 lts" },
    {id: 3, nombre: "Wite IPA", precio: 400, envase: "1 lts" },
];

let total = carrito.reduce (( acumulador, item) => acumulador + item.precio, 0);
console.log("Usted debe abonar un total de " + total);

//FILTRADO DE CARRITO POR PRECIO
let seleccionCarrito = carrito.filter (item => item.precio > 300);
console.log (seleccionCarrito);

//FILTRADO DE STOCK TOTAL POR PRECIO
let seleccionDeStock = cervezas.filter (item => item.precio > 350);
console.log (seleccionDeStock);

//BUSQUEDA DE CERVEZA POR MARCA PORFAVOR DESCOMENTRA PARA CORRERLO POR HTML

/* let marca1 = prompt ("ingrese la marca del producto a buscar").toLowerCase();
let producto = cervezas.filter (item => item.marca.toLowerCase() === marca1);
let mensajeFinal = producto.reduce ((acumulador, item) => {
    let mensaje = `
Nombre: ${item.nombre}
Precio: ${item.precio}
Marca: ${item.marca}
`;
return acumulador + mensaje;
} ,""
    )
alert(mensajeFinal); */