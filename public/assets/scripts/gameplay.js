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

var current = 0;
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

            }, 1000)
        }
    }, 1000);

    começarJogo();
}

function começarJogo() {
    montarCombo();

    document.addEventListener('keydown', function (e) {
        if (e.key.toUpperCase() == combo[contKey]) {
            if (contKey == 0) {
                key1Combo.style.color = '#32CD32';
            } else if (contKey == 1) {
                key2Combo.style.color = '#32CD32';
            } else if (contKey == 2) {
                key3Combo.style.color = '#32CD32';
            } else if (contKey == 3) {
                key4Combo.style.color = '#32CD32';
            }

            contKey++;
        } else {
            key1Combo.style.color = '#FFFFFF';
            key2Combo.style.color = '#FFFFFF';
            key3Combo.style.color = '#FFFFFF';
            key4Combo.style.color = '#FFFFFF';
            contKey = 0;
        }

        if (contKey == 4) {
            key1Combo.style.color = '#FFFFFF';
            key2Combo.style.color = '#FFFFFF';
            key3Combo.style.color = '#FFFFFF';
            key4Combo.style.color = '#FFFFFF';
            contKey = 0;
            montarCombo();
        }
    })


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
