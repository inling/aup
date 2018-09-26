SET NAMES utf8;
DROP DATABASE IF EXISTS illustration;
CREATE DATABASE illustration CHARSET=utf8;
USE illustration;
CREATE TABLE testTable(
    one INT PRIMARY KEY AUTO_INCREMENT,
    two VARCHAR(16),
    three VARCHAR(64)
);
INSERT INTO testTable VALUES(NULL,'ONE1','ONE1');
INSERT INTO testTable VALUES(NULL,'ONE2','ONE2');
INSERT INTO testTable VALUES(NULL,'ONE3','ONE3');