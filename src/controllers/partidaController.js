var partidaModel = require("../models/partidaModel");

function adicionarPartida(req, res) {
    var fkUsuario = req.body.fkUsuarioServer;
    var fkPersonagem = req.body.fkPersonagemServer;
    var pontuacaoTotal = req.body.pontuacaoTotalServer;
    var acertos = req.body.acertosServer;
    var erros = req.body.errosServer;
    var maiorSequencia = req.body.maiorSequenciaServer;

    partidaModel.adicionarPartida(fkUsuario, fkPersonagem, pontuacaoTotal, acertos, erros, maiorSequencia)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao adicionar a partida ao seu histórico! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    adicionarPartida
}