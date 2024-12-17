const Conexoes = require('../models/Conexoes');
const banco = require('../config/database');

// Criar uma nova conexão
module.exports.createConexoes = async (req, res) => {
    try {
        const sql = "INSERT INTO Conexoes (solicitante_id, solicitado_id, status) VALUES (?, ?, ?)";
        banco.query(sql, [ // Aqui corrigimos para usar "banco.query"
            req.body.solicitante_id,
            req.body.solicitado_id,
            req.body.status || 'pendente'
        ], (err, result) => {
            if (err) throw err;
            res.status(201).json({ message: "Conexão criada com sucesso!", id: result.insertId });
        });
    } catch (err) {
        res.status(500).json({ error: "Erro ao criar conexão: " + err.message });
    }
};
// Obter todas as conexões
module.exports.getAllConexao = async (req, res) => {
    try {
        const sql = "SELECT * FROM Conexoes";
        banco.query(sql, (err, results) => {
            if (err) throw err;
            res.status(200).json(results);
        });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar conexões: ' + err.message });
    }
};

// Obter uma conexão por ID
module.exports.getConexaoById = async (req, res) => {
    try {
        const sql = "SELECT * FROM Conexoes WHERE id_conexao = ?";
        banco.query(sql, [req.body.id_conexao], (err, results) => {
            if (err) throw err;
            if (results.length === 0) return res.status(404).json({ error: 'Conexão não encontrada' });
            res.status(200).json(results[0]);
        });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar conexão: ' + err.message });
    }
};

// Editar uma conexão
module.exports.editConexao = async (req, res) => {
    try {
        const sql = "UPDATE Conexoes SET solicitante_id = ?, solicitado_id = ?, status = ? WHERE id_conexao = ?";
        banco.query(sql, [
            req.body.solicitante_id,
            req.body.solicitado_id,
            req.body.status,
            req.body.id_conexao
        ], (err, response) => {
            if (err) throw err;
            if (response.affectedRows === 0) return res.status(404).json({ error: 'Conexão não encontrada' });
            res.status(200).json({ message: 'Conexão atualizada com sucesso' });
        });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao atualizar conexão: ' + err.message });
    }
};

// Deletar uma conexão
module.exports.deleteConexao = async (req, res) => {
    try {
        const sql = "DELETE FROM Conexoes WHERE id_conexao = ?";
        banco.query(sql, [req.body.id_conexao], (err, response) => {
            if (err) throw err;
            if (response.affectedRows === 0) return res.status(404).json({ error: 'Conexão não encontrada' });
            res.status(200).json({ message: 'Conexão deletada com sucesso' });
        });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao deletar conexão: ' + err.message });
    }
};
