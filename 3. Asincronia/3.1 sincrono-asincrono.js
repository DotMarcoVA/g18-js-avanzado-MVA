/**
 * BLOQUE 1 - CODIGO SINCRONO
 * Una linea se ejecuta despues de la anterior
 * no hay codigo dependiente o bloqueante
 */

/* console.log("====BLOQUE 1====");
console.log("Primero");
console.log("Segundo");
console.log("Tercero"); */

/**
 * BLOQUE 2 - Problema tipico de asincronia
 */

console.log("====BLOQUE 2====");
const validatePayment = () => {
    setTimeout(() => {
        console.log("2. Validar Pago");
    }, 0);
};
console.log("1. Presiona el boton de comprar");
validatePayment();
console.log("3. Ver el mensaje de 'Gracias'");

/**
 * BLOQUE 3 - Problema tipico de asincronia
 */
