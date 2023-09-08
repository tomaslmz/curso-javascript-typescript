const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

const port = 8081;

// Tratando os dados do body para post
app.use(express.urlencoded({extended: true}));
// indicando para o express a pasta de arquivos estáticos
app.use(express.static('./public'));

// Definindo o local de views para o express
app.set('views', path.resolve(__dirname, 'src', 'views'));
// Definindo a engine para o express
app.set('view engine', 'ejs');

// Definindo o route
app.use(routes);

// Definindo a porta
app.listen(port, () => {
    console.log('Server is online on ' + port + ' port');
});