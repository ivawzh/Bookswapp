# Getting started

get started with one line:

`docker-compose up`

then head to localhost:3000 to see the app.

GraphQL endpoint is at http://localhost:3000/graphql
Interactive GraphQL playground is at http://localhost:3000/graphiql

# Development

SQL scripts are only run on container creation. This means if you add a schema
change or data change in the postgres sql directory you will need to run
`docker-compose rm` then `docker-compose up` again for the sql init scripts to
be rerun.

## TODO:
  - ~~Authentication: postgraphql JWT~~
  - Authorisation - add custom claims to firebase JWT and use these with postgres security
  - register book form
    - uniform
    - upload images
    - location - geocoding
  - search books
  - find book near me search - postgis search
  - messaging to arrange collection
  - SEO from https://github.com/thedaviddias/Front-End-Checklist#seo
  - survey users
    - would you give away a free book
    - would you be willing to post it for free?
    - how far would you be willing to travel to collect?
    - would you be OK with someone coming to collect from your house or workplace?
    - would you be willing to pay for postage to recieve a free book?
