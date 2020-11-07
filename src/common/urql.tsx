import {
  cacheExchange,
  createClient,
  dedupExchange,
  fetchExchange,
  ssrExchange
} from "@urql/core";

// import { devtoolsExchange } from "@urql/devtools";
import nodeFetch from 'node-fetch';

export const ssr = ssrExchange({
  isClient: process.env.BROWSER_ENV,
  initialState: process.env.BROWSER_ENV ? window.__URQL_DATA__ : undefined,
});

export const client = createClient({
  url: 'https://graphql-weather-api.herokuapp.com/',
  fetch: process.env.BROWSER_ENV ? fetch : nodeFetch,
  exchanges: [
    dedupExchange,
    cacheExchange,
    ssr, // Add `ssr` in front of the `fetchExchange`
    fetchExchange,
  ],
});
