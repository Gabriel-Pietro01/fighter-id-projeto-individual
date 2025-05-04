// LISTA DE FUNDOS PARA MUDAR NO INDEX
var listBackgrounds = ['../assets/gifs/ryu-ken-1.gif', '../assets/gifs/ryu-ken-2.gif', '../assets/gifs/ryu-akuma-1.gif',
                    '../assets/gifs/chun-lee-1.gif'
]

var background = document.querySelector('.main-content');

// FUNCTION PARA MUDAR O FUNDO A CADA 5 SEGUNDOS
function changeBackground() {
    setInterval(() => {
        var escolhaAleatoria = Math.round(Math.random() * 3);
        background.style.backgroundImage = `url(${listBackgrounds[escolhaAleatoria]})`;
    }, 5000)
}