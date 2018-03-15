const { createServer } = require("http");
const { postgraphile } = require("postgraphile");
const { Client } = require("pg");

const createGraphQLServer = () => {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  client
  .connect()
  .then(() => {
    console.log('Connected to database, starting server...')
    createServer(
      postgraphile(
        process.env.DATABASE_URL,
        process.env.SCHEMA,
        {
          graphiql: true,
        }
      ),
    )
    .listen(
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
