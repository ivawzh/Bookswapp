const express = require("express");
const { postgraphile } = require("postgraphile");
const { Client } = require("pg");
const firebase = require('firebase-admin');

// configure environment variables
require('./env');
// configure firebase
require('./firebase');

const app = express();

const createGraphQLServer = () => {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  client
  .connect()
  .then(() => {
    console.log('Connected to database, starting server...')
    app.all('*', (request, response, next) => {
      const authHeader = request.get('authorization');
      if (authHeader !== undefined){
        const jwt = authHeader.split('Bearer ')[1]
        console.log(`verifying JWT ${jwt}`);
        firebase
        .auth()
        .verifyIdToken(jwt)
        .then(claims => {
          console.log(claims);
          next()
        })
        .catch(err => {
          console.log(err);
          next();
        });
      } else {
        next();
      }
    });
    app.use(
      postgraphile(
        process.env.DATABASE_URL,
        process.env.SCHEMA,
        {
          graphiql: true,
        }
      ),
    );
    app.listen(
      {
        host: '0.0.0.0',
        port: process.env.PORT,
      },
      () => console.log('server listening on port ' + process.env.PORT + '/graphiql'),
    );
  })
  .catch((err) => {
    console.log(err);
    console.error('error connecting to postgres, waiting to retry...');
    setTimeout(createGraphQLServer, 2000);
  });
};

createGraphQLServer();
