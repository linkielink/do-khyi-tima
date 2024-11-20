import Button from 'components/Button'
import Card from 'components/Card'
import StatsCard from 'components/StatsCard'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <StatsCard />
      <Card>
        <div className='flex flex-wrap content-center justify-center w-full h-full gap-10 p-10 gradient-telegram'>
          <div className='flex justify-center w-full'>
            <div className='block w-[166px]'>
              <svg xmlns='http://www.w3.org/2000/svg' version='1.1' viewBox='0 0 239.6 196.9'>
                <path
                  d='M58.4,112.2l26.3,72.5s3.3,6.8,6.8,6.8,55.9-54.3,55.9-54.3l58.2-112.1L59.4,93.5l-.9,18.7Z'
                  fill='#c8daea'
                />
                <path
                  d='M93.3,130.8l-5,53.5s-2.1,16.4,14.3,0c16.4-16.4,32.2-29,32.2-29'
                  fill='#a9c6d8'
                />
                <path
                  d='M58.9,114.8L4.8,97.2s-6.5-2.6-4.4-8.5c.4-1.2,1.3-2.3,3.9-4.1C16.3,76.3,226.2,1.1,226.2,1.1c0,0,5.9-2,9.4-.7,1.8.5,3.1,2,3.5,3.8.4,1.6.5,3.2.5,4.8,0,1.4-.2,2.7-.3,4.7-1.3,20.6-39.5,174-39.5,174,0,0-2.3,9-10.5,9.3-4.1.1-8-1.4-10.9-4.2-16.1-13.8-71.7-51-84-59.2-.6-.4-.9-1-1-1.7-.2-.9.8-1.9.8-1.9,0,0,96.9-85.8,99.4-94.8.2-.7-.6-1-1.6-.7-6.4,2.4-118,72.5-130.3,80.3-.9.3-1.8.3-2.7.2Z'
                  fill='#fff'
                />
              </svg>
            </div>
          </div>
          <Button text='Join $TIMA Telegram Group' href='' />
        </div>
      </Card>

      <Card>
        <div className='flex flex-wrap content-center justify-center w-full h-full gap-10 p-10 bg-black'>
          <div className='flex justify-center w-full'>
            <div className='block w-[150px]'>
              <svg viewBox='0 0 300 271' xmlns='http://www.w3.org/2000/svg'>
                <path
                  fill='#FFF'
                  d='m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z'
                />
              </svg>
            </div>
          </div>
          <Button text='Follow @dokhyitima on X' href='https://x.com/dokhyitima' />
        </div>
      </Card>

      <Card className='bg-card-bigger-than-a-bull'>
        <div className='flex flex-wrap content-start w-full h-full gap-4 p-4 justify-left items-top bg-white/60 dark:bg-black/60'>
          <p className='w-full text-xl italic text-black md:w-4/5 dark:text-white'>
            The Tibetan Mastiff is one of the biggest dogs in the world, with adult males tipping
            the scales at a whopping 90 to 150 pounds - and some legendary beasts reaching a massive
            200 pounds! Standing up to 30 inches tall, these giants can go paw-to-paw with a bull.
          </p>
        </div>
      </Card>

      <Card className='flex-wrap justify-center md:flex-nowrap'>
        <Image
          src='/cards/crying-bear.webp'
          alt='$TIMA making bears cry'
          width='360'
          height='360'
        />
        <div className='flex items-center content-start w-full gap-4 p-4 md:h-full justify-left'>
          <p className='w-full text-2xl italic text-center text-black dark:text-white'>
            $TIMA is making bears cry!
          </p>
        </div>
      </Card>

      <Card className='bg-card-queen'>
        <div className='flex flex-wrap content-center justify-center w-full h-full gap-4 p-4 items-top bg-white/60 dark:bg-black/60'>
          <p className='text-xl italic text-center text-black md:w-4/5 dark:text-white'>
            The giant herding dog from Tibet found its way into the British royal family as early as
            the 19th century. Queen Victoria received a Do Khyi as a gift from the then Indian
            Viceroy Lord Hardinge in 1847.
          </p>
        </div>
      </Card>

      <Card className='flex-wrap items-center justify-center md:flex-nowrap'>
        <p className='p-4 text-sm italic text-center text-black md:w-4/5 dark:text-white'>
          The Do Khyi is an ancient breed of dog that originated in one of the world's most hostile
          mountain ranges, the Himalayas. Its strength and size have repeatedly reached Europe.
          Unlike in other pastoral cultures, the Do Khyi was held in the highest esteem in Tibet,
          was regarded as a very valuable asset and lived in very close contact with its people.
        </p>
        <Image
          src='/cards/shephard.webp'
          alt='The Do Khyi is an ancient breed of dog that originated in one of the worlds most hostile
          mountain ranges, the Himalaya'
          width='360'
          height='360'
        />
      </Card>

      <Card className='flex-wrap items-center justify-center md:flex-nowrap'>
        <p className='p-4 text-sm italic text-center text-black md:w-4/5 dark:text-white'>
          In China, the Do Khyi has become a status symbol. The richest of the rich are happy to pay
          six or seven-figure sums to adorn themselves with the most expensive dog in the world.
        </p>
        <Image
          src='/cards/chinese-wealth.webp'
          alt='In China, the Do Khyi has become a status symbol'
          width='360'
          height='360'
        />
      </Card>

      <Card className='bg-card-download'>
        <div className='flex flex-wrap items-center content-center w-full h-full gap-4 p-4 bg-white/80 dark:bg-black/80'>
          <div className='flex items-center w-full gap-6'>
            <Image src='/token.png' alt='$TIMA Token Logo' width='50' height='50' />
            <a
              className='text-black underline dark:text-white hover:no-underline'
              href='/token.png'
              download='token.png'
            >
              Download .png Token Logo (343 KB)
            </a>
          </div>

          <div className='flex items-center w-full gap-6'>
            <Image src='/token.webp' alt='$TIMA Token Logo' width='50' height='50' />
            <a
              className='text-black underline dark:text-white hover:no-underline'
              href='/token.webp'
              download='token.webp'
            >
              Download .webp Token Logo (109 KB)
            </a>
          </div>
          <div className='flex items-center w-full gap-6'>
            <Image src='/token.svg' alt='$TIMA Token Logo' width='50' height='50' />
            <a
              className='text-black underline dark:text-white hover:no-underline'
              href='/token.svg'
              download='token.svg'
            >
              Download .svg Token Logo (285 KB)
            </a>
          </div>
        </div>
      </Card>
    </>
  )
}
