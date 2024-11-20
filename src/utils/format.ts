import BigNumber from 'bignumber.js'

interface FormatOptions {
  decimals?: number
  minDecimals?: number
  maxDecimals?: number
  thousandSeparator?: boolean
  prefix?: string
  suffix?: string
  rounded?: boolean
  abbreviated?: boolean
}

export const formatValue = (amount: number | string, options?: FormatOptions): string => {
  let numberOfZeroDecimals: number | null = null
  const minDecimals = options?.minDecimals ?? 2
  const maxDecimals = options?.maxDecimals ?? 2
  let enforcedDecimals = maxDecimals
  const thousandSeparator = options?.thousandSeparator ?? true

  if (typeof amount === 'string') {
    const decimals = amount.split('.')[1] ?? null
    if (decimals && Number(decimals) === 0) {
      numberOfZeroDecimals = decimals.length
    }
  }
  let convertedAmount: BigNumber | string = new BigNumber(amount).dividedBy(
    10 ** (options?.decimals ?? 0),
  )

  const amountSuffix = options?.abbreviated
    ? convertedAmount.isGreaterThanOrEqualTo(1_000_000_000)
      ? 'B'
      : convertedAmount.isGreaterThanOrEqualTo(1_000_000)
      ? 'M'
      : convertedAmount.isGreaterThanOrEqualTo(1_000)
      ? 'K'
      : false
    : ''

  if (amountSuffix === 'B') {
    convertedAmount = convertedAmount.dividedBy(1_000_000_000)
  }
  if (amountSuffix === 'M') {
    convertedAmount = convertedAmount.dividedBy(1_000_000)
  }
  if (amountSuffix === 'K') {
    convertedAmount = convertedAmount.dividedBy(1_000)
  }

  if (options?.rounded) {
    convertedAmount = convertedAmount.toFixed(maxDecimals)
  } else {
    const amountFractions = convertedAmount.toString().split('.')

    if (maxDecimals > 0) {
      if (typeof amountFractions[1] !== 'undefined') {
        if (amountFractions[1].length >= maxDecimals) {
          convertedAmount = `${amountFractions[0]}.${amountFractions[1].substr(0, maxDecimals)}`
        }
        if (amountFractions[1].length < minDecimals) {
          convertedAmount = `${amountFractions[0]}.${amountFractions[1].padEnd(minDecimals, '0')}`
        }
      } else if (minDecimals > 0) {
        convertedAmount = `${amountFractions[0]}.${'0'.repeat(minDecimals)}`
      }
    } else {
      convertedAmount = amountFractions[0]
    }
  }

  if (amountSuffix === 'B' || amountSuffix === 'M' || amountSuffix === 'K') {
    enforcedDecimals = 2
  }

  if (thousandSeparator) {
    convertedAmount = new BigNumber(convertedAmount).toNumber().toLocaleString('en', {
      useGrouping: true,
      minimumFractionDigits: minDecimals,
      maximumFractionDigits: enforcedDecimals,
    })
  }

  let returnValue = ''

  if (numberOfZeroDecimals) {
    if (numberOfZeroDecimals < enforcedDecimals) {
      returnValue = Number(returnValue).toFixed(numberOfZeroDecimals)
    } else {
      returnValue = Number(returnValue).toFixed(enforcedDecimals)
    }
  }

  if (options?.prefix) {
    returnValue = `${options.prefix}${returnValue}`
  }

  returnValue = `${returnValue}${convertedAmount}`
  if (amountSuffix) {
    returnValue = `${returnValue}${amountSuffix}`
  }

  if (options?.suffix) {
    returnValue = `${returnValue}${options.suffix}`
  }

  return returnValue
}
