let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let cors = require('cors');

/* Swagger */
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./config/swagger.yaml');

const swaggerSpec = require('./config/openapi.json')

/* Routes */
const productRouter = require('./routes/product_routes');
const categoryRouter = require('./routes/category_routes');

let app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Middlewares
app.use(logger('dev'));
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

/* Se configura ruta raiz de la api para servir la interfaz generada con swagger */
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(productRouter);
app.use(categoryRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
