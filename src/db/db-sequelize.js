const { Sequelize } = require('sequelize');
const config = require('../startup/config');

const sequelize = new Sequelize(
    config.db_name, 
    config.db_user, 
    config.db_pass,
    {
        host:  config.host,
        port: config.db_port,
        dialect: 'mysql',
        logging: config.node_env !== 'production'
    }
);


module.exports = sequelize;