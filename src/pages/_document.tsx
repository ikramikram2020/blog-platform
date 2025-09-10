import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="font-sans bg-pink-50 text-gray-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
