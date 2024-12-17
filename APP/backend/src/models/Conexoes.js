// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database');
// const Artista = require('./artista');
// const Empresario = require('./empresario');

// const Conexoes = sequelize.define('Conexoes', {
//     id_conexao: { 
//         type: DataTypes.INTEGER, 
//         primaryKey: true, 
//         autoIncrement: true 
//     },
//     solicitante_id: { 
//         type: DataTypes.INTEGER, 
//         allowNull: false, 
//         references: { model: Artista, key: 'id_artista' }
//     },
//     solicitado_id: { 
//         type: DataTypes.INTEGER, 
//         allowNull: false, 
//         references: { model: Empresario, key: 'id_empresario' }
//     },
//     status: { 
//         type: DataTypes.STRING, 
//         defaultValue: 'pendente' 
//     },
// }, { 
//     timestamps: true 
// });

// module.exports = Conexoes;
