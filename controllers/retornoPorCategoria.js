const Artigo = require("../models/artigo")

exports.porCategoria = (req, res) => {
  Artigo.findAll({
    where: {
      categoria: req.params.pais
    }
  })
    .then(resultado => res.status(200).send(resultado))
    .catch(erro => res.status(404).send("Erro ao pesquisar por categoria"))
}