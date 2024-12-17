const Notificacoes = require('../models/Notificacoes');
const banco = require('../config/database');

// Criar notificação
module.exports.createNotificacoes = async (req, res) => {
    try {
        const sql = "INSERT INTO Notificacoes (conteudo, usuario_id, tipo) VALUES (?, ?, ?)";
        banco.query(sql, [
            req.body.conteudo,
            req.body.usuario_id,
            req.body.tipo
        ], (err, response) => {
            if (err) throw err;
            res.status(201).json({ message: "Notificação criada com sucesso!", id: response.insertId });
        });
    } catch (err) {
        res.status(500).json({ error: "Erro ao criar notificação: " + err.message });
    }
};

// Buscar todas as notificações
module.exports.getAllNotificacoes = async (req, res) => {
    try {
        const sql = "SELECT * FROM Notificacoes";
        banco.query(sql, (err, results) => {
            if (err) throw err;
            res.status(200).json(results);
        });
    } catch (err) {
        res.status(500).json({ error: "Erro ao buscar notificações: " + err.message });
    }
};

// Buscar notificação por ID
module.exports.getNotificacoesById = async (req, res) => {
    try {
        const sql = "SELECT * FROM Notificacoes WHERE id_notificacao = ?";
        banco.query(sql, [req.params.id], (err, results) => {
            if (err) throw err;
            if (results.length === 0) return res.status(404).json({ error: "Notificação não encontrada" });
            res.status(200).json(results[0]);
        });
    } catch (err) {
        res.status(500).json({ error: "Erro ao buscar notificação: " + err.message });
    }
};

// Atualizar notificação
module.exports.editNotificacoes = async (req, res) => {
    try {
        const sql = "UPDATE Notificacoes SET conteudo = ?, usuario_id = ?, tipo = ? WHERE id_notificacao = ?";
        banco.query(sql, [
            req.body.conteudo,
            req.body.usuario_id,
            req.body.tipo,
            req.body.id_notificacao
        ], (err, response) => {
            if (err) throw err;
            if (response.affectedRows === 0) return res.status(404).json({ error: "Notificação não encontrada" });
            res.status(200).json({ message: "Notificação atualizada com sucesso!" });
        });
    } catch (err) {
        res.status(500).json({ error: "Erro ao atualizar notificação: " + err.message });
    }
};

// Deletar notificação
module.exports.deleteNotificacoes = async (req, res) => {
    try {
        const sql = "DELETE FROM Notificacoes WHERE id_notificacao = ?";
        banco.query(sql, [req.params.id], (err, response) => {
            if (err) throw err;
            if (response.affectedRows === 0) return res.status(404).json({ error: "Notificação não encontrada" });
            res.status(200).json({ message: "Notificação deletada com sucesso!" });
        });
    } catch (err) {
        res.status(500).json({ error: "Erro ao deletar notificação: " + err.message });
    }
};
