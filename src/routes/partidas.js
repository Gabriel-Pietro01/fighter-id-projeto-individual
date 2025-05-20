var express = require("express");
var router = express.Router();

var partidaController = require("../controllers/partidaController");

router.post("/adicionarPartida", function (req, res) {
    partidaController.adicionarPartida(req, res);
})

module.exports = router;