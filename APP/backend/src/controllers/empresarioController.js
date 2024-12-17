const conn = require('../config/database');

module.exports.createEmpresario = async (req, res) => {
    try {
        const sql = "INSERT INTO Empresarios (nome, email, senha, endereco, telefone,genero,empresa,interesses,biografia) VALUES (?, ?, ?, ?, ?, ?, ?,?,?)";
        const params = [req.body.nome, req.body.email, req.body.senha, req.body.endereco, req.body.telefone,req.body.genero, req.body.empresa,req.body.interesses,req.body.biografia];

        conn.query(sql, params, (err, response) => {
            if (err) throw err;
            res.status(201).json({ response_data: response.affectedRows });
        });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao criar empresário: ' + err.message });
    }
};

module.exports.getAllEmpresarios = async (req, res) => {
    try {
        const sql = "SELECT * FROM Empresarios";

        conn.query(sql, (err, results) => {
            if (err) throw err;
            res.status(200).json(results);
        });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar empresários: ' + err.message });
    }
};

module.exports.getEmpresarioById = async (req, res) => {
    try {
        const sql = "SELECT * FROM Empresarios WHERE id_empresario = ?";
        const params = [req.body.id_empresario];

        conn.query(sql, params, (err, results) => {
            if (err) throw err;
            if (results.length === 0) return res.status(404).json({ error: 'Empresário não encontrado' });
            res.status(200).json(results[0]);
        });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar empresário: ' + err.message });
    }
};

module.exports.editEmpresario = async (req, res) => {
    try {
        const sql = "UPDATE Empresarios SET nome=?, email=?, senha=?, endereco=?, telefone=?,genero=?,empresa=?,interesses=?,biografia=? WHERE id_empresario = ?";
        const params = [req.body.nome, req.body.email, req.body.senha, req.body.endereco, req.body.telefone, req.body.genero, req.body.empresa, req.body.interesses,req.body.biografia, req.body.id_empresario];

        conn.query(sql,params, (err, response) => {
            if (err) throw err;
            console.log(response.affectedRows)
            res.status(200).json({ message: 'Empresário atualizado com sucesso' });
        });

    } catch (err) {
        res.status(500).json({ error: 'Erro ao atualizar empresário: ' + err.message });
    }
};

module.exports.deleteEmpresario = async (req, res) => {
    try {
        const sql = "DELETE FROM Empresarios WHERE id_empresario = ?";
        const params = [req.body.id_empresario];

        conn.query(sql, params, (err, response) => {
            if (err) {
                if (err.code === 'ER_ROW_IS_REFERENCED_2') {
                    return res.status(400).json({ error: 'Não é possível deletar o empresário pois está associado a outros registros' });
                }
                throw err;
            }
            if (response.affectedRows === 0) return res.status(404).json({ error: 'Empresário não encontrado' });
            res.status(200).json({ message: 'Empresário deletado com sucesso' });
        });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao deletar empresário: ' + err.message });
    }
};
