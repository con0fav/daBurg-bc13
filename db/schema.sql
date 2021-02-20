### Schema

CREATE DATABASE burg_db;
USE burg_db;

CREATE TABLE burgs
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	eaten BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
