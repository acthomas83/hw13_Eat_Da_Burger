-- Drops the burgers_db if it exists currently --
DROP DATABASE IF EXISTS burgers_db;
-- Creates the "burgers_db" database --
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers-- CREATE TABLE chirps (

  -- TABLE CODE TO GO HERE
  id integer not null auto_increment,
   burger_name varchar(30) not null,
   devoured BOOLEAN,
   Primary key(id)
);
