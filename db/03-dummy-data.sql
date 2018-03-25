set search_path = core, public, postgis;

insert into places
  (
    google_places_api_json,
    google_place_id,
    latitude,
    longitude,
    location,
    formatted_address,
    country
  )
  values
  (
    '{
     "results" : [
        {
           "address_components" : [
              {
                 "long_name" : "E17 7ER",
                 "short_name" : "E17 7ER",
                 "types" : [ "postal_code" ]
              },
              {
                 "long_name" : "Woodville Road",
                 "short_name" : "Woodville Rd",
                 "types" : [ "route" ]
              },
              {
                 "long_name" : "Walthamstow",
                 "short_name" : "Walthamstow",
                 "types" : [ "neighborhood", "political" ]
              },
              {
                 "long_name" : "London",
                 "short_name" : "London",
                 "types" : [ "postal_town" ]
              },
              {
                 "long_name" : "Greater London",
                 "short_name" : "Greater London",
                 "types" : [ "administrative_area_level_2", "political" ]
              },
              {
                 "long_name" : "England",
                 "short_name" : "England",
                 "types" : [ "administrative_area_level_1", "political" ]
              },
              {
                 "long_name" : "United Kingdom",
                 "short_name" : "GB",
                 "types" : [ "country", "political" ]
              }
           ],
           "formatted_address" : "Woodville Rd, Walthamstow, London E17 7ER, UK",
           "geometry" : {
              "location" : {
                 "lat" : 51.5839949,
                 "lng" : -0.0303413
              },
              "location_type" : "APPROXIMATE",
              "viewport" : {
                 "northeast" : {
                    "lat" : 51.5853438802915,
                    "lng" : -0.02899231970849797
                 },
                 "southwest" : {
                    "lat" : 51.5826459197085,
                    "lng" : -0.03169028029150203
                 }
              }
           },
           "place_id" : "ChIJK0WeG8QddkgRnFc-o3rVvOk",
           "types" : [ "postal_code" ]
        }
     ],
     "status" : "OK"
  }',
  'ChIJK0WeG8QddkgRnFc-o3rVvOk',
  51.5839949,
  -0.0303413,
  ST_SetSRID(ST_MakePoint(-0.0303413::float, 51.5839949::float),4326),
  'Woodville Rd, Walthamstow, London E17 7ER, UK',
  'United Kingdom'
);



insert into users
  (firstname, lastname, email, address_id)
  values
  ('Steph', 'Knowles', 'steph@knowles.com', 1),
  ('James', 'Ward', 'nick@ward.com', null),
  ('Jodi', 'key', 'jodi@key.com', 1),
  ('Becca', 'Smith', 'becca@smith.com', null),
  ('Fran', 'Silverton', 'fran@silverton.com', null),
  ('Cody', 'Barber', 'cody@barber.com', null)
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
