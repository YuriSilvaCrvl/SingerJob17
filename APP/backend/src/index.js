const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');

const postagensRoutes = require('./routes/postagensRoutes');
const conexoesRoutes = require('./routes/conexoesRoutes');
const notificacoesRoutes = require('./routes/notificacoesRoutes');
const avaliacoesRoutes = require('./routes/avaliacoesRoutes');
const mensagensRoutes = require('./routes/mensagensRoutes');
const home = require('./routes/home');
const app = express();
const conn = require("./config/database")
const router = require("./routes/routes")

// Middlewares
app.use(bodyParser.json()); // Analisa as requisições no formato JSON
app.use(cors()); // Habilita o CORS para todas as rotas
app.use(router)

const PORT = process.env.PORT || 3000; // Configuração da porta com fallback para 3000
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

conn.connect((err)=>{
    if(err) throw err;
    console.log("banco de dados conectado")
})



// Rotas principais
// app.use(home);
// app.use('/artistas', artistaRoutes);
// app.use('/empresarios', empresarioRoutes);
// app.use('/postagens', postagensRoutes);
// app.use('/conexoes', conexoesRoutes);
// app.use('/notificacoes', notificacoesRoutes);
// app.use('/avaliacoes', avaliacoesRoutes);
// app.use('/mensagens', mensagensRoutes);

// // Rota para verificar se a API está funcionando
// app.get('/', (req, res) => {
//     res.send('API rodando com sucesso!');
// });

// // Sincronização com o banco de dados
// sequelize.sync({ alter: true })
//     .then(() => console.log('Banco de dados sincronizado com sucesso!'))
//     .catch(err => console.error('Erro ao sincronizar o banco de dados:', err));

// Inicialização do servidor
