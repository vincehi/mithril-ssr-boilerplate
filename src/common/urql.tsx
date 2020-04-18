import {
  cacheExchange,
  createClient,
  dedupExchange,
  fetchExchange,
  ssrExchange
} from "@urql/core";
import nodeFetch from 'node-fetch';

export const ssr = ssrExchange({
  isClient: !!process.browser,
  initialState: !!process.browser ? window.__URQL_DATA__ : undefined,
});

export const client = createClient({
  url: 'https://graphql-pokemon.now.sh/',
  fetch: process.browser ? fetch : nodeFetch,
  exchanges: [
    dedupExchange,
    cacheExchange,
    ssr, // Add `ssr` in front of the `fetchExchange`
    fetchExchange,
  ],
});
