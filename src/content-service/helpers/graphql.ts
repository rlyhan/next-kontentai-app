import { DocumentNode } from "@apollo/client";

import client from "../apolloClient";

export async function fetchQuery(document: DocumentNode) {
  return await client.query({ query: document });
}

export async function fetchQueryById(document: DocumentNode, id: string) {
  return await client.query({
    query: document,
    variables: { id },
  });
}
