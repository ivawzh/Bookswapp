const express = require("express");
const { postgraphile } = require("postgraphile");
const { Client } = require("pg");
const firebase = require('firebase-admin');

const removeSlashes = str =>  JSON.parse(`"${str}"`);

const firebaseConf = {
  "type": "service_account",
  "project_id": process.env.FIREBASE_PROJECT_ID,
  "private_key_id": process.env.FIREBASE_PRIVATE_KEY_ID,
  "private_key": removeSlashes(process.env.FIREBASE_PRIVATE_KEY),
  "client_email": process.env.FIREBASE_CLIENT_EMAIL,
  "client_id": process.env.FIREBASE_CLIENT_ID,
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://accounts.google.com/o/oauth2/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": process.env.FIREBASE_CLIENT_X509_CERT_URL,
}

firebase.initializeApp({
  credential: firebase.credential.cert(firebaseConf),
});

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
      const jwt = authHeader.split('Bearer ')[1]
      console.log(`verifying JWT ${jwt}`);
      firebase
      .auth()
      .verifyIdToken(jwt)
      .then(claims => {
        console.log(claims);
        next()
      })
      .catch(err => console.log(err));
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
