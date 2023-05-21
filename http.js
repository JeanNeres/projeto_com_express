const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.writeHead(200, {'Content-type': 'text/plain'});
        res.end('Ola mundo, sem Express!');
    }else{
        res.writeHead(404, {'Content-type': 'text/plain'});
        res.end('Pagina não encontrada!')
    }
 
});

const port = 3000;
server.listen(port,()=>{
    console.log('Servidor rodando em http://localhost:3000');
});