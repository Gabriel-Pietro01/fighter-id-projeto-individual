var combo = ['d', 's', 'w', 'd'];
var acertos = 0;
var comboDigitado = [];

var mensagem = document.getElementById('div_mensagem');

document.addEventListener('keydown', function (e) {
    comboDigitado.push(e.key);

    var msg = '';

    for(var i = 0; i < combo.length; i++) {
        if (comboDigitado[i] == combo[i]) {
            msg += `Acertou a ${i + 1}° tecla!<br>`
            acertos = i + 1;
        } else if (comboDigitado[i] == undefined) {
            continue
        } else {
            msg += `Errou a ${i + 1}° tecla!<br>`
        }
    }

    mensagem.innerHTML = msg;

    if (acertos == 4) {
        mensagem.innerHTML += `<br> BOA IRMAO ACERTOU O COMBO!`;
    }
})