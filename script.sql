CREATE TABLE td_role(
    id_role SERIAL,
    name_role VARCHAR(50) ,
    PRIMARY KEY(id_role)
);

CREATE TABLE td_email_banned(
    id_email_banned SERIAL,
    email VARCHAR(255) ,
    reason VARCHAR(255) ,
    banned_date DATE,
    PRIMARY KEY(id_email_banned)
);

CREATE TABLE td_location(
    id_location SERIAL,
    address VARCHAR(255) ,
    zip_code VARCHAR(10) ,
    city VARCHAR(50) ,
    PRIMARY KEY(id_location)
);

CREATE TABLE td_activity(
    id_activity SERIAL,
    activity_type VARCHAR(255) NOT NULL,
    description VARCHAR(255) ,
    activity_validation BOOLEAN,
    id_location INTEGER NOT NULL,
    PRIMARY KEY(id_activity),
    FOREIGN KEY(id_location) REFERENCES td_location(id_location)
);

CREATE TABLE td_holiday(
    id_holiday SERIAL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    id_activity INTEGER NOT NULL,
    PRIMARY KEY(id_holiday),
    FOREIGN KEY(id_activity) REFERENCES td_activity(id_activity)
);


CREATE TABLE td_planning(
    id_planning SERIAL,
    start_validity DATE,
    end_validity DATE,
    id_activity INTEGER NOT NULL,
    PRIMARY KEY(id_planning),
    FOREIGN KEY(id_activity) REFERENCES td_activity(id_activity)
);

CREATE TABLE td_timetable(
    id_timetable SERIAL,
    td_day VARCHAR(10) NOT NULL,
    timetable_start TIME NOT NULL,
    timetable_end TIME NOT NULL,
    duration INTEGER NOT NULL,
    id_planning INTEGER NOT NULL,
    PRIMARY KEY(id_timetable),
    FOREIGN KEY(id_planning) REFERENCES td_planning(id_planning)
);

CREATE TABLE td_user(
    id_td_user SERIAL,
    lastname VARCHAR(100),
    firstname VARCHAR(100),
    gender VARCHAR(100),
    birthday DATE,
    phone VARCHAR(15),
    email VARCHAR(255) NOT NULL,
    password VARCHAR(100) NOT NULL
    ,
    id_location INTEGER,
    PRIMARY KEY(id_td_user),
    FOREIGN KEY(id_location) REFERENCES td_location(id_location)
);

CREATE TABLE td_schedule_admin(
    id_td_user INTEGER,
    practitioner BOOLEAN,
    id_activity INTEGER NOT NULL,
    PRIMARY KEY(id_td_user),
    FOREIGN KEY(id_td_user) REFERENCES td_user(id_td_user),
    FOREIGN KEY(id_activity) REFERENCES td_activity(id_activity)
);

CREATE TABLE td_patient(
    id_td_user INTEGER,
    secu_number_fr_fr VARCHAR(50) ,
    PRIMARY KEY(id_td_user),
    FOREIGN KEY(id_td_user) REFERENCES td_user(id_td_user)
);

CREATE TABLE td_appointment(
    id_activity INTEGER,
    id_td_user INTEGER,
    date_appointment TIMESTAMP,
    duration INTEGER,
    PRIMARY KEY(id_activity, id_td_user, date_appointment),
    FOREIGN KEY(id_activity) REFERENCES td_activity(id_activity),
    FOREIGN KEY(id_td_user) REFERENCES td_patient(id_td_user)
);

CREATE TABLE td_Possess(
    id_role INTEGER,
    id_td_user INTEGER,
    PRIMARY KEY(id_role, id_td_user),
    FOREIGN KEY(id_role) REFERENCES td_role(id_role),
    FOREIGN KEY(id_td_user) REFERENCES td_user(id_td_user)
);


INSERT INTO public.td_email_banned(id_email_banned, email, reason, banned_date) VALUES (1, 'movais@gmail.com', 'propos insultant', '2022.01.15');
INSERT INTO public.td_email_banned(id_email_banned, email, reason, banned_date) VALUES (2, 'toto@yopmail.com', 'a essayé de hacker le site', '2023.05.22');
INSERT INTO public.td_email_banned(id_email_banned, email, banned_date) VALUES (3, 'jdujardin@gmail.com', '2023.02.02');

INSERT INTO public.td_location(id_location, address, zip_code, city) VALUES (1, '27 rue Charles Dickens ', '62200', 'Boulogne-sur-Mer');
INSERT INTO public.td_location(id_location, address, zip_code, city) VALUES (2, '50 Rue Hilarion Lefuneste ', '95190', 'Paris');
INSERT INTO public.td_location(id_location, address, zip_code, city) VALUES (3, '50 Rue du débit de Tabac ', '59190', 'Hondeghem');
INSERT INTO public.td_location(id_location, address, zip_code, city) VALUES (4, '4 boulevard de Transylvanie ', '62190', 'Vlan');

