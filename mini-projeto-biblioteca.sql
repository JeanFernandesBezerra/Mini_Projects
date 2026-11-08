-- PROJETO: SISTEMA DE BIBLIOTECA

CREATE DATABASE IF NOT EXISTS biblioteca;

USE biblioteca;

CREATE TABLE livros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    autor VARCHAR(100) NOT NULL,
    ano_publicacao INT,
    disponivel BOOLEAN DEFAULT TRUE
);

CREATE TABLE leitores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE emprestimos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_livro INT NOT NULL,
    id_leitor INT NOT NULL,
    data_emprestimo DATE NOT NULL,
    data_devolucao DATE,

    FOREIGN KEY (id_livro) REFERENCES livros(id),
    FOREIGN KEY (id_leitor) REFERENCES leitores(id)
);


INSERT INTO livros (titulo, autor, ano_publicacao)
VALUES
('Dom Casmurro', 'Machado de Assis', 1899),
('O Hobbit', 'J.R.R. Tolkien', 1937),
('1984', 'George Orwell', 1949),
('O Pequeno Principe', 'Antoine de Saint-Exupery', 1943);




INSERT INTO leitores (nome, email)
VALUES
('Jean', 'jean@email.com'),
('Maria', 'maria@email.com'),
('Pedro', 'pedro@email.com');



SELECT * FROM livros;



SELECT titulo, autor
FROM livros
WHERE disponivel = TRUE;



SELECT *
FROM leitores
WHERE nome = 'Jean';



INSERT INTO emprestimos (
    id_livro,
    id_leitor,
    data_emprestimo
)
VALUES (2, 1, CURDATE());


UPDATE livros
SET disponivel = FALSE
WHERE id = 2;


SELECT
    leitores.nome AS leitor,
    livros.titulo AS livro,
    emprestimos.data_emprestimo,
    emprestimos.data_devolucao
FROM emprestimos
INNER JOIN leitores
ON emprestimos.id_leitor = leitores.id
INNER JOIN livros
ON emprestimos.id_livro = livros.id;


UPDATE emprestimos
SET data_devolucao = CURDATE()
WHERE id = 1;

UPDATE livros
SET disponivel = TRUE
WHERE id = 2;


SELECT * FROM livros;


SELECT * FROM leitores;


SELECT *
FROM livros
WHERE ano_publicacao > 1940;
