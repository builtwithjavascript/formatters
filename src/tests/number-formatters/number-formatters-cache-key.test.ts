import { getNumberFormattersCacheKey } from '@/formatters'

describe('number-formatters: getNumberFormattersCacheKey', () => {
  const params: {
    lcid: string
    style?: string
    currency?: string
    minimumFractionDigits: number
    maximumFractionDigits: number
  } = {
    lcid: 'en-US',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }

  it('Should return expected key when only lcid is passed', () => {
    const result = getNumberFormattersCacheKey(params)
    const expected = 'en-us-decimal-0-0'
    expect(result).toEqual(expected)
  })

  it('Should return expected key when only lcid is passed and min/max fraction digits are passed > 0', () => {
    params.minimumFractionDigits = 2
    params.maximumFractionDigits = 6
    const result = getNumberFormattersCacheKey(params)
    const expected = 'en-us-decimal-2-6'
    expect(result).toEqual(expected)
  })

  it('Should return expected key when lcid + style is passed', () => {
    params.style = 'percent'
    params.minimumFractionDigits = 0
    params.maximumFractionDigits = 0
    const result = getNumberFormattersCacheKey(params)
    const expected = 'en-us-percent-0-0'
    expect(result).toEqual(expected)
  })

  it('Should return expected key when lcid + style + currency is passed', () => {
    params.style = 'currency'
    params.currency = 'EUR'
    params.minimumFractionDigits = 0
    params.maximumFractionDigits = 0
    const result = getNumberFormattersCacheKey(params)
    const expected = 'en-us-currency-eur-symbol-0-0'
    expect(result).toEqual(expected)
  })
})
