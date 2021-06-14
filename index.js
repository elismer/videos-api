const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const { config } = require('./config/index');
const categoriesApi = require('./routes/categories.js');

const {
  logErrors,
  wrapErrors,
  errorHandler,
} = require('./utils/middleware/errorHandlers.js');
const notFoundHandler = require('./utils/middleware/notFoundHandler');

const swaggerDoc = require('./swagger.json');

// body parser
app.use(express.json());

// routes
categoriesApi(app);

// Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

// Catch 404
app.use(notFoundHandler);

// Errors middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`);
});
