import { useDateTimeFormatters } from "@/formatters";

import { LocaleIds } from "../LocaleIds.constants";

describe("dayNames", () => {
  
  describe("en-US", () => {
    const lcid = LocaleIds.enUS;
    const { dayNames } = useDateTimeFormatters(lcid);

    it(`dayNames`, () => {
      const result = dayNames();
      const expected = [
        { id: 0, name: 'Sunday' },
        { id: 1, name: 'Monday' },
        { id: 2, name: 'Tuesday' },
        { id: 3, name: 'Wednesday' },
        { id: 4, name: 'Thursday' },
        { id: 5, name: 'Friday' },
        { id: 6, name: 'Saturday' }
      ]
      console.log('dayNames result', result)
      expected.forEach((expectedItem) => {
        const resultItem = result.find(o => o.id === expectedItem.id)
        expect(resultItem).not.toBeUndefined
        expect(resultItem?.name).toEqual(expectedItem.name)
      })
    });
  });

  describe("fr-FR", () => {
    const lcid = LocaleIds.frFR;
    const { dayNames } = useDateTimeFormatters(lcid);

    it(`dayNames`, () => {
      const result = dayNames();
      const expected = [
        { id: 0, name: 'dimanche' },
        { id: 1, name: 'lundi' },
        { id: 2, name: 'mardi' },
        { id: 3, name: 'mercredi' },
        { id: 4, name: 'jeudi' },
        { id: 5, name: 'vendredi' },
        { id: 6, name: 'samedi' }
      ]
      expected.forEach((expectedItem) => {
        const resultItem = result.find(o => o.id === expectedItem.id)
        expect(resultItem).not.toBeUndefined
        expect(resultItem?.name).toEqual(expectedItem.name)
      })
    });
  });

})
