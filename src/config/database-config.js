const pgp = require("pg-promise")({});
const dotenv = require('dotenv');
dotenv.config();
const env = process.env;

const databaseConfig = {
    user: env.USER,
    host: env.PGHOST,
    database: env.PGDATABASE,
    password: env.PGPASSWORD,
    port: env.PGPORT,
}

const db = pgp(databaseConfig);
module.exports = db;
