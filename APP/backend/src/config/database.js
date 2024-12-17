const { Sequelize } = require('sequelize');
const mysql = require("mysql2")
require('dotenv').config();

const conexao = mysql.createConnection({
    user: "root",
    host : process.env.DB_HOST,
    database : "singerjob",
    port : 3306
})


// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//     host: process.env.DB_HOST,
//     dialect: process.env.DB_DIALECT,
//     logging: false,
// });

module.exports = conexao;
