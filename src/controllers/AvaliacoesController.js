const path = require("node:path");
const db = require("../database/config.js");

module.exports = {
    index: (req, res ) => {
        res.sendFile(path.join(__dirname, "../views/avaliacoes.html"));
    },
    send: async (req, res) => {
        const {nome , email, mensagem} = req.body;
        try {
            (await db("avaliacoes").insert({nome, email, mensagem}));
            console.log("📩 Novo contato salvo no banco de dados");
            res.sendFile(path.join(__dirname, "../views/agradecimentos.html"));
        } catch (error) {
            console.error("Erro ao salvar sua avaliação: ", error);
            res.status(500).send("Erro ao enviar a avaliação. Tente novamente mais tarde.")
        }
    }
}