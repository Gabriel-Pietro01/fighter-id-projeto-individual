var listCharacters = [
    ['Ryu', 'assets/gifs/ryu-afk-1.gif', 'assets/img/background-selected/ryu-background-selected.png'],
    ['Ken', 'assets/gifs/ken-afk-1.gif', 'assets/img/background-selected/ken-background-selected.png'],
    ['Chun Li', 'assets/gifs/chun-lee-afk-1.gif', 'assets/img/background-selected/chunli-background-selected.png'],
    ['Zangief', 'assets/gifs/zangief-afk-1.gif', 'assets/img/background-selected/zangief-background-selected.png'],
    ['Akuma', 'assets/gifs/akuma-afk-1.gif', 'assets/img/background-selected/akuma-background-selected.png']
];

var listBackgrounds = [colocar aqui a lista dos fundos que eu achar]

var charName = document.getElementById('char_name');
var charGif = document.getElementById('gif_selected');
var charBackground = document.getElementById('bg_selected');

var current = 0;

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

}

function nextBackground() {

}