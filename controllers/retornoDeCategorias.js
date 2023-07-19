const Artigo = require("../models/artigo");

exports.deCategorias = (req, res) => {
  Artigo.findAll({
    attributes: ["categoria"],
  })
    .then(resultados => {
      const categoriasUnicas = [...new Set(resultados.map(resultado => resultado.categoria))];
      res.status(200).json(categoriasUnicas);
    })
    .catch(erro => res.status(404).send("Erro ao pesquisar por categoria"));
};
