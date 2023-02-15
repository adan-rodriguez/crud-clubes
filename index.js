const http = require("http");

const PUERTO = 8080;

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("Hola Mundo!");
});

console.log(`Escuchando en el puerto ${PUERTO}`);

server.listen(PUERTO);
