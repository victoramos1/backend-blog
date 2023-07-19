const Artigo = require("../models/artigo")

exports.porID = (req, res) => {
  Artigo.findByPk(req.params.id)
    .then(resultado => res.status(200).send(resultado))
    .catch(erro => res.status(404).send("O personagem não foi encontrado"))
}

