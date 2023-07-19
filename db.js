require("dotenv").config()

const Sequelize = require("sequelize")
const sequelize = new Sequelize(
  `${process.env.DB_NAME}`,
  `${process.env.DB_USER}`,
  `${process.env.DB_PASSWORD}`, {
  dialect: `${process.env.DB_DIALECT}`,
  host: `${process.env.DB_HOST}`,
  dialectOptions: {
    ssl: {
      rejectUnauthorized: true
    }
  }
})

sequelize.authenticate()
  .then(() => {
    console.log('Conexão estabelecida com sucesso.');
  })
  .catch((err) => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });

module.exports = sequelize