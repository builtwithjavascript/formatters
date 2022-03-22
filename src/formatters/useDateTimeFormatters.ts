// file: src/formatters/useDateTimeFormatters.ts

export type DayNameFormatType = 'long' | 'short' | 'narrow' | undefined
export type MonthNameFormatType = 'long' | 'short' | 'narrow' | 'numeric' | '2-digit' | undefined

const defaultDateStyle = 'short' // 'full', 'long', 'medium', 'short'

// helper to calculate the cache key for the datetime Intl.DateTimeFormat instance
export const getDateTimeFormattersCacheKey = (params: { lcid: string; dateStyle?: string; timeStyle?: string }) => {
  let { lcid, dateStyle, timeStyle } = params
  dateStyle = (dateStyle || defaultDateStyle).trim().toLowerCase()
  timeStyle = (timeStyle || '').trim().toLowerCase()

  let cacheKey = `${lcid}-${dateStyle}`
  if (timeStyle.length) {
    cacheKey = `${cacheKey}-${timeStyle}`
  }
  return cacheKey.trim().toLowerCase()
}

// hook to export the datetime, dayNames, monthNames utils
export const useDateTimeFormatters = (localeId: string) => {
  const _lcid = localeId
  const _cache = new Map<string, Intl.DateTimeFormat>()

  const _cacheDayNames = new Map<string, { id: number; name: string }[]>()
  const _cacheMonthNames = new Map<string, { id: number; name: string }[]>()

  return {
    dateTime: (dateStyle?: string, timeStyle?: string) => {
      dateStyle = (dateStyle || defaultDateStyle).trim().toLowerCase()
      timeStyle = (timeStyle || '').trim().toLowerCase()

      const cacheKey = getDateTimeFormattersCacheKey({
        lcid: _lcid,
        dateStyle,
        timeStyle
      })

      if (!_cache.has(cacheKey)) {
        // if not in our cache yet, create it and cache it
        let options: { dateStyle?: string; timeStyle?: string } = {}
        if (dateStyle.length) {
          options.dateStyle = dateStyle
        }
        if (timeStyle.length) {
          options.timeStyle = timeStyle
        }
        // cache instance
        const instance = new Intl.DateTimeFormat(_lcid, options as Intl.DateTimeFormatOptions)
        _cache.set(cacheKey, instance)
      }
      // return instance from cache
      return _cache.get(cacheKey) as Intl.DateTimeFormat
    },

    dayNames: (format: DayNameFormatType = 'long') => {
      if (!_cacheDayNames.has(format)) {
        // if not in our cache yet, create it and cache it
        const items: { id: number; name: string }[] = []
        for (let i = 0; i < 7; i++) {
          // start from March 1st 1970 which is a Sunday
          // calculate day and pad string start with zero
          const strDay = (i + 1).toString().padStart(2, '0')
          const date = new Date(`1970-03-${strDay}T00:00:00.000Z`)
          const name = date.toLocaleString(_lcid, { weekday: format, timeZone: 'UTC' })
          items.push({ id: i, name })
        }
        _cacheDayNames.set(format, items)
      }
      // return cached items
      return _cacheDayNames.get(format) as { id: number; name: string }[]
    },

    monthNames: (format: MonthNameFormatType = 'long') => {
      if (!_cacheMonthNames.has(format)) {
        // if not in our cache yet, create it and cache it
        const items: { id: number; name: string }[] = []
        for (let i = 0; i < 12; i++) {
          // calculate month and pad string start with zero
          const strMonth = (i + 1).toString().padStart(2, '0')
          const date = new Date(`1970-${strMonth}-01T00:00:00.000Z`)
          const name = date.toLocaleString(_lcid, { month: format, timeZone: 'UTC' })
          items.push({ id: i, name })
        }
        _cacheMonthNames.set(format, items)
      }
      // return cached items
      return _cacheMonthNames.get(format) as { id: number; name: string }[]
    }
  }
}
