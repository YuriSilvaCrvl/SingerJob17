const express = require('express');
const router = express.Router();
const Conexoes = require('../models/Conexoes');

// Rota para criar um novo conexoes
router.post('/', async (req, res) => {
    try {
        const conexoes = await Conexoes.create(req.body);
        res.status(201).json(conexoes);
    } catch (err) {
        if (err.name === 'SequelizeValidationError') {
            const errors = err.errors.map(e => e.message);
            return res.status(400).json({ error: 'Erro de validação: ' + errors.join(', ') });
        }
        res.status(500).json({ error: 'Erro ao criar artista: ' + err.message });
    }
});

// Rota para listar todos os artistas
router.get('/', async (req, res) => {
    try {
        const conexoes = await Conexoes.findAll();
        res.status(200).json(conexoes);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar artistas: ' + err.message });
    }
});

// Rota para buscar artista por ID
router.get('/:id', async (req, res) => {
    try {
        const conexoes = await Conexoes.findByPk(req.params.id);
        if (!conexoes) return res.status(404).json({ error: 'conexoes não encontrado' });
        res.status(200).json(conexoes);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar conexoes: ' + err.message });
    }
});
// Rota para atualizar um conexoes
router.put('/', async (req, res) => {
    try {
        // Encontre o conexoes pelo ID
        const conexoes = await Conexoes.findByPk(req.body.id);
        if (!conexoes) return res.status(404).json({ error: 'conexoes não encontrado' });
        const dados = { 
            
  "nome": req.body.nome, 
  "email": req.body.email,
  "senha": req.body.senha,
  "endereco": req.body.endereco,
  "telefone": req.body.telefone,
  "genero": req.body.genero,
  "tipo_arte": req.body.tipo_arte,
  "biografia": req.body.biografia,
  "portfolio": req.body.portfolio,
}
 // Atualize os dados do conexoes com os novos valores enviados no corpo da requisição
        await conexoes.update(dados);

        // Retorne o conexoes atualizado
        res.status(200).json(conexoes);
    } catch (err) {
        if (err.name === 'SequelizeValidationError') {
            const errors = err.errors.map(e => e.message);
            return res.status(400).json({ error: 'Erro de validação: ' + errors.join(', ') });
        }
        res.status(500).json({ error: 'Erro ao atualizar conexoes: ' + err.message });
    }
});

// Rota para deletar um conexoes
router.delete('/', async (req, res) => {
    try {
        // Encontre o conexoes pelo ID
        const conexoes = await Conexoes.findByPk(req.body.id);
        if (!conexoes) return res.status(404).json({ error: 'conexoes não encontrado' });

        // Deletar o conexoes
        await conexoes.destroy();

        // Retornar sucesso
        res.status(200).json({ message: 'conexoes deletado com sucesso' });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao deletar conexoes: ' + err.message });
    }
});


module.exports = router;
