'use client'
import Button from 'components/Button'
import Card from 'components/Card'
import Metric from 'components/Metric'
import { PAIR_ADDRESS } from 'constants/tokenData'
import useTokenStats from 'hooks/useTokenStats'
import Image from 'next/image'
import { formatValue } from 'utils/format'

export default function StatsCard() {
  const { data, isLoading } = useTokenStats()

  const buyLink = `https://dexscreener.com/solana/${PAIR_ADDRESS}`

  return (
    <Card className='bg-card-token'>
      <div className='flex items-center w-full h-full p-4'>
        <Image src='/token.png' alt='$TIMA Token Logo' width='200' height='200' />
        <div className='flex flex-wrap content-between h-full'>
          <div className='flex flex-wrap w-full gap-1 content-start'>
            <h1 className='w-full text-2xl font-bold text-center text-black dark:text-white'>
              $TIMA
            </h1>
            <h2 className='w-full text-xl text-center text-black dark:text-white'>Do Khyi</h2>
            <h3 className='w-full italic text-center text-black/70 dark:text-white/70'>
              <span className='text-black dark:text-white'>Ti</span>betan{' '}
              <span className='text-black dark:text-white'>Ma</span>stiff
            </h3>
          </div>
          <div className='flex flex-wrap justify-center content-start w-full gap-4 p-4 md:gap-2 md:p-0'>
            <Metric
              value={
                data && data.marketCap
                  ? formatValue(data.marketCap, {
                      abbreviated: true,
                      prefix: '$',
                      minDecimals: 2,
                      maxDecimals: 2,
                    })
                  : 'N/A'
              }
              label='Market Cap'
              isLoading={isLoading}
            />
            <Metric
              value={
                data && data.volume
                  ? formatValue(data.volume.h24, {
                      abbreviated: true,
                      prefix: '$',
                      minDecimals: 2,
                      maxDecimals: 2,
                    })
                  : 'N/A'
              }
              label='24H Volume'
              isLoading={isLoading}
            />
          </div>

          <div className='flex justify-center w-full'>
            <Button text='Buy $TIMA' href={buyLink.toLocaleLowerCase()} />
          </div>
        </div>
      </div>
    </Card>
  )
}
