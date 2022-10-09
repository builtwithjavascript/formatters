// file: src/formatters/useNumberFormatters.ts

const defaultcurrencyDisplay = 'symbol' // 'symbol', 'narrowSymbol', 'code', 'name'

type NumberSeparators = {
  decimal: string
  group: string
}

const getNumberSeparators = (lcid: string): NumberSeparators => {
  const numberWithSeparators = 1231.1
  const parts = Intl.NumberFormat(lcid).formatToParts(numberWithSeparators)

  return {
    decimal: parts.find((part) => part.type === 'decimal')?.value as string,
    group: parts.find((part) => part.type === 'group')?.value as string
  }
}

// helper to calculate the cache key for the datetime Intl.NumberFormat instances
export const getNumberFormattersCacheKey = (params: {
  lcid: string
  style?: string
  currency?: string
  currencyDisplay?: string
  minimumFractionDigits: number
  maximumFractionDigits: number
}) => {
  let { lcid, style, currency, currencyDisplay, minimumFractionDigits, maximumFractionDigits } = params
  style = (style || 'decimal').trim().toLowerCase()
  currency = (currency || '').trim()
  currencyDisplay = (currencyDisplay || defaultcurrencyDisplay).trim()

  let cacheKey = `${lcid}-${style}`
  if (currency.length > 0) {
    cacheKey = `${cacheKey}-${currency}`
    if (currencyDisplay.length > 0) {
      cacheKey = `${cacheKey}-${currencyDisplay}`
    }
  }
  cacheKey = `${cacheKey}-${minimumFractionDigits}-${maximumFractionDigits}`.trim().toLowerCase()
  return cacheKey
}

// hook to export the various number formatters utils
export const useNumberFormatters = (localeId: string) => {
  const _lcid = localeId
  const _cache = new Map<string, Intl.NumberFormat>()

  const _privateGetFormatter = (params: {
    style?: string
    currency?: string
    currencyDisplay?: string
    minimumFractionDigits: number
    maximumFractionDigits: number
  }) => {
    let { style, currency, currencyDisplay, minimumFractionDigits, maximumFractionDigits } = params

    style = (style || 'decimal').trim().toLowerCase()
    currency = (currency || '').trim()
    currencyDisplay = (currencyDisplay || defaultcurrencyDisplay).trim()

    let cacheKey = getNumberFormattersCacheKey({
      lcid: _lcid,
      style,
      currency,
      currencyDisplay,
      minimumFractionDigits,
      maximumFractionDigits
    })

    if (!_cache.has(cacheKey)) {
      // if not in our cache yet, create it and cache it
      let options: Intl.NumberFormatOptions = {
        style,
        minimumFractionDigits,
        maximumFractionDigits
      }
      if (currency.length > 0) {
        options.currency = currency
        if (currencyDisplay.length > 0) {
          options.currencyDisplay = currencyDisplay
        }
      }
      // cache instance
      const instance = new Intl.NumberFormat(_lcid, options)
      _cache.set(cacheKey, instance)
    }
    // return instance from cache
    return _cache.get(cacheKey) as Intl.NumberFormat
  }

  const _privateUnformatFn = (inputValue: string): number => {
    if (_cachedNumberSeparators) {
      _cachedNumberSeparators = getNumberSeparators(_lcid)
    }

    const numberSeparators = _cachedNumberSeparators as NumberSeparators

    const { decimal } = numberSeparators
    console.log(`[^0-9\${ group }]`)
    // Build regex to strip out everything except digits, decimal point and minus sign:
    const regex = new RegExp(`[^0-9\\${decimal}]`, 'g')
    const unformatted = parseFloat(
      `${inputValue}`
        .replace(/\((?=\d+)(.*)\)/, '-$1') // replace bracketed values with negatives
        .replace(regex, '') // strip out any cruft
        .replace(decimal, '.') // make sure decimal point is standard
    )

    // This will fail silently which may cause trouble, let's wait and see:
    return !isNaN(unformatted) ? unformatted : 0
  }

  let _cachedNumberSeparators: NumberSeparators | undefined

  return {
    whole: () => {
      return _privateGetFormatter({
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      })
    },
    decimal: (minimumFractionDigits: number = 0, maximumFractionDigits: number = 2) => {
      return _privateGetFormatter({
        style: 'decimal',
        minimumFractionDigits,
        maximumFractionDigits
      })
    },
    currency: (
      currency: string,
      currencyDisplay?: string,
      minimumFractionDigits: number = 0,
      maximumFractionDigits: number = 2
    ) => {
      return _privateGetFormatter({
        style: 'currency',
        currency,
        currencyDisplay,
        minimumFractionDigits,
        maximumFractionDigits
      })
    },
    percent: (minimumFractionDigits: number = 0, maximumFractionDigits: number = 2) => {
      return _privateGetFormatter({
        style: 'percent',
        minimumFractionDigits,
        maximumFractionDigits
      })
    },

    numberSeparators: (): NumberSeparators => {
      if (_cachedNumberSeparators) {
        _cachedNumberSeparators = getNumberSeparators(_lcid)
      }
      return _cachedNumberSeparators as NumberSeparators
    },

    unformat: _privateUnformatFn,

    unescapeResult(result: string) {
      return (result || '').replace(/\xa0/g, ' ').replace(/\u202f/g, ' ')
    }
  }
}

export type UseNumberFormatters = ReturnType<typeof useNumberFormatters>
