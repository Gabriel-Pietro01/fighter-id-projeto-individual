var express = require("express");
var router = express.Router();

var estatisticaController = require("../controllers/estatisticaController");

router.get("/estatisticasGerais/:id", function (req, res) {
    estatisticaController.estatisticasGerais(req, res);
})

router.get("/ultimasPartidas/:id", function (req, res) { 
    estatisticaController.ultimasPartidas(req, res);
})

router.get("/placarLideres", function (req, res) {
    estatisticaController.placarLideres(req, res);
})

module.exports = router;