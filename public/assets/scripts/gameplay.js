// PARTE DA SELEÇÃO DE PERSONAGENS

var listCharacters = [
    ['Ryu', 'assets/gifs/ryu-afk-1.gif', 'assets/img/background-selected/ryu-background-selected.png'],
    ['Ken', 'assets/gifs/ken-afk-1.gif', 'assets/img/background-selected/ken-background-selected.png'],
    ['Chun Li', 'assets/gifs/chun-lee-afk-1.gif', 'assets/img/background-selected/chunli-background-selected.png'],
    ['Zangief', 'assets/gifs/zangief-afk-1.gif', 'assets/img/background-selected/zangief-background-selected.png'],
    ['Akuma', 'assets/gifs/akuma-afk-1.gif', 'assets/img/background-selected/akuma-background-selected.png']
];

var listBackgrounds = [
    'assets/gifs/background-gameplay/background-gameplay1.gif', 'assets/gifs/background-gameplay/background-gameplay2.gif',
    'assets/gifs/background-gameplay/background-gameplay3.gif', 'assets/gifs/background-gameplay/background-gameplay4.gif',
    'assets/gifs/background-gameplay/background-gameplay5.gif', 'assets/gifs/background-gameplay/background-gameplay6.gif',
    'assets/gifs/background-gameplay/background-gameplay7.gif', 'assets/gifs/background-gameplay/background-gameplay8.gif',
    'assets/gifs/background-gameplay/background-gameplay9.gif', 'assets/gifs/background-gameplay/background-gameplay10.gif',
]

var charScreen = document.querySelector('.select-character-background')
var charName = document.getElementById('char_name');
var charGif = document.getElementById('gif_selected');
var charBackground = document.getElementById('bg_selected');
var backgroundName = document.getElementById('bg_name');
var background = document.querySelector('.gameplay-select-character');
var backgroundAll = document.getElementById('background-gameplay');

var current = 0; //é o indice do personagem selecionado/atual
var currentBackground = 0;

function prevCharacter() {
    if (current == 0) {
        current = 4;
    } else {
        current--;
    }

    charName.innerHTML = listCharacters[current][0];
    charGif.style.backgroundImage = `url(${listCharacters[current][1]})`;
    charBackground.style.backgroundImage = `url(${listCharacters[current][2]})`;
}

function nextCharacter() {
    if (current < listCharacters.length - 1) {
        current++;
    } else {
        current = 0;
    }

    charName.innerHTML = listCharacters[current][0];
    charGif.style.backgroundImage = `url(${listCharacters[current][1]})`;
    charBackground.style.backgroundImage = `url(${listCharacters[current][2]})`;
}

function prevBackground() {
    if (currentBackground == 0) {
        currentBackground = 9;
    } else {
        currentBackground--;
    }

    backgroundName.innerHTML = `Cenário ${currentBackground + 1}`;
    background.style.backgroundImage = `url(${listBackgrounds[currentBackground]})`;
}

function nextBackground() {
    if (currentBackground < listBackgrounds.length - 1) {
        currentBackground++;
    } else {
        currentBackground = 0;
    }

    backgroundName.innerHTML = `Cenário ${currentBackground + 1}`;
    background.style.backgroundImage = `url(${listBackgrounds[currentBackground]})`;
}
// FIM PARTE DA SELEÇÃO DE PERSONAGENS

// COMEÇO GAMEPLAY

var contentGameplay = document.querySelector('.content-gameplay');
var overlayTemp = document.querySelector('.overlay-temp');
var contagemTempDiv = document.getElementById('contagem-temp');
var contagemTemp = 3;
var char = document.getElementById('char-combo')

var key1Combo = document.getElementById('key-1');
var key2Combo = document.getElementById('key-2');
var key3Combo = document.getElementById('key-3');
var key4Combo = document.getElementById('key-4');

var combo = [];
var divCombo = document.querySelector('.combo');
var contKey = 0;

var listKeybinds = [
    'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
    'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z',
    'X', 'C', 'V', 'B', 'N', 'M'
]

var comboGifs = [
    [
        'assets/gifs/combos/ryu/ryu-hadouken-1.gif', 'assets/gifs/combos/ryu/ryu-kick-1.gif', 'assets/gifs/combos/ryu/ryu-kick-2.gif',
        'assets/gifs/combos/ryu/ryu-punch-1.gif', 'assets/gifs/combos/ryu/ryu-punch-2.gif', 'assets/gifs/combos/ryu/ryu-punch-3.gif',
        'assets/gifs/combos/ryu/ryu-shoryuken-1.gif', 'assets/gifs/combos/ryu/ryu-tatsumaki-1.gif', 'assets/gifs/combos/ryu/ryu-taunt.gif'
    ],
    [
        'assets/gifs/combos/ken/ken-hadouken-1.gif', 'assets/gifs/combos/ken/ken-kick-1.gif', 'assets/gifs/combos/ken/ken-kick-2.gif',
        'assets/gifs/combos/ken/ken-punch-1.gif', 'assets/gifs/combos/ken/ken-punch-2.gif',
        'assets/gifs/combos/ken/ken-tatsumaki-1.gif', 'assets/gifs/combos/ken/ken-taunt.gif'
    ],
    [
        'assets/gifs/combos/chun-li/chun-kick-1.gif',
        'assets/gifs/combos/chun-li/chun-kick-2.gif',
        'assets/gifs/combos/chun-li/chun-kick-5.gif'
    ],
    [
        'assets/gifs/combos/zangief/zangief-grab-1.gif', 'assets/gifs/combos/zangief/zangief-lariat-1.gif', 'assets/gifs/combos/zangief/zangief-punch-1.gif',
        'assets/gifs/combos/zangief/zangief-taunt.gif'
    ],
    [
        'assets/gifs/combos/akuma/akuma-kick-1.gif', 'assets/gifs/combos/akuma/akuma-kick-2.gif',
        'assets/gifs/combos/akuma/akuma-punch-1.gif', 'assets/gifs/combos/akuma/akuma-punch-2.gif', 'assets/gifs/combos/akuma/akuma-punch-3.gif',
        'assets/gifs/combos/akuma/akuma-shouryuken-1.gif', 'assets/gifs/combos/akuma/akuma-tatsumaki-1.gif', 'assets/gifs/combos/akuma/akuma-taunt.gif'
    ]
];

