import { cacheExchange, createClient, dedupExchange, fetchExchange, ssrExchange } from "@urql/core";

import fetch from "isomorphic-unfetch";

const isServerSide = typeof window === "undefined";

export const ssr = ssrExchange({
  isClient: !isServerSide,
  initialState: !isServerSide ? window.urqlData : undefined,
});

export const client = createClient({
  url: "https://rickandmortyapi.com/graphql", // Doc: https://rickandmortyapi.com/documentation/#episode-schema
  fetch,
  exchanges: [
    dedupExchange,
    cacheExchange,
    ssr, // Add `ssr` in front of the `fetchExchange`
    fetchExchange,
  ],
});
