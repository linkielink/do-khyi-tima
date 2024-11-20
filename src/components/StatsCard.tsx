'use client'
import Button from 'components/Button'
import Card from 'components/Card'
import Metric from 'components/Metric'
import useTokenStats from 'hooks/useTokenStats'
import Image from 'next/image'
import { formatValue } from 'utils/format'

export default function StatsCard() {
  const { data, isLoading } = useTokenStats()

  console.log(data)

  return (
    <Card className='bg-card-token'>
      <div className='flex items-center w-full h-full p-4'>
        <Image src='/token.png' alt='$TIMA Token Logo' width='200' height='200' />
        <div className='flex flex-wrap content-between h-full'>
          <div className='flex flex-wrap w-full gap-1'>
            <h1 className='w-full text-2xl font-bold text-center text-black dark:text-white'>
              $TIMA
            </h1>
            <h2 className='w-full text-xl text-center text-black dark:text-white'>Do Khyi</h2>
            <h3 className='w-full italic text-center text-black dark:text-white/50'>
              Tibetan Mastiff
            </h3>
          </div>
          <div className='flex flex-wrap justify-center w-full gap-4 p-4 md:gap-2 md:p-0'>
            <Metric
              value={
                data
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
                data
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
            <Button text='Buy $TIMA' href='' />
          </div>
        </div>
      </div>
    </Card>
  )
}
