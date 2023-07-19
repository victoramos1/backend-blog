const Artigo = require("../models/artigo")

exports.apagar = (req, res) => {
  Artigo.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(res.status(200).send(`Artigo com ID ${req.params.id} foi excluído com sucesso.`))
    .catch(erro => res.status(404).send('O artigo não foi excluído'))
}