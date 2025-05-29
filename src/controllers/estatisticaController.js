var estatisticaModel = require("../models/estatisticaModel");

function estatisticasGerais(req, res) {
    var idUsuario = req.params.id;

    estatisticaModel.estatisticasGerais(idUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao pegar estatísticas gerais! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function ultimasPartidas(req, res) {
    var idUsuario = req.params.id;

    estatisticaModel.ultimasPartidas(idUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao pegar as suas últimas 5 partidas! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function partidasCadaPersonagem(req, res) {
    var idUsuario = req.params.id;

    estatisticaModel.partidasCadaPersonagem(idUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao pegar as partidas jogadas com cada personagem! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function placarLideres(req, res) {
    estatisticaModel.placarLideres()
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao pegar o placar de líderes ! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    estatisticasGerais,
    ultimasPartidas,
    partidasCadaPersonagem,
    placarLideres
}