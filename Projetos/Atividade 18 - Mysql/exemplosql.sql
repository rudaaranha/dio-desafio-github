/* Criando a tabela pessoas */
CREATE TABLE pessoa (
    id INT NOT NULL PRIMARY AUTOINCREMENT,
    nome VARCHAR(30) NOT NULL,
    nascimento DATE,
    genero VARCHAR(30) NOT NULL
)

/*utilizando o comando INSERT, para inserir dados na tabela*/
INSERT INTO pessoa (nome, nascimento) VALUES ('Rudá', '1990-01-08');
INSERT INTO pessoa (nome, nascimento) VALUES ('Nathally', '1990-05-22');
INSERT INTO pessoa (nome, nascimento) VALUES ('Marcela', '2000-04-05');

/*Comando SELECT para selecionar determinados dados da tabela*/
SELECT * FROM pessoa;
SELECT nome FROM pessoa;
SELECT nome, nascimento FROM pessoa;

/*Comando UPDATE, usado para atualizar os dados da tabela*/
UPDATE pessoa SET nome = 'Rudá Aranha' WHERE id = 1;
UPDATE pessoa SET nome = 'Nathally Souza' WHERE id = 2;

/*Comando DELETE, usado para deletar dados da tabela. CUIDADO! um dado deletado não pode ser recuperado.*/
SELECT * FROM pessoa WHERE id = 3; /*Marcela*/
/* Para o delete é sempre bom fazer o select antes como uma boa prática, uma vez que não tem como recuperar um arquivo deletado.*/
DELETE FROM pessoa WHERE id = 3; /*deletando Marcela*/

INSERT INTO pessoa (nome, nascimento) VALUES ('Marcela', '2000-04-05');
/* Por causa da primary key, agora marcela vai ter id=4 e não id=3, pois como o id=3 foi atribuido a uma informação, se a mesma for deletada, tal id não pode ser atribuido a uma nova informação, mesmo que seja a mesma informação que anteriormente foi deletada*/

/*Ordenando dados de uma tabela*/
SELECT SELECT * FROM pessoa ORDER BY nome; /*Ordenar de forma crescente*/
SELECT SELECT * FROM pessoa ORDER BY nome DESC; /*Ordenar de forma decrescente*/

/*Agrupamento de dados de uma tabela*/
UPDATE pessoa SET genero = 'M' WHERE id = 1;
UPDATE pessoa SET genero = 'F' WHERE id = 2;
UPDATE pessoa SET genero = 'F' WHERE id = 4; /*marcela agora possui id=4*/

SELECT COUNT(id), genero FROM pessoa GROUP BY genero; /*Faz a contagem de quantos elementos existem por genero*/