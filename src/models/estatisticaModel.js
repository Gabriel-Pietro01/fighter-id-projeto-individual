var database = require("../database/config")

function estatisticasGerais(idUsuario) {
    console.log("PASSEI AQUI!");

    var instrucaoSql = `
        SELECT max(pontuacaoTotal) as maiorPontuacao, max(maiorSequencia) as maiorSequencia, count(idPartida) as qtdPartida
         FROM partidas JOIN usuario 
            ON fkUsuario = id
                WHERE id = ${idUsuario};
    `;
    console.log('Executando a instrução SQL \n' + instrucaoSql);
    return database.executar(instrucaoSql)
}

function placarLideres() {
    console.log("PASSEI AQUI!");

    var instrucaoSql = `
        SELECT fotoPerfil as fotoPerfil, nome as nomeUsuario, MAX(pontuacaoTotal) as maiorPontuacao 
            FROM usuario JOIN partidas 
                            ON partidas.fkUsuario = usuario.id 
                            GROUP BY fotoPerfil, nomeUsuario 
                            ORDER BY maiorPontuacao DESC;
    `;
    console.log('Executando a instrução SQL \n' + instrucaoSql);
    return database.executar(instrucaoSql)
}

module.exports = {
    estatisticasGerais,
    placarLideres
};