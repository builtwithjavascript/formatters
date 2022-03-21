import { useDateTimeFormatters } from "@/formatters";

import { LocaleIds } from "../LocaleIds.constants";

describe("datetime-formatters: datetime with default parameters", () => {
  const inputValue = new Date(1970, 2, 24);

  describe("en-US", () => {
    const lcid = LocaleIds.enUS;
    const datetimeFormatters = useDateTimeFormatters(lcid);

    it(`should return a date-time value formatted correctly`, () => {
      const result = datetimeFormatters.dateTime().format(inputValue);
      const expected = "3/24/70";
      expect(result).toEqual(expected);
    });
  });

  describe("fr-FR", () => {
    const lcid = LocaleIds.frFR;
    const datetimeFormatters = useDateTimeFormatters(lcid);

    it(`should return a date-time value formatted correctly`, () => {
      const result = datetimeFormatters.dateTime().format(inputValue);
      const expected = "24/03/1970";
      expect(result).toEqual(expected);
    });
  });

  describe("ja", () => {
    const lcid = LocaleIds.ja;
    const datetimeFormatters = useDateTimeFormatters(lcid);

    it(`should return a date-time value formatted correctly`, () => {
      const result = datetimeFormatters.dateTime().format(inputValue);
      const expected = "1970/03/24";
      expect(result).toEqual(expected);
    });
  });

  describe("zh-CN", () => {
    const lcid = LocaleIds.zhCN;
    const datetimeFormatters = useDateTimeFormatters(lcid);

    it(`should return a date-time value formatted correctly`, () => {
      const result = datetimeFormatters.dateTime().format(inputValue);
      const expected = "1970/3/24";
      expect(result).toEqual(expected);
    });
  });
});
