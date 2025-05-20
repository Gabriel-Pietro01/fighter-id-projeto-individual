var database = require("../database/config")

function adicionarPartida(fkUsuario, fkPersonagem, pontuacaoTotal, acertos, erros, maiorSequencia) {
    console.log("PASSEI AQUI");

    var instrucaoSql = `
        INSERT INTO partidas (fkUsuario, fkPersonagem, pontuacaoTotal, acertos, erros, maiorSequencia) VALUES ('${fkUsuario}', '${fkPersonagem}', '${pontuacaoTotal}', '${acertos}', '${erros}', '${maiorSequencia}');
    `

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    adicionarPartida
};