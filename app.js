const express = require('express');

const router = require('./routes');
const swaggerUI = require('swagger-ui-express');
const swaggerJson = require('./docs/swagger.json');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', swaggerUI.serve, swaggerUI.setup(swaggerJson));

app.use(router);

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
