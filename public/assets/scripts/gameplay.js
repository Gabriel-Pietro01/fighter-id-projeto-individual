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

var overlayTemp = document.querySelector('.overlay-temp');
var contagemTempDiv = document.getElementById('contagem-temp');
var contagemTemp = 3;

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
                overlayTemp.style.display = 'none';
            }, 1000)
        }
    }, 1000);

}
