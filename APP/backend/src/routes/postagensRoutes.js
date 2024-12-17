const express = require('express');
const router = express.Router();
const { Postagens } = require('../models');

// Criar uma nova postagem
router.post('/', async (req, res) => {
    try {
        const postagem = await Postagens.create(req.body);
        res.status(201).json(postagem);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Listar todas as postagens
router.get('/', async (req, res) => {
    try {
        const postagens = await Postagens.findAll();
        res.status(200).json(postagens);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Buscar postagem por ID
router.get('/:id', async (req, res) => {
    try {
        const postagem = await Postagens.findByPk(req.params.id);
        if (!postagem) return res.status(404).json({ error: 'Postagem não encontrada' });
        res.status(200).json(postagem);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Atualizar postagem por ID
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Postagens.update(req.body, { where: { id_postagem: req.params.id } });
        if (!updated) return res.status(404).json({ error: 'Postagem não encontrada' });
        res.status(200).json({ message: 'Postagem atualizada com sucesso' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Deletar postagem por ID
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Postagens.destroy({ where: { id_postagem: req.params.id } });
        if (!deleted) return res.status(404).json({ error: 'Postagem não encontrada' });
        res.status(200).json({ message: 'Postagem deletada com sucesso' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
