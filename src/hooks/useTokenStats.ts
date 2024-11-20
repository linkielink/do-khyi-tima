import axios from 'axios'
import { PAIR_ADDRESS, TOKEN_CONTRACT } from 'constants/tokenData'
import useSWR from 'swr'

interface PairData {
  chainId: string
  dexId: string
  url: string
  pairAddress: string
  baseToken: {
    address: string
    name: string
    symbol: string
  }
  quoteToken: {
    address: string
    name: string
    symbol: string
  }
  priceNative: string
  priceUsd: string
  txns: {
    m5: {
      buys: number
      sells: number
    }
    h1: {
      buys: number
      sells: number
    }
    h6: {
      buys: number
      sells: number
    }
    h24: {
      buys: number
      sells: number
    }
  }
  volume: {
    h24: number
    h6: number
    h1: number
    m5: number
  }
  priceChange: {
    m5: number
    h1: number
    h6: number
    h24: number
  }
  liquidity: {
    usd: number
    base: number
    quote: number
  }
  fdv: number
  marketCap: number
  pairCreatedAt: number
  info: {
    imageUrl: string
    header: string
    openGraph: string
    websites: []
    socials: [
      {
        type: string
        url: string
      },
      {
        type: string
        url: string
      },
    ]
  }
}

const fetcher = () =>
  axios.get(`https://api.dexscreener.com/latest/dex/tokens/${TOKEN_CONTRACT}`).then((res) => {
    if (res.status !== 200) return []
    const data = res.data.pairs.filter(
      (pairData: PairData) => pairData.dexId === 'raydium' && pairData.pairAddress === PAIR_ADDRESS,
    )
    if (!data) return []

    return data[0]
  })

export default function useTokenStats() {
  return useSWR('fetch/coinStats', fetcher, {
    suspense: false,
    refreshInterval: 10_000,
    revalidateIfStale: true,
    revalidateOnFocus: true,
    staleTime: 10_000,
  })
}
