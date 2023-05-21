const express =  require('express');

const app = express();

app.get('/primeiraRota', (req, res)=>{
    res.send("Hello World");
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000/primeiraRota');
  });

