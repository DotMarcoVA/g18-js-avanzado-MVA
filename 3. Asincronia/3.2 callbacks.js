/**
 * BLOQUE 3 - Solucion 1 CALLBACKS
 * Un callback es una funcion que pasamos como parametro a otra funcion,
 * Con el fin de ejecutar la funcion que pasa como parametro en el
 * momento que queramos
 * NOTA: No es buena practica utilizar callbacks por que se van anidando
 * y el codigo se vuelve ilegible
 */
console.log("====BLOQUE 3====");

const showSuccessMessage = () => {
    console.log("3. Ver el mensaje de 'Gracias'");
};

const validatePayment = (showSuccessMessage) => {
    setTimeout(() => {
        console.log("2. Validar Pago");
        showSuccessMessage();
    }, 0);
};
console.log("1. Presiona el boton de comprar");
validatePayment(showSuccessMessage);
