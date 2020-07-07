DROP DATABASE IF EXISTS greatBay;

CREATE DATABASE greatBay;

USE greatBay;

CREATE TABLE items (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NULL,
  category VARCHAR(50) NULL,
  price INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO items (name, category, price)
VALUES ("baseball card", "sports collectibles", 1000);

INSERT INTO items (name, category, price)
VALUES ("stuffed squirrel", "taxidermy", 300);

INSERT INTO items (name, category, price)
VALUES ("moonshine", "potent potables", 50);