
const { createPool } = require('mysql2/promise');


module.exports = connect = async () => {

    const connection = await createPool({
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'mysql',
        connectionLimit: 10
    });

    return connection;

}