DROP DATABASE IF EXISTS users_db;
CREATE DATABASE IF NOT EXISTS `users_db`;
USE `users_db` ;

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(30),
  
  last_name VARCHAR(30)
);

INSERT into users(first_name,last_name)
values
("nico","esquibel"),
("abdul","gabriels"),
("john","doe");