CREATE KEYSPACE IF NOT EXISTS snaketours
WITH replication = {'class' : 'SimpleStrategy', 'replication_factor': 3};

USE snaketours;

DROP TABLE IF EXISTS snaketours.tours;

--to query for tours
CREATE TABLE snaketours.tours (
  tour_id int,
  name text,
  overview text,
  cancellation_policy text,
  return_details text,
  created_at varchar,
  updated_at varchar,
  PRIMARY KEY((tour_id), name, overview, cancellation_policy, return_details, created_at, updated_at)
);

DROP TABLE IF EXISTS snaketours.ToursAttractions;

--to query for attractions
CREATE TABLE snaketours.ToursAttractions (
  created_at varchar,
  updated_at varchar,
  attraction_id int,
  tour_id int,
  PRIMARY KEY((created_at), updated_at, attraction_id, tour_id)
);

DROP TABLE IF EXISTS snaketours.attractions;

CREATE TABLE snaketours.attractions (
  attraction_id int,
  name text,
  latitude float,
  longitude float,
  description text,
  rating float,
  image_path text,
  image_alt text,
  created_at varchar,
  updated_at varchar,
  PRIMARY KEY((attraction_id), name, latitude, longitude, description, rating, image_path, image_alt, created_at, updated_at)
);

COPY snaketours.tours FROM '/Users/ChE/Desktop/Archive/tours.csv' WITH DELIMITER=',' AND HEADER=TRUE;

COPY snaketours.attractions FROM '/Users/ChE/Desktop/Archive/attractions.csv' WITH DELIMITER=',' AND HEADER=TRUE;

COPY snaketours.toursattractions FROM '/Users/ChE/Desktop/Archive/toursAttractions.csv' WITH DELIMITER=',' AND HEADER=TRUE;