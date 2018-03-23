create schema core;
create extension postgis;
  
create table core.users (
  id serial primary key,
  email varchar,
  firstname varchar,
  lastname varchar,
  avatar varchar,
  location geometry
);

create table core.authors (
  id serial primary key,
  firstname varchar,
  lastname varchar
);

create table core.books (
  id serial primary key,
  title varchar,
  image varchar,
  language languages,
  author_id integer references core.authors (id),
  owner_id integer references core.users (id)
);
