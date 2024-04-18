DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users (
	id INTEGER PRIMARY KEY,
	name TEXT,
	email TEXT UNIQUE
);

INSERT INTO users (
	id,
	name,
	email
) VALUES
(NULL, 'João Lenon', 'lenonsec7@gmail.com'),
(NULL, 'Thais Gabriela', 'tgabriela@gmail.com');
