import { Metadata } from 'next'

const description =
  "TIMA, a mighty Tibetan Mastiff, also known as Do Khyi, is the fiercest guardian in Crypto. These majestic dogs are symbols of strength, loyalty, and wealth. His floofy charm and gentle nature may deceive, but beneath the mane flows the fierce blood of a true 'Heavenly Lion.' TIMA ferociously fends off crypto bears, shielding the pack and guiding hodlers toward prosperity. Join the pack and fight the bears!"
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
