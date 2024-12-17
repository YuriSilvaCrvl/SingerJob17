// const sequelize = require('../config/database');
// const Artista = require('./artista');
// const Empresario = require('./empresario');
// const Postagens = require('./postagens');
// const Conexoes = require('./conexoes');
// const Notificacoes = require('./notificacoes');
// const Avaliacoes = require('./avaliacoes');
// const Mensagens = require('./mensagens');

// // Definindo os relacionamentos
// Artista.hasMany(Postagens, { foreignKey: 'autor_id' });
// Artista.hasMany(Conexoes, { foreignKey: 'solicitante_id' });
// Artista.hasMany(Notificacoes, { foreignKey: 'usuario_id' });
// Artista.hasMany(Avaliacoes, { foreignKey: 'avaliador_id' });

// Empresario.hasMany(Conexoes, { foreignKey: 'solicitado_id' });
// Empresario.hasMany(Avaliacoes, { foreignKey: 'avaliado_id' });
// Empresario.hasMany(Mensagens, { foreignKey: 'destinatario_id' });

// module.exports = {
//     sequelize,
//     Artista,
//     Empresario,
//     Postagens,
//     Conexoes,
//     Notificacoes,
//     Avaliacoes,
//     Mensagens,
// };
