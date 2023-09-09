import React from 'react';
import ReactDOM from 'react-dom/client';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import './styles/index.css';
import './styles/fonts.css';
import App from './App';
import { ThemeProvider } from '@mui/material';
import theme from './mui/theme';

const client = new ApolloClient({
  uri:"https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clf9pr08e168s01ueaoge6e9q/master",
  cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
  </ApolloProvider>
);
