import { Html, Head, Main, NextScript } from 'next/document';
import Header from '@/components/Navbar';
import Navbar from '@/components/Navbar';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Navbar/>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
