
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
            console.log ("No suficientes productos para la cantidad solicitada");
        }else{
            this.stock = this.stock - cantidad;
        }
    }
}

const cerveza1 = new Producto ("Witbier", 300, "1 lts", 10 );
const cerveza2 = new Producto ("Pale Ale", 450,"1 lts", 20 );
const cerveza3 = new Producto ("Wite IPA", 400, "1 lts", 40 );
const cerveza4 = new Producto ("Dry Stout", 300,"1 lts", 12 );
const cerveza5 = new Producto ("Wite IPA", 300, "1 lts", 10 );
const cerveza6 = new Producto ("Wite IPA", 300, "1 lts", 10 );
const cerveza7 = new Producto ("Wite IPA", 300, "1 lts", 10 );
const cerveza8 = new Producto ("Wite IPA", 300, "1 lts", 10 );
console.log (cerveza1);
console.log (cerveza2);
cerveza1.vender(11);
cerveza2.vender(1);
console.log (cerveza1);
console.log (cerveza2);


const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const iva = x => x * 0.21;
let precioProducto = 400;
let descuento = 100;

let precioFinal = resta (suma (precioProducto, iva (precioProducto)), descuento);
console.log ( "El precio abonar es de " + precioFinal);
