import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"/>
            <link rel="styelsheet" href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono:wght@500&display=swap"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono:wght@700&display=swap"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Teko:wght@300&display=swap"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Solway:wght@400&display=swap"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap"/>
            <link rel="styelsheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Open+Sans&display=swap"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"/>
            <link rel="styelsheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
