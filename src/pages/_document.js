import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className='bg-white' lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true} />
        <link href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Allura&family=Courgette&family=Parisienne&display=swap" rel="stylesheet" />
      </Head>
      <body className=''>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
