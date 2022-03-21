import { useNumberFormatters } from '@/formatters'

import { LocaleIds } from '../LocaleIds.constants'

describe('number-formatters: decimals: with min/max fraction digits parameters', () => {
  const minimumFractionDigits = 3
  const maximumFractionDigits = 5
  const inputValue = 12345654321.892345

  describe('en-US', () => {
    const lcid = LocaleIds.enUS
    const numberFormatters = useNumberFormatters(lcid)
    const { unescapeResult } = numberFormatters

    it(`should return a decimal number formatted correctly`, () => {
      const result = numberFormatters.decimal(minimumFractionDigits, maximumFractionDigits).format(inputValue)
      const expected = '12,345,654,321.89235'
      expect(unescapeResult(result)).toEqual(expected)
    })
  })

  describe('fr-FR', () => {
    const lcid = LocaleIds.frFR
    const numberFormatters = useNumberFormatters(lcid)
    const { unescapeResult } = numberFormatters

    it(`should return a decimal number formatted correctly`, () => {
      const result = numberFormatters.decimal(minimumFractionDigits, maximumFractionDigits).format(inputValue)
      const expected = '12 345 654 321,89235'
      expect(unescapeResult(result)).toEqual(expected)
    })
  })

  describe('ja', () => {
    const lcid = LocaleIds.ja
    const numberFormatters = useNumberFormatters(lcid)
    const { unescapeResult } = numberFormatters

    it(`should return a decimal number formatted correctly`, () => {
      const result = numberFormatters.decimal(minimumFractionDigits, maximumFractionDigits).format(inputValue)
      const expected = '12,345,654,321.89235'
      expect(unescapeResult(result)).toEqual(expected)
    })
  })

  describe('zh-CN', () => {
    const lcid = LocaleIds.zhCN
    const numberFormatters = useNumberFormatters(lcid)
    const { unescapeResult } = numberFormatters

    it(`should return a decimal number formatted correctly`, () => {
      const result = numberFormatters.decimal(minimumFractionDigits, maximumFractionDigits).format(inputValue)
      const expected = '12,345,654,321.89235'
      expect(unescapeResult(result)).toEqual(expected)
    })
  })
})
