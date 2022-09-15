const fs = require("fs");

const path = "./";

const fileName = "my-file.txt";
const contentFile = "Documento Creado";
const destination = `${path}${fileName}`;

fs.writeFile(destination, contentFile, (err) => {
    if (err) {
        throw err;
    } else {
        console.log("Archivo Creado con Exito");
    }
});
