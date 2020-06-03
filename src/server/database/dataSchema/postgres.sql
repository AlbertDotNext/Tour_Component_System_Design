DROP DATABASE IF EXISTS snaketours;

CREATE DATABASE snaketours;

\c snaketours;

DROP TABLE IF EXISTS "tours";

CREATE TABLE tours(
    id SERIAL PRIMARY KEY,
    name varchar(500),
    overview varchar(900),
    cancellation_policy varchar(500),
    return_details varchar(500),
    created_at varchar(255),
    updated_at varchar(255)
);

DROP TABLE IF EXISTS "attractions";

CREATE TABLE attractions (
    id SERIAL PRIMARY KEY,
    name varchar(500),
    latitude varchar(900),
    longitude varchar(900),
    description varchar(900),
    rating varchar(500),
    image_path varchar(255),
    image_alt varchar(255),
    created_at varchar(255),
    updated_at varchar(255)
);

DROP TABLE IF EXISTS "ToursAttractions";

CREATE TABLE "ToursAttractions" (
    created_at varchar(255),
    updated_at varchar(255),
    attraction_id SERIAL,
    tour_id SERIAL
);

COPY tours
FROM '/Users/ChE/Desktop/Archive/tours.csv'
DELIMITER ',' CSV HEADER;

COPY attractions
FROM '/Users/ChE/Desktop/Archive/attractions.csv'
DELIMITER ',' CSV HEADER;

COPY "ToursAttractions"
FROM '/Users/ChE/Desktop/Archive/toursAttractions.csv'
DELIMITER ',' CSV HEADER;

CREATE UNIQUE INDEX tours_index ON tours(id);

CREATE UNIQUE INDEX attractions_index ON attractions(id);

CREATE UNIQUE INDEX toursattractions_index ON "ToursAttractions"(attraction_id, tour_id);

