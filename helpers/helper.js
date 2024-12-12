console.log('Helpers !!!!   HEEEEELOOOOO');

console.log(__dirname);
console.log(__filename);

const http = require('node:http');

const foo = () => {

    const server = http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            data: 'Hello World!',
        }));
    });

    server.listen(5000);
};

module.exports = {foo};