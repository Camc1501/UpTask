const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI
//const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
//const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

// Option 2: Passing parameters separately (sqlite)
/*const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'path/to/database.sqlite'
});
*/

// Option 2: Passing parameters separately (other dialects)
const db = new Sequelize('uptasknode', 'camc', 'Camilo01', {
  host: '127.0.0.1',
  port: '3306',
  dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});


module.exports = db;