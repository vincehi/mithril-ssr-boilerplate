import { cacheExchange, createClient, dedupExchange, fetchExchange, ssrExchange } from '@urql/core';

// import { devtoolsExchange } from "@urql/devtools";
import fetch from 'isomorphic-unfetch';

const isServerSide = typeof window === 'undefined';

export const ssr = ssrExchange({
  isClient: !isServerSide,
  initialState: !isServerSide ? window.urqlData : undefined,
});

export const client = createClient({
  url: 'https://graphql-weather-api.herokuapp.com/',
  fetch,
  exchanges: [
    dedupExchange,
    cacheExchange,
    ssr, // Add `ssr` in front of the `fetchExchange`
    fetchExchange,
  ],
});
