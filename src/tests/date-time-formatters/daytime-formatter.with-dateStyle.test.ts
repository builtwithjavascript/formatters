import { useDateTimeFormatters } from "@/formatters";

import { LocaleIds } from "../LocaleIds.constants";

describe('datetime-formatters: datetime with parameter dateStyle "long"', () => {
  const inputValue = new Date(1970, 2, 24);
  const dateStyle = "long";

  describe("en-US", () => {
    const lcid = LocaleIds.enUS;
    const datetimeFormatters = useDateTimeFormatters(lcid);

    it(`should return a date-time value formatted correctly`, () => {
      const result = datetimeFormatters.dateTime(dateStyle).format(inputValue);
      const expected = "March 24, 1970";
      expect(result).toEqual(expected);
    });
  });

  describe("fr-FR", () => {
    const lcid = LocaleIds.frFR;
    const datetimeFormatters = useDateTimeFormatters(lcid);

    it(`should return a date-time value formatted correctly`, () => {
      const result = datetimeFormatters.dateTime(dateStyle).format(inputValue);
      const expected = "24 mars 1970";
      expect(result).toEqual(expected);
    });
  });

  describe("ja", () => {
    const lcid = LocaleIds.ja;
    const datetimeFormatters = useDateTimeFormatters(lcid);

    it(`should return a date-time value formatted correctly`, () => {
      const result = datetimeFormatters.dateTime(dateStyle).format(inputValue);
      const expected = "1970年3月24日";
      expect(result).toEqual(expected);
    });
  });

  describe("zh-CN", () => {
    const lcid = LocaleIds.zhCN;
    const datetimeFormatters = useDateTimeFormatters(lcid);

    it(`should return a date-time value formatted correctly`, () => {
      const result = datetimeFormatters.dateTime(dateStyle).format(inputValue);
      const expected = "1970年3月24日";
      expect(result).toEqual(expected);
    });
  });
});
