// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database');
// const Artista = require('./artista');
// const Empresario = require('./empresario');

// const Mensagens = sequelize.define('Mensagens', {
//     id_mensagem: { 
//         type: DataTypes.INTEGER, 
//         primaryKey: true, 
//         autoIncrement: true 
//     },
//     remetente_id: { 
//         type: DataTypes.INTEGER, 
//         allowNull: false, 
//         references: { model: Artista, key: 'id_artista' }
//     },
//     destinatario_id: { 
//         type: DataTypes.INTEGER, 
//         allowNull: false, 
//         references: { model: Empresario, key: 'id_empresario' }
//     },
//     conteudo: { 
//         type: DataTypes.TEXT, 
//         allowNull: false 
//     },
// }, { 
//     timestamps: true 
// });

// module.exports = Mensagens;
