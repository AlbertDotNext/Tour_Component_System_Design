DROP DATABASE IF EXISTS snaketours;

CREATE DATABASE snaketours;

USE snaketours;


CREATE TABLE tour (
    id int not null auto_increment,
    attraction_id int not null,
    tourName varchar(25) not null,
    overview varchar(255) not null,
    cancellation_policy varchar(255) not null,
    return_details varchar(255) not null,
    PRIMARY KEY(id),
    FOREIGN KEY(attraction_id)
        REFERENCES attractions(id)
);

CREATE TABLE attractions (
    id int not null auto_increment PRIMARY KEY,
    attractionsName varchar(25) not null,
    latitude float,
    longitude float,
    description varchar(255),
    rating float not null,
    attraction_url varchar(255),
    image_path varchar(255),
    image_alt varchar(255)
)


CREATE TABLE tour_attractions (
    stopIndex int not null,
    duration int not null,
    admissionPrice float,
    admissionNote varchar(255),
    attraction_id int not null,
    tour_id int not null,
    FOREIGN KEY(attraction_id)
        REFERENCES attractions(id)
    FOREIGN KEY(tour_id)
        REFERENCES tours(id)
)