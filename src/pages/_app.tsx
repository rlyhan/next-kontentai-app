import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import apolloClient from "../content-service/apolloClient"; // Adjust the path based on your project structure
import Layout from "../components/layout";
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default App;
