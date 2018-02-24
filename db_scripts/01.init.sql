create schema bookish;

create table bookish.users (
	id serial primary key,
	email varchar,
	firstname varchar,
	lastname varchar
);

create table bookish.authors (
	id serial primary key,
	firstname varchar,
	lastname varchar
);

create table bookish.books (
	id serial primary key,
	title varchar,
	author integer references bookish.authors (id)
);