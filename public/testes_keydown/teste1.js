var combo = ['d', 's', 'w', 'd'];
var cont = 0;
var acertos = 0;

var mensagem = document.getElementById('div_mensagem');

document.addEventListener('keydown', function (e) {
    var msg = '';

    if (e.key == combo[cont]) {
        msg += `Acertou a ${cont + 1}° tecla!<br>`
        acertos++;
        cont++;
    } else {
        msg += `Errou a ${cont + 1}° tecla!<br>`
        cont++;
    }

    mensagem.innerHTML = msg;

    if (acertos == 4) {
        mensagem.innerHTML += `<br> BOA IRMAO ACERTOU O COMBO!`;
    }
})