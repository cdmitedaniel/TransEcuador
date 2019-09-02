const express = require ('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const mongodb = require('./database');

console.log('Port:', port);

//Settings
app.set('port', port);
const bodyParserURLEncoded = bodyParser.urlencoded({extended:true})


//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParserURLEncoded)
app.use(cors({origin: 'http://localhost:4200'}));
app.use(function (req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//Routes
app.use('/user',require('./routes/user.routes'));
app.use('/auth',require('./routes/auth.routes'));
app.use('/ruta',require('./routes/ruta.routes'));
app.use('/horario',require('./routes/horario.routes'));
app.use('/asiento',require('./routes/asiento.routes'));
app.use('/pago',require('./routes/pago.routes'));


//Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port ' + port);
});