var missedGifs = ['assets/gifs/combos/ryu-miss.gif', 'assets/gifs/combos/ken-miss.gif', 'assets/gifs/combos/chun-miss.gif', 'assets/gifs/combos/zangief-miss.gif', 'assets/gifs/combos/akuma-miss.gif'];

var score = 0;
var scoreDiv = document.getElementById('score-span');
var sequencia = 0;
var sequenciaDiv = document.getElementById('sequencia-span');

var maiorSequencia = 0;

var timerDiv = document.getElementById('timer');
var tempoRestante = 10.00;


function confirmarSelecao() {
    setTimeout(() => {
        charScreen.style.display = 'none';
        backgroundAll.style.backgroundImage = `url(${listBackgrounds[currentBackground]})`;
        overlayTemp.style.display = 'flex';
    }, 1000)



    var intervalo = setInterval(() => {

        if (contagemTemp >= 0) {
            contagemTempDiv.innerHTML = contagemTemp;
            contagemTemp--;
        } else {
            contagemTempDiv.innerHTML = `HORA DE COMBAR!`;
            clearInterval(intervalo);

            setTimeout(() => {
                contagemTempDiv.remove();
                overlayTemp.style.backgroundColor = 'transparent';
                overlayTemp.style.opacity = 1;
                contentGameplay.style.display = 'flex';
                char.style.backgroundImage = `url(${listCharacters[current][1]})`;

                começarJogo();

            }, 1000)
        }
    }, 1000);
}

function começarJogo() {
    montarCombo();
    document.addEventListener('keydown', clicouTeclado);

    var intervaloTempo = setInterval(() => {
        tempoRestante -= 0.01;
        timerDiv.style.color = 'white';

        if (tempoRestante <= 0) {
            tempoRestante = 0;
            clearInterval(intervaloTempo);
            document.removeEventListener('keydown', clicouTeclado);
            mostrarModalFinal();
        }

        if (tempoRestante < 8) {
            timerDiv.style.color = 'orange';

            if (tempoRestante < 5) {
                timerDiv.style.color = 'red';
            }
        }
        timerDiv.innerText = tempoRestante.toFixed(2);
    }, 10);

}

function clicouTeclado(e) {
    if (e.key.toUpperCase() == combo[contKey]) {
        if (contKey == 0) key1Combo.style.color = '#32CD32';
        else if (contKey == 1) key2Combo.style.color = '#32CD32';
        else if (contKey == 2) key3Combo.style.color = '#32CD32';
        else if (contKey == 3) key4Combo.style.color = '#32CD32';

        contKey++;
    } else {
        char.style.backgroundImage = `url(${missedGifs[current]})`;
        key1Combo.style.color = '#FFFFFF';
        key2Combo.style.color = '#FFFFFF';
        key3Combo.style.color = '#FFFFFF';
        key4Combo.style.color = '#FFFFFF';
        contKey = 0;
        sequencia = 0;
        sequenciaDiv.style.color = 'white';
        sequenciaDiv.style.animation = 'none';
        sequenciaDiv.innerHTML = `x${sequencia}`;
    }

    if (contKey == 4) {
        tempoRestante += 1.50;
        sequencia++;
        score += sequencia * 25;

        if (sequencia > maiorSequencia) maiorSequencia = sequencia;

        if (sequencia > 2) sequenciaDiv.style.color = 'yellow';
        if (sequencia > 5) sequenciaDiv.style.color = 'red';
        if (sequencia > 10) {
            sequenciaDiv.style.color = 'orange';
            sequenciaDiv.style.animation = 'changeColors 3s infinite';
        }

        scoreDiv.innerHTML = score;
        sequenciaDiv.innerHTML = `x${sequencia}`;
        key1Combo.style.color = '#FFFFFF';
        key2Combo.style.color = '#FFFFFF';
        key3Combo.style.color = '#FFFFFF';
        key4Combo.style.color = '#FFFFFF';
        contKey = 0;
        char.style.backgroundImage = `url(${comboGifs[current][Math.floor(Math.random() * comboGifs[current].length)]})`;
        montarCombo();
    }
}


function montarCombo() {
    combo = [];

    for (var i = 0; i < 4; i++) {
        combo.push(listKeybinds[Math.floor(Math.random() * listKeybinds.length)]);
    }
    key1Combo.innerHTML = combo[0];
    key2Combo.innerHTML = combo[1];
    key3Combo.innerHTML = combo[2];
    key4Combo.innerHTML = combo[3];
}

function mostrarModalFinal() {
    var modal = document.getElementById('modal-fim');
    modal.style.display = 'flex';

    document.getElementById('pontuacao-final').innerText = score;
    document.getElementById('sequencia-final').innerText = maiorSequencia;
}


function jogarNovamente() {
    location.reload();
}

function voltarInicio() {
    window.location.href = 'index_logado.html';
}
