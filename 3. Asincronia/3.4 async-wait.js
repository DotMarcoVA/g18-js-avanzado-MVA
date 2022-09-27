/**
 * BLOQUE 5 - Solucoin 3 Async Await
 */

console.log("==== BLOQUE 5 ====");

const validatePaymentPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("2. Validar Pago");

            const statusArray = [200, 500];
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

async function main() {
    console.log("1. Presiona el boton de comprar");

    try {
        await validatePaymentPromise();
        console.log("3. Ver el mensaje de 'Gracias'");
        console.log("4. Preparando Paquete");
        console.log("==== FINAL ====");
        console.log("==== FINAL 2 ====");
    } catch (error) {
        console.log("error: ", error);
    }
}

main();
