const Artista = require('../models/artista');
const conn = require('../config/database');

module.exports.createArtista = async (req, res) => {
    try {
        const sql = "INSERT INTO Artista (nome, email, senha, endereco, telefone, genero, tipo_arte, biografia, portfolio) VALUES (?,?,?,?,?,?,?,?,?)";
        conn.query(sql, [
            req.body.nome,
            req.body.email,
            req.body.senha,
            req.body.endereco,
            req.body.telefone,
            req.body.genero,
            req.body.tipo_arte,
            req.body.biografia,
            req.body.portfolio
        ], (err, response) => {
            if (err) throw err;
            res.status(201).json({ response_data: response.affectedRows });
        });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao criar artista: ' + err.message });
    }
};

module.exports.getAllArtistas = async (req, res) => {
    try {
        const sql = "SELECT * FROM Artista";
        conn.query(sql, (err, results) => {
            
            if (err) throw err;
            res.status(200).json(results);
        });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar artistas: ' + err.message });
    }
};

module.exports.getArtistaById = async (req, res) => {
    try {
        
        const sql = "SELECT * FROM Artista WHERE id_artista = ?";
        conn.query(sql, [req.body.id_artista], (err, results) => {
            if (err) throw err;
            if (results.length === 0) return res.status(404).json({ error: 'Artista não encontrado' });
            res.status(200).json(results[0]);
        });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar artista: ' + err.message });
    }
};

module.exports.editArtista = async (req, res) => {
    try {
        const sql = "UPDATE Artista SET nome = ?, email = ?, senha = ?, endereco = ?, telefone = ?, genero = ?, tipo_arte = ?, biografia = ?, portfolio = ? WHERE id_artista = ?";
        conn.query(sql, [
            req.body.nome,
            req.body.email,
            req.body.senha,
            req.body.endereco,
            req.body.telefone,
            req.body.genero,
            req.body.tipo_arte,
            req.body.biografia,
            req.body.portfolio,
            req.body.id_artista
        ], (err, response) => {
            if (err) throw err;
            if (response.affectedRows === 0) return res.status(404).json({ error: 'Artista não encontrado' });
            res.status(200).json({ message: 'Artista atualizado com sucesso' });
        });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao atualizar artista: ' + err.message });
    }
};

module.exports.deleteArtista = async (req, res) => {
    try {
        const sql = "DELETE FROM Artista WHERE id_artista = ?";
        conn.query(sql, [req.body.id_artista], (err, response) => {
            if (err) throw err;
            if (response.affectedRows === 0) return res.status(404).json({ error: 'Artista não encontrado' });
            res.status(200).json({ message: 'Artista deletado com sucesso' });
        });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao deletar artista: ' + err.message });
    }
};
