set search_path = core;

insert into users
  (firstname, lastname)
  values
  ('Steph', 'Knowles'),
  ('James', 'Ward'),
  ('Jodi', 'key'),
  ('Becca', 'Smith'),
  ('Fran', 'Silverton'),
  ('Cody', 'Barber')
;

insert into authors
  (firstname, lastname)
  values
  ('Stephen', 'Pinker'),
  ('Noam', 'Chomsky'),
  ('Éric-Emmanuel', 'Schmitt'),
  ('Raymond', 'Carver'),
  ('Saffet', 'Murat Tura'),
  ('John', 'Green'),
  ('Mariana', 'Leky')
;
insert into books (title, author_id, language, image, owner_id)
  values
  ('Oscar and the Lady in Pink', 3, 'en', '/books/1.jpg', 1),
  ('What We Talk About When We Talk About Love', 4, 'en', '/books/2.jpg', 2),
  ('Freud''dan Lacan''a Psikanaliz', 5, 'en', '/books/3.jpg', 3),
  ('The Fault in our Stars', 6, 'en', '/books/4.jpg', 4),
  ('Was man von hier aus sehen kann', 7, 'de', '/books/5.jpg', 5),
  ('Turtles all the Way Down', 6, 'en', '/books/6.jpg', 6)
;  
