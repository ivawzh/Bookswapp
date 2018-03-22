import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';

import App from './components/App';
import initApollo from './apolloClient'
import registerServiceWorker from './registerServiceWorker';
import initFirebase from './firebase';

initFirebase();
const client = initApollo();

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);

registerServiceWorker();
