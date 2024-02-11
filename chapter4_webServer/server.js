const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 3000;
const server = http.createServer((request, response) => {
    // server deals with response and request
    // response.writeHead(200, {'Content-Type': 'text/html'});
    // response.end('Server is working')
    response.writeHead(200, {'Content-Type': 'text/html'});
    // if it is HTML then we have to make use of FS
    fs.readFile(path.join(__dirname, 'index.html'), 'utf-8', (err, data) => {
        if(err){
            response.writeHead(404);
            response.write('PAGE NOT FOUND');
        }
        else{
            response.write(data);
        }
        response.end();
    })
});

server.listen(port, (err) => {
    if(err) throw err;
    console.log(`Server is listening on PORT: ${port}`);
});