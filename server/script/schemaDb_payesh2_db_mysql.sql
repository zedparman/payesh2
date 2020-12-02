--
-- Database: `payesh2_db`
--

CREATE DATABASE IF NOT EXISTS `payesh2_db`;
USE `payesh2_db`;


-- ENTITIES

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

INSERT INTO `payesh2_db`.`user` (`username`, `password`, `_id`) VALUES ('admin', '62f264d7ad826f02a8af714c0a54b197935b717656b80461686d450f7b3abde4c553541515de2052b9af70f710f0cd8a1a2d3f4d60aa72608d71a63a9a93c0f5', 1);

CREATE TABLE IF NOT EXISTS `roles` (
	`role` varchar(30) ,
	
	-- RELAZIONI

	`_user` int(11)  NOT NULL REFERENCES user(_id),
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);
INSERT INTO `payesh2_db`.`roles` (`role`, `_user`, `_id`) VALUES ('ADMIN', '1', 1);


--
-- Struttura della tabella `course`
--

CREATE TABLE IF NOT EXISTS `course` (
	`Name` varchar(130) ,
	`level` numeric ,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `exam`
--

CREATE TABLE IF NOT EXISTS `exam` (
	`Name` varchar(130) ,
	`score` numeric ,
	
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





-- relation m:m _exam course - exam
CREATE TABLE IF NOT EXISTS `course__exam` (
    `_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `id_course` int(11)  NOT NULL REFERENCES course(_id),
    `id_exam` int(11)  NOT NULL REFERENCES exam(_id)
);

-- relation m:m _student course - student
CREATE TABLE IF NOT EXISTS `course__student` (
    `_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `id_course` int(11)  NOT NULL REFERENCES course(_id),
    `id_student` int(11)  NOT NULL REFERENCES student(_id)
);

-- relation 1:m _course exam - course
ALTER TABLE `exam` ADD COLUMN `_course` int(11)  REFERENCES course(_id);

-- relation 1:m _student exam - student
ALTER TABLE `exam` ADD COLUMN `_student` int(11)  REFERENCES student(_id);

-- relation m:m _course student - course
CREATE TABLE IF NOT EXISTS `student__course` (
    `_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `id_student` int(11)  NOT NULL REFERENCES student(_id),
    `id_course` int(11)  NOT NULL REFERENCES course(_id)
);

-- relation m:m _exam student - exam
CREATE TABLE IF NOT EXISTS `student__exam` (
    `_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `id_student` int(11)  NOT NULL REFERENCES student(_id),
    `id_exam` int(11)  NOT NULL REFERENCES exam(_id)
);


