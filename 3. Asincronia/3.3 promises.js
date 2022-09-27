/**
 * BLOQUE 4 - Solucion 2: Promises (Pending, resolve, reject)
 */

console.log("====BLOQUE 4====");

const validatePaymentPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("2. Validar Pago");

            const statusArray = [200, 500, 500, 500];
            const randomResponse = statusArray[Math.floor(Math.random() * statusArray.length)];
            if (randomResponse === 200) {
                // 200 OK
                resolve("Todo Gucci");
            } else {
                // 500 Internal Server Error
                reject("Tu tarjeta feu declinada");
            }
        }, 0);
    });
};

console.log("1. Presiona el boton de comprar");
validatePaymentPromise()
    .then((response) => {
        console.log(response);
        console.log("3. Ver el mensaje de 'Gracias'");
    })
    .then(() => {
        console.log("4. Preparando Paquete");
    })
    .catch((error) => {
        console.log("error: ", error);
    })
    .finally(() => {
        console.log("==== FINAL ====");
    });
