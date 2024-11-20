import classNames from 'classnames'

interface Props {
  value: string
  label: string
  isLoading: boolean
  isSmall?: boolean
  className?: string
}

export default function Metric(props: Props) {
  const { value, label, isSmall, className, isLoading } = props

  return (
    <div className={classNames('flex flex-wrap justify-center w-full sm:w-auto', className)}>
      {isLoading ? (
        <p className='inline-block text-black dark:text-white loading'>...</p>
      ) : (
        <p
          className={classNames(
            'w-full text-center text-black dark:text-white',
            isSmall ? 'text-sm' : 'text-lg',
          )}
        >
          {value}
        </p>
      )}
      <p
        className={classNames(
          'w-full text-center text-black/80 dark:text-white/80',
          isSmall ? 'text-xs' : 'text-sm',
        )}
      >
        {label}
      </p>
    </div>
  )
}
