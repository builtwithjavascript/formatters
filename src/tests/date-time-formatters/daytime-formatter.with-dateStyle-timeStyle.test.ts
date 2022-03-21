import { useDateTimeFormatters } from "@/formatters";

import { LocaleIds } from "../LocaleIds.constants";

describe('datetime-formatters: datetime with parameter dateStyle "short" and timeStyle "short"', () => {
  const inputValue = new Date(1970, 2, 24, 24, 11, 3);
  const dateStyle = "short";
  const timeStyle = "short";

  describe("en-US", () => {
    const lcid = LocaleIds.enUS;
    const datetimeFormatters = useDateTimeFormatters(lcid);

    it(`should return a date-time value formatted correctly`, () => {
      const result = datetimeFormatters
        .dateTime(dateStyle, timeStyle)
        .format(inputValue);
      const expected = "3/25/70, 12:11 AM";
      expect(result).toEqual(expected);
    });
  });

  describe("fr-FR", () => {
    const lcid = LocaleIds.frFR;
    const datetimeFormatters = useDateTimeFormatters(lcid);

    it(`should return a date-time value formatted correctly`, () => {
      const result = datetimeFormatters
        .dateTime(dateStyle, timeStyle)
        .format(inputValue);
      const expected = "25/03/1970 00:11";
      expect(result).toEqual(expected);
    });
  });

  describe("ja", () => {
    const lcid = LocaleIds.ja;
    const datetimeFormatters = useDateTimeFormatters(lcid);

    it(`should return a date-time value formatted correctly`, () => {
      const result = datetimeFormatters
        .dateTime(dateStyle, timeStyle)
        .format(inputValue);
      const expected = "1970/03/25 0:11";
      expect(result).toEqual(expected);
    });
  });

  describe("zh-CN", () => {
    const lcid = LocaleIds.zhCN;
    const datetimeFormatters = useDateTimeFormatters(lcid);

    it(`should return a date-time value formatted correctly`, () => {
      const result = datetimeFormatters
        .dateTime(dateStyle, timeStyle)
        .format(inputValue);
      const expected = "1970/3/25 00:11";
      expect(result).toEqual(expected);
    });
  });
});

describe('datetime-formatters: datetime with parameter dateStyle "short" and timeStyle "long"', () => {
  const inputValue = new Date(1970, 2, 24, 24, 11, 3);
  const dateStyle = "short";
  const timeStyle = "long";

  describe("en-US", () => {
    const lcid = LocaleIds.enUS;
    const datetimeFormatters = useDateTimeFormatters(lcid);

    it(`should return a date-time value formatted correctly`, () => {
      const result = datetimeFormatters
        .dateTime(dateStyle, timeStyle)
        .format(inputValue);
      const expected = "3/25/70, 12:11:03 AM EST";
      expect(result).toEqual(expected);
    });
  });

  describe("fr-FR", () => {
    const lcid = LocaleIds.frFR;
    const datetimeFormatters = useDateTimeFormatters(lcid);

    it(`should return a date-time value formatted correctly`, () => {
      const result = datetimeFormatters
        .dateTime(dateStyle, timeStyle)
        .format(inputValue);
      const expected = "25/03/1970 00:11:03 UTC−5";
      expect(result).toEqual(expected);
    });
  });

  describe("ja", () => {
    const lcid = LocaleIds.ja;
    const datetimeFormatters = useDateTimeFormatters(lcid);

    it(`should return a date-time value formatted correctly`, () => {
      const result = datetimeFormatters
        .dateTime(dateStyle, timeStyle)
        .format(inputValue);
      const expected = "1970/03/25 0:11:03 GMT-5";
      expect(result).toEqual(expected);
    });
  });

  describe("zh-CN", () => {
    const lcid = LocaleIds.zhCN;
    const datetimeFormatters = useDateTimeFormatters(lcid);

    it(`should return a date-time value formatted correctly`, () => {
      const result = datetimeFormatters
        .dateTime(dateStyle, timeStyle)
        .format(inputValue);
      const expected = "1970/3/25 GMT-5 00:11:03";
      expect(result).toEqual(expected);
    });
  });
});

describe('datetime-formatters: datetime with parameter dateStyle "full" and timeStyle "full"', () => {
  const inputValue = new Date(1970, 2, 24, 24, 11, 3);
  const dateStyle = "full";
  const timeStyle = "full";

  describe("en-US", () => {
    const lcid = LocaleIds.enUS;
    const datetimeFormatters = useDateTimeFormatters(lcid);

    it(`should return a date-time value formatted correctly`, () => {
      const result = datetimeFormatters
        .dateTime(dateStyle, timeStyle)
        .format(inputValue);
      const expected =
        "Wednesday, March 25, 1970 at 12:11:03 AM Eastern Standard Time";
      expect(result).toEqual(expected);
    });
  });

  describe("fr-FR", () => {
    const lcid = LocaleIds.frFR;
    const datetimeFormatters = useDateTimeFormatters(lcid);

    it(`should return a date-time value formatted correctly`, () => {
      const result = datetimeFormatters
        .dateTime(dateStyle, timeStyle)
        .format(inputValue);
      const expected =
        "mercredi 25 mars 1970 à 00:11:03 heure normale de l’Est nord-américain";
      expect(result).toEqual(expected);
    });
  });

  describe("ja", () => {
    const lcid = LocaleIds.ja;
    const datetimeFormatters = useDateTimeFormatters(lcid);

    it(`should return a date-time value formatted correctly`, () => {
      const result = datetimeFormatters
        .dateTime(dateStyle, timeStyle)
        .format(inputValue);
      const expected = "1970年3月25日水曜日 0時11分03秒 アメリカ東部標準時";
      expect(result).toEqual(expected);
    });
  });

  describe("zh-CN", () => {
    const lcid = LocaleIds.zhCN;
    const datetimeFormatters = useDateTimeFormatters(lcid);

    it(`should return a date-time value formatted correctly`, () => {
      const result = datetimeFormatters
        .dateTime(dateStyle, timeStyle)
        .format(inputValue);
      const expected = "1970年3月25日星期三 北美东部标准时间 00:11:03";
      expect(result).toEqual(expected);
    });
  });
});
