// localhost:8080 => JSON {message: "Hola desde Index"}
// localhost:8080/patitos => JSON { data: [ { name = "donald"}, { name = "lucas"}]}
// localhost:8080/pokemones => Not Found
// localhost:8080/admin => 401
var colors = require("colors");
const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((request, response) => {
    const urlObject = url.parse(request.url);
    console.log(urlObject);
    // const path = urlObject.path;
    const { path } = urlObject; // destructuring
    let fileSystemPath = "";

    if (path === "/") {
        fileSystemPath = "static/index.json";
    } else if (path === "/patitos") {
        fileSystemPath = "static/patitos.json";
    } else if (path === "/admin") {
        const status = 401; // Not Autorized
        const mymeType = { "Content-type": "text/plain" };
        response.writeHead(status, mymeType);
        response.write("Acceso no Autorizado");
        response.end();
    } else {
        fileSystemPath = `static${path}`;
    }

    fs.stat(fileSystemPath, (error) => {
        if (!error) {
            // OK
            fs.readFile(fileSystemPath, (error, file) => {
                if (!error) {
                    const status = 200; // Ok
                    const mymeType = { "Content-type": "application/json" };
                    response.writeHead(status, mymeType);
                    response.write(file);
                    response.end();
                } else {
                    const status = 500; // Server Internal Error
                    const mymeType = { "Content-type": "text/plain" };
                    response.writeHead(status, mymeType);
                    response.write("Error en el Servidor");
                    response.end();
                }
            });
        } else {
            // Error Not Found
            const status = 404;
            const mymeType = { "Content-type": "text/html" };
            response.writeHead(status, mymeType);
            response.write(`<html> <body> <img src="https://http.cat/404" alt=""> </body> </html>`);
            response.end();
        }
    });
});

server.listen(8080);
console.log("Server ejecutandose...".rainbow);
console.log("Server ejecutandose...".trap);
console.log("Server ejecutandose...".inverse);
