const Postagens = require('../models/Postagens');
const conn = require('../config/database');

// Criar postagem
module.exports.createPostagem = async (req, res) => {
    try {
        const sql = "INSERT INTO Postagens (autor_id, conteudo, tipo_postagem) VALUES (?,?,?)";
        conn.query(sql, [
            req.body.autor_id,
            req.body.conteudo,
            req.body.tipo_postagem
        ], (err, response) => {
            if (err) throw err;
            res.status(201).json({ message: "Postagem criada com sucesso!", id: response.insertId });
        });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao criar postagem: ' + err.message });
    }
};

// Buscar todas as postagens
module.exports.getAllPostagens = async (req, res) => {
    try {
        const sql = "SELECT * FROM Postagens";
        conn.query(sql, (err, results) => {
            if (err) throw err;
            res.status(200).json(results);
        });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar postagens: ' + err.message });
    }
};

// Buscar postagem por ID
module.exports.getPostagemById = async (req, res) => {
    try {
        const sql = "SELECT * FROM Postagens WHERE id_postagem = ?";
        conn.query(sql, [req.params.id], (err, results) => {
            if (err) throw err;
            if (results.length === 0) return res.status(404).json({ error: 'Postagem não encontrada' });
            res.status(200).json(results[0]);
        });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar postagem: ' + err.message });
    }
};

// Atualizar postagem
module.exports.editPostagem = async (req, res) => {
    try {
        const sql = "UPDATE Postagens SET conteudo = ?, tipo_postagem = ? WHERE id_postagem = ?";
        conn.query(sql, [
            req.body.conteudo,
            req.body.tipo_postagem,
            req.body.id_postagem
        ], (err, response) => {
            if (err) throw err;
            if (response.affectedRows === 0) return res.status(404).json({ error: 'Postagem não encontrada' });
            res.status(200).json({ message: 'Postagem atualizada com sucesso' });
        });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao atualizar postagem: ' + err.message });
    }
};

// Deletar postagem
module.exports.deletePostagem = async (req, res) => {
    try {
        const sql = "DELETE FROM Postagens WHERE id_postagem = ?";
        conn.query(sql, [req.params.id], (err, response) => {
            if (err) throw err;
            if (response.affectedRows === 0) return res.status(404).json({ error: 'Postagem não encontrada' });
            res.status(200).json({ message: 'Postagem deletada com sucesso' });
        });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao deletar postagem: ' + err.message });
    }
};
