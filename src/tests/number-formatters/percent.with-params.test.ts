import { useNumberFormatters } from '@/formatters'

import { LocaleIds } from '../LocaleIds.constants'

describe('number-formatters: percent: with min/max fraction digits params', () => {
  const inputValue = 4.892345
  const minimumFractionDigits = 3
  const maximumFractionDigits = 5

  describe('en-us', () => {
    const lcid = LocaleIds.enUS
    const numberFormatters = useNumberFormatters(lcid)
    const { unescapeResult } = numberFormatters

    it(`should return a percent number formatted correctly`, () => {
      const result = numberFormatters.percent(minimumFractionDigits, maximumFractionDigits).format(inputValue)
      const expected = '489.2345%'
      expect(unescapeResult(result)).toEqual(expected)
    })
  })

  describe('fr-FR', () => {
    const lcid = LocaleIds.frFR
    const numberFormatters = useNumberFormatters(lcid)
    const { unescapeResult } = numberFormatters

    it(`should return a percent number formatted correctly`, () => {
      const result = numberFormatters.percent(minimumFractionDigits, maximumFractionDigits).format(inputValue)
      const expected = '489,2345 %'
      expect(unescapeResult(result)).toEqual(expected)
    })
  })

  describe('ja', () => {
    const lcid = LocaleIds.ja
    const numberFormatters = useNumberFormatters(lcid)
    const { unescapeResult } = numberFormatters

    it(`should return a percent number formatted correctly`, () => {
      const result = numberFormatters.percent(minimumFractionDigits, maximumFractionDigits).format(inputValue)
      const expected = '489.2345%'
      expect(unescapeResult(result)).toEqual(expected)
    })
  })

  describe('zh-cn', () => {
    const lcid = LocaleIds.zhCN
    const numberFormatters = useNumberFormatters(lcid)
    const { unescapeResult } = numberFormatters

    it(`should return a percent number formatted correctly`, () => {
      const result = numberFormatters.percent(minimumFractionDigits, maximumFractionDigits).format(inputValue)
      const expected = '489.2345%'
      expect(unescapeResult(result)).toEqual(expected)
    })
  })
})
