-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE fighter_id;

USE fighter_id;

-- CRIAÇÃO DAS TABELAS
CREATE TABLE usuario (
	id int primary key auto_increment,
    nome varchar(45) not null,
    email varchar(55) not null,
    senha varchar(25) not null,
    fotoPerfil int not null,
    dtCriacao datetime default current_timestamp
);

CREATE TABLE personagem (
		idPersonagem int primary key auto_increment,
        nomePersonagem varchar(45)
) auto_increment = 100;

CREATE TABLE partidas (
	idPartida int auto_increment,
    fkUsuario int,
    fkPersonagem int,
    constraint pkComposta primary key (idPartida, fkUsuario, fkPersonagem),
    constraint fkIdUsuario 
		foreign key (fkUsuario) 
			references usuario(id),
	constraint fkIdPersonagem
		foreign key (fkPersonagem)
			references personagem(idPersonagem),
	dtPartida datetime default current_timestamp,
    pontuacaoTotal int,
    acertos int,
    erros int,
    maiorSequencia int
);

-- INSERT DOS PERSONAGENS DISPONIVEIS
INSERT INTO personagem VALUES 
	(default, 'Ryu'),
	(default, 'Ken'),
	(default, 'Chun Li'),
	(default, 'Zangief'),
	(default, 'Akuma');
    
-- SELECTS
SELECT * FROM usuario;

SELECT * FROM personagem;

SELECT * FROM partidas JOIN usuario ON fkUsuario = id JOIN personagem ON fkPersonagem = idPersonagem ORDER BY idPartida;

SELECT fotoPerfil as fotoPerfil, nome as nomeUsuario, MAX(pontuacaoTotal) as maiorPontuacao 
	FROM usuario JOIN partidas 
					ON partidas.fkUsuario = usuario.id 
                    GROUP BY fotoPerfil, nomeUsuario 
                    ORDER BY maiorPontuacao DESC;
                    
SELECT pontuacaoTotal as pontuacaoTotal FROM partidas 
					JOIN usuario ON partidas.fkUsuario = usuario.id
						WHERE usuario.id = 4 ORDER BY partidas.dtPartida DESC LIMIT 5;
                        
SELECT COUNT(idPartida) as quantidadePartidas, nomePersonagem FROM partidas 
				JOIN usuario ON partidas.fkUsuario = usuario.id
					JOIN personagem ON partidas.fkPersonagem = personagem.idPersonagem
						WHERE usuario.id = 1 GROUP BY personagem.idPersonagem;
                    
			