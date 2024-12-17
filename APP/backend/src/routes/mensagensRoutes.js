const express = require('express');
const router = express.Router();
const { Mensagens } = require('../models');

// Enviar uma nova mensagem
router.post('/', async (req, res) => {
    try {
        const mensagem = await Mensagens.create(req.body);
        res.status(201).json(mensagem);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Listar todas as mensagens entre dois usuários
router.get('/:remetenteId/:destinatarioId', async (req, res) => {
    try {
        const mensagens = await Mensagens.findAll({
            where: {
                remetente_id: req.params.remetenteId,
                destinatario_id: req.params.destinatarioId,
            },
        });
        res.status(200).json(mensagens);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Buscar mensagem por ID
router.get('/:id', async (req, res) => {
    try {
        const mensagem = await Mensagens.findByPk(req.params.id);
        if (!mensagem) return res.status(404).json({ error: 'Mensagem não encontrada' });
        res.status(200).json(mensagem);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Deletar mensagem por ID
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Mensagens.destroy({ where: { id_mensagem: req.params.id } });
        if (!deleted) return res.status(404).json({ error: 'Mensagem não encontrada' });
        res.status(200).json({ message: 'Mensagem deletada com sucesso' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
