var combo = [['d', 's', 'w', 'd'], ['a', 's', 'd', 'f'], ['t', 'g', 'b', 'l']];
var comboAtual = 0
var cont = 0;
var sequencia = 0;
var pontuacao = 0;

var comboMostrado = document.getElementById('div_combo');
var mensagem = document.getElementById('div_mensagem');
var personagem = document.getElementById('personagem_teste');
var pontuacaoAtual = document.getElementById('pontuacao');

document.addEventListener('keydown', function (e) {
    var msg = '';

    if (e.key == combo[comboAtual][cont]) {
        msg += `Acertou a ${cont + 1}° tecla!<br>`
        sequencia++;
        cont++;
    } else {
        msg += `Errou<br>`
        cont = 0;
        sequencia = 0
    }

    mensagem.innerHTML = msg;

    if (sequencia == 4) {
        mensagem.innerHTML += `<br> BOA IRMAO ACERTOU O COMBO!`;
        sequencia = 0;
        cont = 0;
        comboAtual++;
        pontuacao += 10;
        pontuacaoAtual.innerHTML = pontuacao;
        comboMostrado.innerHTML = `${combo[comboAtual]}`;
        personagem.style.backgroundImage = `url(../../assets/gifs/combos/akuma/akuma-shouryuken-1.gif)`;
    }
})