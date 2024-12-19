// crud de usuario
// 1.0 - 2024.2-Grupo07 - 2024.2-Grupo07

const Usuario = require('../models/Usuario');

module.exports = { 
    async index(req, res) {
        const usuarios = await Usuario.findAll();

        return res.json(usuarios);
    }, 

    async store(req, res) {
        const { nome, email, senha } = req.body;

        const usuario = await Usuario.create({ nome, email, senha });

        return res.json(usuario);
    },

    async update(req, res) {

        const { id } = req.params;
        const { nome, email, senha } = req.body;

        const usuario = await Usuario.update({ nome, email, senha }, {
            where: {
                id: id
            }
        });

        return res.json(usuario);
    }
}       