import { useNumberFormatters } from '@/formatters'

import { LocaleIds } from '../LocaleIds.constants'

describe('number-formatters: percent: with default optional parameters', () => {
  const inputValue = 4.892345

  describe('en-us', () => {
    const lcid = LocaleIds.enUS
    const numberFormatters = useNumberFormatters(lcid)
    const { unescapeResult } = numberFormatters

    it(`should return a percent number formatted correctly`, () => {
      const result = numberFormatters.percent().format(inputValue)
      const expected = '489.23%'
      expect(unescapeResult(result)).toEqual(expected)
    })
  })

  describe('fr-FR', () => {
    const lcid = LocaleIds.frFR
    const numberFormatters = useNumberFormatters(lcid)
    const { unescapeResult } = numberFormatters

    it(`should return a percent number formatted correctly`, () => {
      const result = numberFormatters.percent().format(inputValue)
      const expected = '489,23 %'
      expect(unescapeResult(result)).toEqual(expected)
    })
  })

  describe('ja', () => {
    const lcid = LocaleIds.ja
    const numberFormatters = useNumberFormatters(lcid)
    const { unescapeResult } = numberFormatters

    it(`should return a percent number formatted correctly`, () => {
      const result = numberFormatters.percent().format(inputValue)
      const expected = '489.23%'
      expect(unescapeResult(result)).toEqual(expected)
    })
  })

  describe('zh-cn', () => {
    const lcid = LocaleIds.zhCN
    const numberFormatters = useNumberFormatters(lcid)
    const { unescapeResult } = numberFormatters

    it(`should return a percent number formatted correctly`, () => {
      const result = numberFormatters.percent().format(inputValue)
      const expected = '489.23%'
      expect(unescapeResult(result)).toEqual(expected)
    })
  })
})
