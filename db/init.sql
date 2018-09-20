DROP TABLE IF EXISTS bands;

CREATE TABLE bands
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(250) NOT NULL,
    year_formed INT,
    genre VARCHAR(50)
);


INSERT INTO bands
    (name, year_formed, genre)
VALUES
    ('Between the Buried and Me', 2000, 'Metal'),
    ('The Wombats', 2003, 'Indie'),
    ('Foster the People', 2009, 'Alternative'),
    ('Sum 41', 1996, 'Pop-punk'),
    ('Joywave', 2010, 'Alternative'),
    ('Rolling Stones', 1962, 'Rock'),
    ('Lagwagon', 1990, 'Punk'),
    ('The Decemberists', 2000, 'Indie');

    -- you can run as many queries as you want as long as you end each one with a semi colon
