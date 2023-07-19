const Sequelize = require("sequelize")
const Artigo = require("../models/artigo")

exports.geral = (req, res) => {
  Artigo.findAll({
    order: Sequelize.literal('rand()'),
    limit: 6
  })
    .then(resultado => res.status(200).json(resultado))
    .catch(erro => res.status(404).send("Erro ao pesquisar personagens"))
}