INSERT INTO public.td_user(id_td_user, lastname, firstname, gender, birthday, phone, email, password, id_location) VALUES (1, 'Denorme', 'Florent', 'Homme', '1988.10.14', '0606060606', 'deflo59@gmail.com', 'florent', 1);
INSERT INTO public.td_user(id_td_user, lastname, firstname, gender, birthday, phone, email, password, id_location) VALUES (2, 'Talon', 'Achille', 'Homme', '1954.01.29', '0626458591', 'talon@doc.com', 'talon', 2);
INSERT INTO public.td_user(id_td_user, lastname, firstname, gender, birthday, phone, email, password, id_location) VALUES (3, 'Meyers', 'Laura', 'Femme', '1976.08.06', '0606060606', 'lmeyers@gmail.com', 'laura', 3);
INSERT INTO public.td_user(id_td_user, lastname, firstname, gender, birthday, phone, email, password, id_location) VALUES (4, 'Dracula', 'Vlad', 'Homme', '1650.12.01', '0606060606', 'Monsang@gmail.com', 'sang', 4);
INSERT INTO public.td_user(id_td_user, lastname, firstname, gender, birthday, phone, email, password, id_location) VALUES (5, 'Hilarion', 'Lefuneste', 'Homme', '1970.05.12', '0606060606', 'Lefuneste@hotmail.com', 'lefuneste', 2);

INSERT INTO public.td_role(id_role, name_role) VALUES (1, 'gestionnaire');
INSERT INTO public.td_role(id_role, name_role) VALUES (2, 'paraticien');
INSERT INTO public.td_role(id_role, name_role) VALUES (3, 'admin');

INSERT INTO public.td_patient(id_td_user, "secu_number_fr_fr") VALUES (3, '026211585155464');

INSERT INTO public.td_activity(id_activity, activity_type, description, activity_validation, id_location) VALUES (1, 'Medecin Généraliste', 'Toujours prêt sur simple appel
A changer de modèle', true, 2);
INSERT INTO public.td_activity(id_activity, activity_type, description, activity_validation, id_location) VALUES (2, 'Dentiste', 'soigne les dents par la saigner', false, 4);

INSERT INTO public.td_appointment(id_activity, id_td_user, date_appointment, duration) VALUES (1, 3, '2023.01.05 9:15', 30);

INSERT INTO public.td_schedule_admin(id_td_user, practitioner, id_activity) VALUES (2, true, 1);
INSERT INTO public.td_schedule_admin(id_td_user, practitioner, id_activity) VALUES (4, true, 2);
INSERT INTO public.td_schedule_admin(id_td_user, practitioner, id_activity) VALUES (5, false, 1);

INSERT INTO public.td_holiday(id_holiday, start_date, end_date, id_activity) VALUES (1, '2023.02.02', '2023.02.27', 1);

INSERT INTO public.td_planning(id_planning, start_validity, end_validity, id_activity) VALUES (1, '2022.12.31', '2023.12.31', 1);

INSERT INTO public.td_timetable(id_timetable, td_day, timetable_start, timetable_end, duration, id_planning) VALUES (1, 'Lundi', '8:30', '12:30', 30, 1);
INSERT INTO public.td_timetable(id_timetable, td_day, timetable_start, timetable_end, duration, id_planning) VALUES (2, 'Lundi', '13:30', '17:30', 30, 1);
INSERT INTO public.td_timetable(id_timetable, td_day, timetable_start, timetable_end, duration, id_planning) VALUES (3, 'Mardi', '8:30', '12:30', 30, 1);
INSERT INTO public.td_timetable(id_timetable, td_day, timetable_start, timetable_end, duration, id_planning) VALUES (4, 'Mardi', '13:30', '17:30', 30, 1);
INSERT INTO public.td_timetable(id_timetable, td_day, timetable_start, timetable_end, duration, id_planning) VALUES (5, 'Mercredi', '8:30', '13:30', 30, 1);


CREATE INDEX ON td_timetable(id_planning);
CREATE INDEX  ON td_planning(id_activity);

CREATE OR REPLACE FUNCTION trigger_check_rdv()
	RETURNS TRIGGER
	LANGUAGE PLPGSQL
	AS 
$$
BEGIN
	IF EXISTS (
		SELECT id_td_user FROM td_appointment
		WHERE id_activity = NEW.id_activity
		AND id_td_user = NEW.id_td_user
		AND date_appointment < NEW.date_appointment + interval '1 minutes' * NEW.duration
		AND NEW.date_appointment < date_appointment + interval '1 minutes' * duration
	) THEN RAISE NOTICE 'rendez-vous déjà pris';
	RETURN null;
    END IF;

	RETURN new;
	
END;
$$;

CREATE TRIGGER check_rdv 
BEFORE INSERT OR UPDATE
ON td_appointment
FOR EACH ROW
EXECUTE PROCEDURE trigger_check_rdv()
