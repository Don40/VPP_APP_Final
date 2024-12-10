const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'ctc',
    password: '',
    port:5432,
    // port: 8080, // PostgreSQL default port
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};
