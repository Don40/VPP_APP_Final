const { Pool } = require('pg');

const pool = new Pool({
    user: 'root',
    host: 'localhost',
    database: 'vpp',
    password: '',
    port: 8080, // PostgreSQL default port
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};
