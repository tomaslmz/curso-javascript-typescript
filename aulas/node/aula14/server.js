const express = require('express');
require('dotenv').config();

const app = express();

const mongoose = require('mongoose');
const { checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware');

mongoose.connect(process.env.URL).then(() => {
    app.emit('connected')
}).catch((e) => {
    app.emit('not connected');
    console.log(e);
});

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const sessionOptions = session({
    secret: process.env.SECRET,
    store: MongoStore.create({ mongoUrl: process.env.URL }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});

app.use(sessionOptions);
app.use(flash());

const routes = require('./routes');
const path = require('path');

const helmet = require('helmet');
const csrf = require('csurf');

const port = 8081;

app.use(helmet())
// Tratando os dados do body para post
app.use(express.urlencoded({extended: true}));
// indicando para o express a pasta de arquivos estáticos
app.use(express.static('./public'));

// Definindo o local de views para o express
app.set('views', path.resolve(__dirname, 'src', 'views'));
// Definindo a engine para o express
app.set('view engine', 'ejs');

app.use(csrf());
// Definindo o middlware
app.use(csrfMiddleware)
app.use(checkCsrfError);
// Definindo o route
app.use(routes);

app.on('connected', () => {
    // Definindo a porta
    app.listen(port, () => {
        console.log('Server is online on ' + port + ' port');
    });
});
