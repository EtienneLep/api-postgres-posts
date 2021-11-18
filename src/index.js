//point d'entrée de l'API
const express = require('express');
const router = require('./api/v1/routes');
const apiErrorHandler = require('./api/v1/middleware/errors/api-error-handler');
const dotenv = require('dotenv');

const app = express();
app.use(express.json());
app.use('/v1',router);
app.use(apiErrorHandler);

dotenv.config();
app.listen(process.env.SERVERPORT, () => console.log(`Server running on port ${process.env.SERVERPORT}.`));

