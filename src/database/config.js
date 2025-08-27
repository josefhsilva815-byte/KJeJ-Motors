const knex = require("knex");
const config = require("../../knexfile.js");
require("dotenv").config();

const environment = process.env.NODE_ENV || "development";

const db = knex(config[environment]);

db.raw("SELECT 1")
.then(() => {
    console.log("✅ Conexão com o banco de dados estabelecida com sucesso!");
})
.catch((error) => {
    console.error("❌ Erro ao tentar se conectar com o banco de dados", error.message);
})

module.exports = db