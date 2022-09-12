const mysql = require('mysql2/promise');

const db = async (sql,params) => {
    const connection = await mysql.createConnection({host: 'localhost', user: 'root',database: 'TUITAPI'});
    const response = await connection.execute(sql,params);
    return response;
}

module.exports = db;