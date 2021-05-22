const express = require("express");
const app = express();
const routes = require('./routes/routes');
const path = require("path");

//Configuraciones
app.set("port", process.env.PORT || 8080);
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, 'views'));

//Middlewares
app.use(express.urlencoded({extended: false}));

//Routes
app.use('/', routes);

//Servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor conectado en puerto ${app.get('port')}`);
});