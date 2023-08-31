import { Html, Head, Main, NextScript } from "next/document";
import HeadHtml from "../components/_head";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <HeadHtml siteTitle="Next.js Contentful App" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
