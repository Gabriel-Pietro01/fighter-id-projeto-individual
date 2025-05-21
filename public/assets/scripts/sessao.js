var icons = ['', '../assets/img/icons-player-profile/ryu-icon-1.jpg', '../assets/img/icons-player-profile/ryu-icon-2.jpg',
    '../assets/img/icons-player-profile/ken-icon-1.jpg', '../assets/img/icons-player-profile/ken-icon-2.jpg',
    '../assets/img/icons-player-profile/chun-li-icon-1.jpg', '../assets/img/icons-player-profile/chun-li-icon-2.jpg',
    '../assets/img/icons-player-profile/zangief-icon-1.jpg', '../assets/img/icons-player-profile/zangief-icon-2.jpg',
    '../assets/img/icons-player-profile/akuma-icon-1.jpg', '../assets/img/icons-player-profile/akuma-icon-2.jpg'
];

// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var fotoPerfil = sessionStorage.FOTO_USUARIO;

    var b_usuario = document.getElementById("b_usuario");
    var img_usuario = document.querySelector(".img-usuario-logado");

    if (email != null && nome != null) {
        b_usuario.innerHTML = nome;
        img_usuario.style.backgroundImage = `url(${icons[fotoPerfil]})`;
        pegarMaiorPontuacao();
    } else {
        window.location = "login.html";
    }
}

function pegarMaiorPontuacao() {
    var span_maior_pontuacao = document.getElementById('span_maior_pontuacao');

    fetch("/usuarios/pegarMaiorPontuacao", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);
            if (resposta.ok) {
                span_maior_pontuacao.innerHTML = resposta;
            } else {
                span_maior_pontuacao.innerHTML = '0';
            }
        })
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../../index.html";
}