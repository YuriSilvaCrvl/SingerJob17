const express = require('express');
const router = express.Router();
const { Notificacoes } = require('../models');

// Criar uma nova notificação
router.post('/', async (req, res) => {
    try {
        const notificacao = await Notificacoes.create(req.body);
        res.status(201).json(notificacao);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Listar todas as notificações
router.get('/', async (req, res) => {
    try {
        const notificacoes = await Notificacoes.findAll();
        res.status(200).json(notificacoes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Buscar notificação por ID
router.get('/:id', async (req, res) => {
    try {
        const notificacao = await Notificacoes.findByPk(req.params.id);
        if (!notificacao) return res.status(404).json({ error: 'Notificação não encontrada' });
        res.status(200).json(notificacao);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Atualizar notificação (marcar como lida)
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Notificacoes.update(req.body, { where: { id_notificacao: req.params.id } });
        if (!updated) return res.status(404).json({ error: 'Notificação não encontrada' });
        res.status(200).json({ message: 'Notificação atualizada com sucesso' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Deletar notificação por ID
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Notificacoes.destroy({ where: { id_notificacao: req.params.id } });
        if (!deleted) return res.status(404).json({ error: 'Notificação não encontrada' });
        res.status(200).json({ message: 'Notificação deletada com sucesso' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
