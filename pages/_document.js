// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'
import css from './indexo.scss' // does not work
import css2 from './indexo2.scss' // does not work

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body className={css.body}>
          {JSON.stringify(css)}
          {JSON.stringify(css2)}
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}