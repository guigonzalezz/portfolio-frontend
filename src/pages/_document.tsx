import { Html, Head, Main, NextScript } from 'next/document';
import { useEffect } from 'react';

export default function Document ()  {
  return (
    <Html lang="en">
      <Head>
        <title>Guilherme Gonzalez</title>
        <meta name="description" content="Guilherme Gonzalez Portfolio" />
        <link rel="icon" href="/logo_fundo.ico"/>
        
        <link href="http://fonts.cdnfonts.com/css/signpainter" rel="stylesheet"></link>
        <link href="http://fonts.cdnfonts.com/css/roboto-mono" rel="stylesheet"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
