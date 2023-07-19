const Artigo = require("../models/artigo")

exports.editar = (req, res) => {

  Artigo.findByPk(req.body.id)
    .then(artigo => {
      if (!artigo) {
        return res.status(404).send("Artigo não encontrado")
      }

      artigo.titulo = req.body.titulo
      artigo.subtitulo = req.body.subtitulo
      artigo.imagem = req.body.imagem
      artigo.texto = req.body.texto
      artigo.categoria = req.body.categoria

      return artigo.save();
    })
    .then(resultado => res.status(200).send(`Artigo com ID ${req.body.id} foi atualizado com sucesso.`))
    .catch(erro => res.status(404).send("O artigo não foi editado"))
};
