const express = require('express');
const router = express.Router();
const { Avaliacoes } = require('../models');

// Criar uma nova avaliação
router.post('/', async (req, res) => {
    try {
        console.log(req.body)
        const avaliacao = await Avaliacoes.create(req.body);
        res.status(201).json(avaliacao);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Listar todas as avaliações
router.get('/', async (req, res) => {
    try {
        const avaliacoes = await Avaliacoes.findAll();
        res.status(200).json(avaliacoes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Buscar avaliação por ID
router.get('/:id', async (req, res) => {
    try {
        const avaliacao = await Avaliacoes.findByPk(req.params.id);
        if (!avaliacao) return res.status(404).json({ error: 'Avaliação não encontrada' });
        res.status(200).json(avaliacao);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Atualizar avaliação por ID
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Avaliacoes.update(req.body, { where: { id_avaliacao: req.params.id } });
        if (!updated) return res.status(404).json({ error: 'Avaliação não encontrada' });
        res.status(200).json({ message: 'Avaliação atualizada com sucesso' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Deletar avaliação por ID
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Avaliacoes.destroy({ where: { id_avaliacao: req.params.id } });
        if (!deleted) return res.status(404).json({ error: 'Avaliação não encontrada' });
        res.status(200).json({ message: 'Avaliação deletada com sucesso' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
