const express = require("express")
const route = express.Router()
const apagar = require("../controllers/apagar")
const editar = require("../controllers/editar")
const incluir = require("../controllers/incluir")
const authLogin = require("../controllers/autenticarLogin")
const retornoGeral = require("../controllers/retornoGeral")
const retornoPorID = require("../controllers/retornoPorID")
const retornoPorCategoria = require("../controllers/retornoPorCategoria")
const retornoDeCategorias = require("../controllers/retornoDeCategorias")


route.get("/artigos", retornoGeral.geral)

route.get("/artigos/:id", retornoPorID.porID)

route.get("/artigos/categoria/:pais", retornoPorCategoria.porCategoria)

route.get("/categorias", retornoDeCategorias.deCategorias)

route.delete("/apagar/:id", apagar.apagar)

route.put("/editado/:id", editar.editar)

route.post("/incluir", incluir.incluir)

route.post("/authLogin", authLogin.authLogin)

module.exports = route