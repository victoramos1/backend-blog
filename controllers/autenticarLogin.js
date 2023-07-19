const Usuario = require("../models/usuario")
const jwt = require('jsonwebtoken');

exports.authLogin = (req, res) => {
  const { usuario, senha } = req.body

  Usuario.findOne({
    where: { usuario, senha }
  })
    .then(retorno => {
      if (retorno) {
        const token = jwt.sign({ usuarioID: retorno.id }, process.env.JWT_SECRET , { expiresIn: '1h' })
        res.status(200).json(token)
      } else {
        res.status(401).json({ mensagem: "Login não autorizado" })
      }
    })
    .catch(err => res.status(404).json({ mensagem: "Erro ao realizar a busca" }))
}
