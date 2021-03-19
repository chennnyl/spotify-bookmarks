import Head from 'next/head'

export default function CustomHead() {
    return (
        <Head>
          <title>Spotify Bookmarks</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;600&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;600&display=swap" media="print" onLoad="this.media='all'" />
          <noscript>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;600&display=swap" />
          </noscript>
        </Head>
    )
}