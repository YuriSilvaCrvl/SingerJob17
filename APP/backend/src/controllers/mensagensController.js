const Mensagens = require('../models/Mensagens'); // Ajuste o caminho do modelo conforme necessário
const banco = require('../config/database'); // Conexão com o banco de dados

module.exports.createMensagens = async (req, res) => {
    try {
        const sql = "INSERT INTO Mensagens (remetente_id, destinatario_id, conteudo) VALUES (?, ?, ?)";
        banco.query(sql, [
            req.body.remetente_id,
            req.body.destinatario_id,
            req.body.conteudo
        ], (err, response) => {
            if (err) throw err;
            res.status(201).json({ message: "Mensagem criada com sucesso!", id: response.insertId });
        });
    } catch (err) {
        res.status(500).json({ error: "Erro ao criar mensagem: " + err.message });
    }
};

module.exports.getMensagens = async (req, res) => {
    try {
        const sql = "SELECT * FROM Mensagens";
        banco.query(sql, (err, results) => {
            if (err) throw err;
            res.status(200).json(results);
        });
    } catch (err) {
        res.status(500).json({ error: "Erro ao buscar mensagens: " + err.message });
    }
};

module.exports.getMensagensById = async (req, res) => {
    try {
        const sql = "SELECT * FROM Mensagens WHERE id_mensagem = ?";
        banco.query(sql, [req.body.id_mensagem], (err, results) => {
            if (err) throw err;
            if (results.length === 0) return res.status(404).json({ error: "Mensagem não encontrada" });
            res.status(200).json(results[0]);
        });
    } catch (err) {
        res.status(500).json({ error: "Erro ao buscar mensagem: " + err.message });
    }
};

module.exports.editMensagens = async (req, res) => {
    try {
        const sql = "UPDATE Mensagens SET remetente_id = ?, destinatario_id = ?, conteudo = ? WHERE id_mensagem = ?";
        banco.query(sql, [
            req.body.remetente_id,
            req.body.destinatario_id,
            req.body.conteudo,
            req.body.id_mensagem
        ], (err, response) => {
            if (err) throw err;
            if (response.affectedRows === 0) return res.status(404).json({ error: "Mensagem não encontrada" });
            res.status(200).json({ message: "Mensagem atualizada com sucesso!" });
        });
    } catch (err) {
        res.status(500).json({ error: "Erro ao atualizar mensagem: " + err.message });
    }
};

module.exports.deleteMensagens = async (req, res) => {
    try {
        const sql = "DELETE FROM Mensagens WHERE id_mensagem = ?";
        banco.query(sql, [req.body.id_mensagem], (err, response) => {
            if (err) throw err;
            if (response.affectedRows === 0) return res.status(404).json({ error: "Mensagem não encontrada" });
            res.status(200).json({ message: "Mensagem deletada com sucesso!" });
        });
    } catch (err) {
        res.status(500).json({ error: "Erro ao deletar mensagem: " + err.message });
    }
};
