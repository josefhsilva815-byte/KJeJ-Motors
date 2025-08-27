const express = require("express");

const HomeController = require("../controllers/HomeController.js");
const SobreNosController = require("../controllers/SobreNosController.js");
const VeiculosController = require("../controllers/VeiculosController.js");
const AvaliacoesController = require("../controllers/AvaliacoesController.js");

const router = express.Router();

router.get("/", HomeController.index);
router.get("/sobrenos", SobreNosController.index);
router.get("/veiculos", VeiculosController.index);
router.get("/avaliacoes", AvaliacoesController.index);
router.post("/avaliacoes", AvaliacoesController.send);

module.exports = router;