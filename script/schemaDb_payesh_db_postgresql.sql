--
-- Database: payesh_db
--

CREATE DATABASE payesh_db;

-- ENTITIES

--
-- Schema entity exam
--

CREATE TABLE IF NOT EXISTS "exam" (
	Gradee numeric ,
	Name varchar(130) ,
	
	_id SERIAL PRIMARY KEY

);

--
-- Schema entity student
--

CREATE TABLE IF NOT EXISTS "student" (
	Family varchar(130) ,
	Name varchar(130) ,
	
	_id SERIAL PRIMARY KEY

);

--
-- Schema entity user
--

CREATE TABLE IF NOT EXISTS "user" (
	mail varchar(130) ,
	name varchar(130) ,
	password varchar(130)  NOT NULL,
	roles varchar(130) ,
	surname varchar(130) ,
	username varchar(130)  NOT NULL,
	
	_id SERIAL PRIMARY KEY

);


-- Security

ALTER TABLE "user" ALTER COLUMN "password" TYPE varchar(128);

INSERT INTO "user" (username, password, _id) VALUES ('admin', '62f264d7ad826f02a8af714c0a54b197935b717656b80461686d450f7b3abde4c553541515de2052b9af70f710f0cd8a1a2d3f4d60aa72608d71a63a9a93c0f5', 1);

CREATE TABLE IF NOT EXISTS "roles" (
	role varchar(30) ,
	
	-- RELAZIONI

	_user INTEGER  NOT NULL REFERENCES "user"(_id),
	_id SERIAL PRIMARY KEY 

);
INSERT INTO "roles" (role, _user, _id) VALUES ('ADMIN', '1', 1);




-- relation 1:m _students Exam - Student
ALTER TABLE exam ADD COLUMN _students INTEGER  REFERENCES "student"(_id);

-- relation m:m _exams Student - Exam
CREATE TABLE IF NOT EXISTS "Student__exams" (
    _id SERIAL PRIMARY KEY,
    id_Student INTEGER  NOT NULL REFERENCES "student"(_id),
    id_Exam INTEGER  NOT NULL REFERENCES "exam"(_id)
);
