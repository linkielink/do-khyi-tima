import { Metadata } from 'next'

const description = 'Description'
const title = 'Do Khyi Tima (The Tibetan Mastiff) - $TIMA'

export const metaData: { [key: string]: Metadata } = {
  main: {
    title,
    metadataBase: new URL('https://do-khyi-tima.com'),
    description,
    keywords: ['do khyi', 'meme coin', 'solana', 'crypto', 'dog', 'mastiff', 'tima'],
    openGraph: {
      type: 'website',
      url: 'https://do-khyi-tima.com',
      title,
      locale: 'en_US',
      description,
      siteName: 'Do Khyi Tima',
      images: [
        {
          url: 'https://do-khyi-tima.com/banner.jpg',
          width: 520,
          height: 275,
          alt: 'Do Khyi Tima',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@timasol',
      title,
      description,
      images: [
        {
          url: 'https://do-khyi-tima.com/banner.jpg',
          width: 520,
          height: 275,
          alt: 'Do Khyi Tima',
        },
      ],
    },
  },
}
