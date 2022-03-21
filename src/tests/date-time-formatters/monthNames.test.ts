import { useDateTimeFormatters } from '@/formatters'

import { LocaleIds } from '../LocaleIds.constants'

describe('monthNames', () => {
  describe('en-US', () => {
    const lcid = LocaleIds.enUS
    const { monthNames } = useDateTimeFormatters(lcid)

    it(`monthNames`, () => {
      const result = monthNames()
      const expected = [
        { id: 0, name: 'January' },
        { id: 1, name: 'February' },
        { id: 2, name: 'March' },
        { id: 3, name: 'April' },
        { id: 4, name: 'May' },
        { id: 5, name: 'June' },
        { id: 6, name: 'July' },
        { id: 7, name: 'August' },
        { id: 8, name: 'September' },
        { id: 9, name: 'October' },
        { id: 10, name: 'November' },
        { id: 11, name: 'December' }
      ]
      console.log(
        'monthNames result',
        result.map((o) => o.name)
      )
      expected.forEach((expectedItem) => {
        const resultItem = result.find((o) => o.id === expectedItem.id)
        expect(resultItem).not.toBeUndefined
        expect(resultItem?.name).toEqual(expectedItem.name)
      })
    })
  })

  describe('fr-FR', () => {
    const lcid = LocaleIds.frFR
    const { monthNames } = useDateTimeFormatters(lcid)

    it(`monthNames`, () => {
      const result = monthNames()
      const expected = [
        { id: 0, name: 'janvier' },
        { id: 1, name: 'février' },
        { id: 2, name: 'mars' },
        { id: 3, name: 'avril' },
        { id: 4, name: 'mai' },
        { id: 5, name: 'juin' },
        { id: 6, name: 'juillet' },
        { id: 7, name: 'août' },
        { id: 8, name: 'septembre' },
        { id: 9, name: 'octobre' },
        { id: 10, name: 'novembre' },
        { id: 11, name: 'décembre' }
      ]
      expected.forEach((expectedItem) => {
        const resultItem = result.find((o) => o.id === expectedItem.id)
        expect(resultItem).not.toBeUndefined
        expect(resultItem?.name).toEqual(expectedItem.name)
      })
    })
  })
})
