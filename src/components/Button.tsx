'use client'

import classNames from 'classnames'

interface Props {
  href: string
  text: string
}

export default function Button(props: Props) {
  const { href, text } = props
  return (
    <button
      className={classNames(
        'px-6 py-2 text-lg text-center text-black bg-white border border-black rounded-md',
        'dark:bg-black dark:border-white dark:text-white',
        'hover:bg-black hover:text-white hover:border-black',
        'dark:hover:bg-white dark:hover:text-black dark:hover:border-white',
      )}
      onClick={() => window.open(href, '_blank')}
    >
      {text}
    </button>
  )
}
