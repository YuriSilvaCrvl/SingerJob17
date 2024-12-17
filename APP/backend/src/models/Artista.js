// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database');

// const Artista = sequelize.define('Artista', {
//     id_artista: { 
//         type: DataTypes.INTEGER, 
//         primaryKey: true, 
//         autoIncrement: true 
//     },
//     nome: { 
//         type: DataTypes.STRING, 
//         allowNull: false 
//     },
//     email: { 
//         type: DataTypes.STRING, 
//         allowNull: false, 
//         unique: true,
//         validate: {
//             isEmail: true // Adicionando validação de email
//         }
//     },
//     senha: { 
//         type: DataTypes.STRING, 
//         allowNull: false 
//     },
//     endereco: { 
//         type: DataTypes.STRING 
//     },
//     telefone: { 
//         type: DataTypes.STRING 
//     },
//     genero: { 
//         type: DataTypes.STRING 
//     },
//     tipo_arte: { 
//         type: DataTypes.STRING 
//     },
//     biografia: { 
//         type: DataTypes.TEXT 
//     },
//     portfolio: { 
//         type: DataTypes.TEXT 
//     },
// }, { 
//     timestamps: true 
// });

// module.exports = Artista;
