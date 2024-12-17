// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database');
// const Artista = require('./artista');

// const Postagens = sequelize.define('Postagens', {
//     id_postagem: { 
//         type: DataTypes.INTEGER, 
//         primaryKey: true, 
//         autoIncrement: true 
//     },
//     autor_id: { 
//         type: DataTypes.INTEGER, 
//         allowNull: false, 
//         references: { model: Artista, key: 'id_artista' }
//     },
//     conteudo: { 
//         type: DataTypes.TEXT, 
//         allowNull: false 
//     },
//     tipo_postagem: { 
//         type: DataTypes.STRING 
//     },
// }, { 
//     timestamps: true 
// });

// module.exports = Postagens;
