create schema core;
create extension postgis;

create table core.places (
  id serial primary key,
  formatted_address varchar,
  country varchar,
  latitude float not null,
  longitude float not null,
  location geometry(POINT,4326) not null,
  google_place_id varchar,
  google_places_api_json json
);

create table core.users (
  id serial primary key,
  email varchar not null,
  firstname varchar not null,
  lastname varchar not null,
  avatar varchar,
  address_id integer references core.places (id)
);

create table core.authors (
  id serial primary key,
  firstname varchar not null,
  lastname varchar not null
);

create table core.books (
  id serial primary key,
  title varchar not null,
  image varchar not null,
  language languages,
  author_id integer references core.authors (id) not null,
  owner_id integer references core.users (id) not null
);
