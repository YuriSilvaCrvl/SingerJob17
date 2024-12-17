// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database');
// const Artista = require('./artista');
// const Empresario = require('./empresario');

// const Avaliacoes = sequelize.define('Avaliacoes', {
//     id_avaliacao: { 
//         type: DataTypes.INTEGER, 
//         primaryKey: true, 
//         autoIncrement: true 
//     },
//     avaliador_id: { 
//         type: DataTypes.INTEGER, 
//         allowNull: false, 
//         references: {
//             model: Artista,
//             key: 'id_artista'
//         }
//     },
//     avaliado_id: { 
//         type: DataTypes.INTEGER, 
//         allowNull: false, 
//         references: {
//             model: Empresario,
//             key: 'id_empresario'
//         }
//     },
//     nota: { 
//         type: DataTypes.INTEGER, 
//         allowNull: false, 
//         validate: {
//             min: 1,
//             max: 5
//         }
//     },
//     comentario: { 
//         type: DataTypes.TEXT, 
//         allowNull: true 
//     }
// }, { 
//     timestamps: true,
//     tableName: 'Avaliacoes'
// });

// // Relacionamentos
// Artista.hasMany(Avaliacoes, { foreignKey: 'avaliador_id' });
// Empresario.hasMany(Avaliacoes, { foreignKey: 'avaliado_id' });
// Avaliacoes.belongsTo(Artista, { foreignKey: 'avaliador_id' });
// Avaliacoes.belongsTo(Empresario, { foreignKey: 'avaliado_id' });

// module.exports = Avaliacoes;
