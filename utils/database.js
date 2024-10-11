const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'activity1',
    dialect: 'mysql'
})

module.exports = sequelize;
