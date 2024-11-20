import classNames from 'classnames'

interface Props {
  children: React.ReactNode
  className?: string
}

export default function Card(props: Props) {
  const { children, className } = props

  return (
    <section
      className={classNames(
        'flex w-full bg-white rounded-md dark:bg-stone-950 md:h-card min-h-[150px] drop-shadow-lg overflow-hidden',
        className,
      )}
    >
      {children}
    </section>
  )
}
