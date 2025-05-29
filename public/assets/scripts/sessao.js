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

    var nomeUserEstatistica = document.getElementById("nome-usuario");
    var imgUserEstatistica = document.getElementById("foto-perfil");

    if (email != null && nome != null) {

        try {
            b_usuario.innerHTML = nome;
            img_usuario.style.backgroundImage = `url(${icons[fotoPerfil]})`;
            pegarMaiorPontuacao();
        } catch {
            nomeUserEstatistica.innerHTML = nome;
            imgUserEstatistica.style.backgroundImage = `url(${icons[fotoPerfil]})`;
            estatisticasGerais();
            placarLideres();
        }
    } else {
        window.location = "login.html";
    }
}

function pegarMaiorPontuacao() {
    var idVar = sessionStorage.getItem('ID_USUARIO');
    var span_maior_pontuacao = document.getElementById('span_maior_pontuacao');

    fetch(`/usuarios/pegarMaiorPontuacao/${idVar}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);
            if (resposta.ok) {
                return resposta.json();
            } else {
                throw new Error("Erro ao buscar maior pontuação");
            }
        })
        .then(function (dados) {
            console.log("Dados recebidos:", dados);

            if (dados && dados.length > 0) {
                span_maior_pontuacao.innerHTML = dados[0].maiorPontuacao;
            } else {
                span_maior_pontuacao.innerHTML = '0';
            }
        })
        .catch(function (erro) {
            console.error("Erro na requisição:", erro);
            span_maior_pontuacao.innerHTML = '0';
        });
}

function estatisticasGerais() {
    var idVar = sessionStorage.getItem('ID_USUARIO');
    var span_maior_pontuacao = document.getElementById('maior-pontuacao');
    var span_maior_sequencia = document.getElementById('maior-sequencia');
    var span_qtd_partidas = document.getElementById('qtd-partidas');

    fetch(`./estatisticas/estatisticasGerais/${idVar}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);
            if (resposta.ok) {
                return resposta.json();
            } else {
                throw new Error("Erro ao buscar maior pontuação");
            }
        })
        .then(function (dados) {
            console.log("Dados recebidos:", dados);

            if (dados && dados.length > 0) {
                span_maior_pontuacao.innerHTML = dados[0].maiorPontuacao;
                span_maior_sequencia.innerHTML = dados[0].maiorSequencia;
                span_qtd_partidas.innerHTML = dados[0].qtdPartida;
            } else {
                span_maior_pontuacao.innerHTML = '0';
                span_maior_sequencia.innerHTML = '0';
                span_qtd_partidas.innerHTML = '0';
            }
        })
        .catch(function (erro) {
            console.error("Erro na requisição:", erro);
        });
}

function placarLideres() {
    var areaPlacar = document.getElementById('scroll-area')

    fetch(`./estatisticas/placarLideres/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);
            if (resposta.ok) {
                return resposta.json();
            } else {
                throw new Error("Erro ao buscar placar de líderes");
            }
        })
        .then(function (dados) {
            console.log("Dados recebidos:", dados);

            for (var i = 0; i < dados.length; i++) {
                if (i == 0) {
                    areaPlacar.innerHTML += `                
                    <div class="content-leader">
                        <h3 class="posicao" style="color: #FFD700">${i + 1}</h3>
                        <div class="foto-perfil-leader" style="background-image: url(${icons[dados[i].fotoPerfil]}); background-size: cover; background-repeat: no-repeat;"></div>
                        <h3 class="nome" style="color: #FFD700">${dados[i].nomeUsuario}</h3>
                        <h3 class="pontuacao" style="color: #FFD700">${dados[i].maiorPontuacao}</h3>
                    </div>
                    <hr>`
                } else if (i == 1) {
                    areaPlacar.innerHTML += `                
                    <div class="content-leader">
                        <h3 class="posicao" style="color: 	#C0C0C0">${i + 1}</h3>
                        <div class="foto-perfil-leader" style="background-image: url(${icons[dados[i].fotoPerfil]}); background-size: cover; background-repeat: no-repeat;"></div>
                        <h3 class="nome" style="color: 	#C0C0C0">${dados[i].nomeUsuario}</h3>
                        <h3 class="pontuacao" style="color: 	#C0C0C0">${dados[i].maiorPontuacao}</h3>
                    </div>
                    <hr>`
                } else if (i == 2) {
                    areaPlacar.innerHTML += `                
                    <div class="content-leader">
                        <h3 class="posicao" style="color: 	#F4A460">${i + 1}</h3>
                        <div class="foto-perfil-leader" style="background-image: url(${icons[dados[i].fotoPerfil]}); background-size: cover; background-repeat: no-repeat;"></div>
                        <h3 class="nome" style="color: 	#F4A460">${dados[i].nomeUsuario}</h3>
                        <h3 class="pontuacao" style="color: 	#F4A460">${dados[i].maiorPontuacao}</h3>
                    </div>
                    <hr>`
                } else {
                    areaPlacar.innerHTML += `                
                    <div class="content-leader">
                        <h3 class="posicao">${i + 1}</h3>
                        <div class="foto-perfil-leader" style="background-image: url(${icons[dados[i].fotoPerfil]}); background-size: cover; background-repeat: no-repeat;"></div>
                        <h3 class="nome">${dados[i].nomeUsuario}</h3>
                        <h3 class="pontuacao">${dados[i].maiorPontuacao}</h3>
                    </div>
                    <hr>`
                }

            }

        })
        .catch(function (erro) {
            console.error("Erro na requisição:", erro);
        });
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../../index.html";
}