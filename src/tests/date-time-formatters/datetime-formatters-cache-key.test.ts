import { getDateTimeFormattersCacheKey } from '@/formatters'

describe('datetime-formatters: getDateTimeFormattersCacheKey', () => {
  const params: {
    lcid: string
    dateStyle?: string
    timeStyle?: string
  } = {
    lcid: 'en-US'
  }

  it('Should return expected key when only lcid is passed', () => {
    const result = getDateTimeFormattersCacheKey(params)
    const expected = 'en-us-short'
    expect(result).toEqual(expected)
  })

  it('Should return expected key when lcid and dateStyle are passed', () => {
    params.dateStyle = 'full'
    const result = getDateTimeFormattersCacheKey(params)
    const expected = 'en-us-full'
    expect(result).toEqual(expected)
  })

  it('Should return expected key when lcid, dateStyle, and timeStyle are passed', () => {
    params.dateStyle = 'full'
    params.timeStyle = 'full'
    const result = getDateTimeFormattersCacheKey(params)
    const expected = 'en-us-full-full'
    expect(result).toEqual(expected)
  })
})
