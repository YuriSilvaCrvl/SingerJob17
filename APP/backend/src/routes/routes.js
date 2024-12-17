const express = require("express");
const router = express.Router();

const artista = require("../controllers/artista_controller");
const empresario = require("../controllers/empresarioController");
const conexoes = require("../controllers/conexoes_controller");
const avaliacaoController = require('../controllers/avaliacaoController');
const mensagens = require('../controllers/mensagensController');
const notificacoesController = require('../controllers/notificacoesController'); 
const postagensController = require('../controllers/postagens_controllers');

const Notificacoes = require("../models");

// Rotas Artista
router.get('/getAllArtistas', artista.getAllArtistas);
router.get('/getArtistasById', artista.getArtistaById); // Ajuste para usar params
router.post('/createArtista', artista.createArtista);
router.put('/editArtista', artista.editArtista); // Ajuste para usar params
router.delete('/deleteArtista', artista.deleteArtista); // Ajuste para usar params

// Rotas Empresário
router.get('/getAllEmpresarios', empresario.getAllEmpresarios);
router.get('/getEmpresarioById', empresario.getEmpresarioById); // Ajuste para usar params
router.post('/createEmpresario', empresario.createEmpresario);
router.put('/editEmpresario', empresario.editEmpresario); // Ajuste para usar params
router.delete('/deleteEmpresario', empresario.deleteEmpresario); // Ajuste para usar params

// Rotas Avaliação
router.get('/getAllAvaliacao', avaliacaoController.getAllAvaliacao);
router.get('/getAvaliacaoById', avaliacaoController.getAvaliacaoById); // Ajuste para usar params
router.post('/createAvaliacao', avaliacaoController.createAvaliacao);
router.put('/editAvaliacao', avaliacaoController.editAvaliacao); // Ajuste para usar params
router.delete('/deleteAvaliacao', avaliacaoController.deleteAvaliacao); // Ajuste para usar params

// Rotas Mensagens
router.get('/getAllMensagens', mensagens.getMensagens);
router.get('/getMensagensById/:id', mensagens.getMensagensById); // Ajuste para usar params
router.post('/createMensagens', mensagens.createMensagens);
router.put('/editMensagens/:id', mensagens.editMensagens); // Ajuste para usar params
router.delete('/deleteMensagens/:id', mensagens.deleteMensagens); 

// Rota Conexão
router.get('/getAllConexao', conexoes.getAllConexao);
router.get('/getConexaoById/:id', conexoes.getConexaoById); // Ajuste para usar params
router.post('/createConexoes', conexoes.createConexoes);
router.put('/editConexao/:id', conexoes.editConexao); // Ajuste para usar params
router.delete('/deleteConexao/:id', conexoes.deleteConexao); // Ajuste 

// Rota Notificação
router.get('/getAllNotificacoes', notificacoesController.getAllNotificacoes);
router.get('/getNotificacoesById/:id', notificacoesController.getNotificacoesById);
router.post('/createNotificacoes', notificacoesController.createNotificacoes);
router.put('/editNotificacoes/:id', notificacoesController.editNotificacoes);
router.delete('/deleteNotificacoes/:id', notificacoesController.deleteNotificacoes);


router.get('/getAllPostagens', postagensController.getAllPostagens);

// Buscar postagem por ID
router.get('/getPostagensById/:id', postagensController.getPostagemById);

// Criar nova postagem
router.post('/createPostagens', postagensController.createPostagem);

// Atualizar postagem
router.put('/editPostagens/:id', postagensController.editPostagem);

// Deletar postagem
router.delete('/deletePostagens/:id', postagensController.deletePostagem);

module.exports = router;
