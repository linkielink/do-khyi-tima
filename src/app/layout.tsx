import { metaData } from 'constants/pageMetadata'
import Head from 'next/head'
import './globals.css'

export const metadata = metaData.main

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className='p-0 m-0 scrollbar-hide' lang='en'>
      <Head>
        <link rel='icon' type='image/png' href='/favicon-96x96.png' sizes='96x96' />
        <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <meta name='apple-mobile-web-app-title' content='$TIMA' />
        <link rel='manifest' href='/site.webmanifest' />
        <meta name='msapplication-TileColor' content='#000000' />
        <meta name='theme-color' content='#000000' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <body className='min-h-screen p-4 m-0 bg-white md:p-20 dark:bg-black dark:bg-mobile-dark bg-mobile md:bg-main dark:md:bg-main-dark scrollbar-hide'>
        <main className='grid w-full grid-cols-1 gap-10 md:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5'>
          {children}
        </main>
      </body>
    </html>
  )
}
