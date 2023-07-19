const express = require("express")
const app = express()
const routes = require("./routes/routes")
const cors = require("cors")
const session = require("express-session")
const { v4: uuidv4 } = require('uuid');

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(routes)
app.use(session({
  genid: () => {
    return uuidv4();
  },
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));

app.listen(3333, () => {
  console.log("Servidor aberto na porta 3333")
})