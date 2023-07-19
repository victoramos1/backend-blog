const Sequelize = require("sequelize")
const database = require("../db")

const Artigo = database.define('Artigos', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  titulo: {
    type: Sequelize.STRING,
    allowNull: false
  },
  subtitulo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  texto: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  imagem: {
    type: Sequelize.STRING,
    allowNull: false
  },
  categoria: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  }
})

module.exports = Artigo