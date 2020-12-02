--
-- Database: `payesh_db`
--

CREATE DATABASE IF NOT EXISTS `payesh_db`;
USE `payesh_db`;


-- ENTITIES

--
-- Struttura della tabella `exam`
--

CREATE TABLE IF NOT EXISTS `exam` (
	`Gradee` numeric ,
	`Name` varchar(130) ,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `student`
--

CREATE TABLE IF NOT EXISTS `student` (
	`Family` varchar(130) ,
	`Name` varchar(130) ,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `user`
--

CREATE TABLE IF NOT EXISTS `user` (
	`mail` varchar(130) ,
	`name` varchar(130) ,
	`password` varchar(130)  NOT NULL,
	`roles` varchar(130) ,
	`surname` varchar(130) ,
	`username` varchar(130)  NOT NULL,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


-- Security

ALTER TABLE `user` MODIFY COLUMN `password` varchar(128)  NOT NULL;

INSERT INTO `payesh_db`.`user` (`username`, `password`, `_id`) VALUES ('admin', '62f264d7ad826f02a8af714c0a54b197935b717656b80461686d450f7b3abde4c553541515de2052b9af70f710f0cd8a1a2d3f4d60aa72608d71a63a9a93c0f5', 1);

CREATE TABLE IF NOT EXISTS `roles` (
	`role` varchar(30) ,
	
	-- RELAZIONI

	`_user` int(11)  NOT NULL REFERENCES user(_id),
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);
INSERT INTO `payesh_db`.`roles` (`role`, `_user`, `_id`) VALUES ('ADMIN', '1', 1);





-- relation 1:m _students Exam - Student
ALTER TABLE `exam` ADD COLUMN `_students` int(11)  REFERENCES student(_id);

-- relation m:m _exams Student - Exam
CREATE TABLE IF NOT EXISTS `Student__exams` (
    `_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `id_Student` int(11)  NOT NULL REFERENCES student(_id),
    `id_Exam` int(11)  NOT NULL REFERENCES exam(_id)
);


