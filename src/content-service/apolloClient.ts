import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: `https://preview-graphql.kontent.ai/${process.env.NEXT_KONTENTAI_ENVIRONMENT_ID}`,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${process.env.NEXT_KONTENTAI_API_KEY}`,
  },
});

export default client;
