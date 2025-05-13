// LISTA COM OS PERSONAGENS, COM NOME, GIF E DESCRICAO
var listCharacters = [['Ryu', 'assets/gifs/ryu-afk-1.gif', ': Médio', ': Médio', `Ryu 
                    é um dos protagonistas mais conhecidos do mundo dos jogos, tendo sua primeira aparição no primeiro Street Fighter. Ryu no mundo de
                    Street Fighter é um lutador Japonês treinado na arte marcial Shotokan Karate por seu mestre Gouken. Ryu é conhecido por sua busca incessante 
                    pela perfeição e pelo seu uso da técnica Hadouken.`],
                    ['Ken', 'assets/gifs/ken-afk-1.gif', ': Ótimo', ': Médio', `Ken é mais impulsivo e 
                    confiante que Ryu, mas compartilha o mesmo estilo de luta, com foco mais ofensivo e agressivo. 
                    É americano, rico, e campeão de artes marciais — mas seu espírito competitivo é genuíno.`],
                    ['Chun-Li', 'assets/gifs/chun-lee-afk-1.gif', ': Ótimo', ': Médio', `Agente da Interpol e uma das personagens mais emblemáticas 
                    da série. Chun-Li usa técnicas de kung fu com chutes rápidos e acrobáticos. Luta para proteger os 
                    inocentes e desmantelar organizações criminosas como a Shadaloo.`],
                    ['Zangief', 'assets/gifs/zangief-afk-1.gif', ': Ótimo', ': Ótimo', `Zangief é um lutador de wrestling russo que usa força bruta e 
                    agarrões devastadores. Seu patriotismo e orgulho são tão grandes quanto seu corpo. Ele entra em torneios 
                    para representar sua nação com honra e poder.`],
                    ['Akuma', 'assets/gifs/akuma-afk-1.gif', ': Ótimo', ': Ruim', `Akuma é a encarnação do Ansatsuken extremo: poder absoluto sem compaixão. 
                    Irmão do mestre de Ryu e Ken, ele abandonou limites morais em busca do Satsui no Hado (Impulso Assassino). 
                    Rápido, forte e brutal, vive para testar seu poder contra os mais fortes.`]
]

//FUNCTION GENÉRICA PARA TROCAR DE PERSONAGEM
function changeCharacter(index) {
    var characterName = document.querySelector('.character-name');
    var character = document.querySelector('.character');
    var characterForca = document.querySelector('.forca');
    var characterResistencia = document.querySelector('.resistencia');
    var characterDescription = document.querySelector('.description');

    var selected = listCharacters[index];

    characterName.innerHTML = `<h2>${selected[0]}</h2>`;
    character.style.backgroundImage = `url(${selected[1]})`;
    characterForca.innerHTML = selected[2];
    characterResistencia.innerHTML = selected[3];
    characterDescription.innerHTML = selected[4];
}

