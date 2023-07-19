const Artigo = require("../models/artigo")

exports.incluir = (req, res) => {
  Artigo.create({
    titulo: req.body.titulo,
    subtitulo: req.body.subtitulo,
    texto: req.body.texto,
    imagem: req.body.imagem,
    categoria: req.body.categoria
  })
    .then(() => res.status(200).send("Artigo incluído com sucesso"))
    .catch((erro) => res.status(404).send("O artigo não foi cadastrado"))
}
