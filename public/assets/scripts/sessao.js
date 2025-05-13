var icons = ['', '../img/icons-player-profile/ryu-icon-1.jpg', '../img/icons-player-profile/ryu-icon-2.jpg',
            '../img/icons-player-profile/ken-icon-1.jpg', '../img/icons-player-profile/ken-icon-2.jpg',
            '../img/icons-player-profile/chun-li-icon-1.jpg', '../img/icons-player-profile/chun-li-icon-2.jpg',
            '../img/icons-player-profile/zangief-icon-1.jpg', '../img/icons-player-profile/zangief-icon-2.jpg',
            '../img/icons-player-profile/akuma-icon-1.jpg', '../img/icons-player-profile/akuma-icon-2.jpg'
];

// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var fotoPerfil = sessionStorage.FOTO_PERFIL;

    var b_usuario = document.getElementById("b_usuario");
    var img_usuario = document.getElementById("img_usuario");

    if (email != null && nome != null) {
        b_usuario.innerHTML = nome;
        img_usuario.style.backgroundImage = `url(${icons[fotoPerfil]})`;
    } else {
        window.location = "../../login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../../index.html";
}