import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="preload"
          href="/fonts/inter-bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
          data-next-font="size-adjust"
        />
        {/* <link
          rel="preload"
          href="/fonts/inter-regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
          data-next-font="size-adjust"
        />
        <link
          rel="preload"
          href="/fonts/inter-semibold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
          data-next-font="size-adjust"
        /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
