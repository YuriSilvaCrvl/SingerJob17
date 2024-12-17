const conn = require('../config/database');

module.exports.createAvaliacao = async (req, res) => {
    try {
        const sql = "INSERT INTO Avaliacoes (avaliador_id, avaliado_id, nota, comentario) VALUES (?, ?, ?, ?)";
        const { avaliador_id, avaliado_id, nota, comentario } = req.body;
        
        conn.query(sql, [avaliador_id, avaliado_id, nota, comentario], (err, response) => {
            if (err) throw err;
            res.status(201).json({ message: 'Avaliação criada com sucesso', id: response.insertId });
        });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao criar avaliação: ' + err.message });
    }
};

module.exports.getAllAvaliacao = async (req, res) => {
    try {
        const sql = "SELECT * FROM Avaliacoes";

        conn.query(sql, (err, results) => {
            if (err) throw err;
            res.status(200).json(results);
        });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar avaliações: ' + err.message });
    }
};

module.exports.getAvaliacaoById = async (req, res) => {
    try {
        const sql = "SELECT * FROM Avaliacoes WHERE id_avaliacao = ?";
        const data = [req.body.id_avaliacao]

        conn.query(sql, data, (err, results) => {
            if (err) throw err;
            if (results.length === 0) return res.status(404).json({ error: 'Avaliação não encontrada' });
            res.status(200).json(results[0]);
        });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar avaliação: ' + err.message });
    }
};

module.exports.editAvaliacao = async (req, res) => {
    try {
        const sql = "UPDATE Avaliacoes SET nota = ?, comentario = ? WHERE id_avaliacao = ?";
        const data = [req.body.nota, req.body.comentario,req.body.id_avaliacao]
        
        conn.query(sql,data, (err, response) => {
            if (err) throw err;
            if (response.affectedRows === 0) return res.status(404).json({ error: 'Avaliação não encontrada' });
            res.status(200).json({ message: 'Avaliação atualizada com sucesso' });
        });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao atualizar avaliação: ' + err.message });
    }
};

module.exports.deleteAvaliacao = async (req, res) => {
    try {
        const sql = "DELETE FROM Avaliacoes WHERE id_avaliacao = ?";
        const id  = req.body.id_avaliacao;

        conn.query(sql, [id], (err, response) => {
            if (err) throw err;
            if (response.affectedRows === 0) return res.status(404).json({ error: 'Avaliação não encontrada' });
            res.status(200).json({ message: 'Avaliação deletada com sucesso' });
        });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao deletar avaliação: ' + err.message });
    }
};
