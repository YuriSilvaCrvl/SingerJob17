// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database');
// const Artista = require('./artista');

// const Notificacoes = sequelize.define('Notificacoes', {
//     id_notificacao: { 
//         type: DataTypes.INTEGER, 
//         primaryKey: true, 
//         autoIncrement: true 
//     },
//     usuario_id: { 
//         type: DataTypes.INTEGER, 
//         allowNull: false, 
//         references: { model: Artista, key: 'id_artista' }
//     },
//     tipo: { 
//         type: DataTypes.STRING 
//     },
//     conteudo: { 
//         type: DataTypes.TEXT 
//     },
//     lido: { 
//         type: DataTypes.BOOLEAN, 
//         defaultValue: false 
//     },
// }, { 
//     timestamps: true 
// });

// module.exports = Notificacoes;
