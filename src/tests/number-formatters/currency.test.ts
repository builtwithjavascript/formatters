import { useNumberFormatters } from "@/formatters";

import { LocaleIds } from "../LocaleIds.constants";

describe("number-formatters: currency: with default optional parameters", () => {
  const inputValue = 12345654321.892345;

  describe("en-US", () => {
    const lcid = LocaleIds.enUS;
    const numberFormatters = useNumberFormatters(lcid);
    const { unescapeResult } = numberFormatters;

    it(`currency: USD: should return a decimal number formatted correctly`, () => {
      const currency = "USD";
      const result = numberFormatters.currency(currency).format(inputValue);
      const expected = "$12,345,654,321.89";
      expect(unescapeResult(result)).toEqual(expected);
    });

    it(`currency: CAD: should return a decimal number formatted correctly`, () => {
      const currency = "CAD";
      const result = numberFormatters.currency(currency).format(inputValue);
      const expected = "CA$12,345,654,321.89";
      expect(unescapeResult(result)).toEqual(expected);
    });

    it(`currency: EUR: should return a decimal number formatted correctly`, () => {
      const currency = "EUR";
      const result = numberFormatters.currency(currency).format(inputValue);
      const expected = "€12,345,654,321.89";
      expect(unescapeResult(result)).toEqual(expected);
    });

    it(`currency: JPY: should return a decimal number formatted correctly`, () => {
      const currency = "JPY";
      const result = numberFormatters.currency(currency).format(inputValue);
      const expected = "¥12,345,654,321.89";
      expect(unescapeResult(result)).toEqual(expected);
    });

    it(`currency: CNY: should return a decimal number formatted correctly`, () => {
      const currency = "CNY";
      const result = numberFormatters.currency(currency).format(inputValue);
      const expected = "CN¥12,345,654,321.89";
      expect(unescapeResult(result)).toEqual(expected);
    });

    it(`currency: INR: should return a decimal number formatted correctly`, () => {
      const currency = "INR";
      const result = numberFormatters.currency(currency).format(inputValue);
      const expected = "₹12,345,654,321.89";
      expect(unescapeResult(result)).toEqual(expected);
    });

    it(`currency: CHF: should return a decimal number formatted correctly`, () => {
      const currency = "CHF";
      const result = numberFormatters.currency(currency).format(inputValue);
      const expected = "CHF 12,345,654,321.89";
      expect(unescapeResult(result)).toEqual(expected);
    });
  });

  describe("fr-FR", () => {
    const lcid = LocaleIds.frFR;
    const numberFormatters = useNumberFormatters(lcid);
    const { unescapeResult } = numberFormatters;

    it(`currency: USD: should return a decimal number formatted correctly`, () => {
      const currency = "USD";
      const result = numberFormatters.currency(currency).format(inputValue);
      const expected = "12 345 654 321,89 $US";
      expect(unescapeResult(result)).toEqual(expected);
    });

    it(`currency: CAD: should return a decimal number formatted correctly`, () => {
      const currency = "CAD";
      const result = numberFormatters.currency(currency).format(inputValue);
      const expected = "12 345 654 321,89 $CA";
      expect(unescapeResult(result)).toEqual(expected);
    });

    it(`currency: EUR: should return a decimal number formatted correctly`, () => {
      const currency = "EUR";
      const result = numberFormatters.currency(currency).format(inputValue);
      const expected = "12 345 654 321,89 €";
      expect(unescapeResult(result)).toEqual(expected);
    });

    it(`currency: JPY: should return a decimal number formatted correctly`, () => {
      const currency = "JPY";
      const result = numberFormatters.currency(currency).format(inputValue);
      const expected = "12 345 654 321,89 JPY";
      expect(unescapeResult(result)).toEqual(expected);
    });

    it(`currency: CNY: should return a decimal number formatted correctly`, () => {
      const currency = "CNY";
      const result = numberFormatters.currency(currency).format(inputValue);
      const expected = "12 345 654 321,89 CNY";
      expect(unescapeResult(result)).toEqual(expected);
    });

    it(`currency: INR: should return a decimal number formatted correctly`, () => {
      const currency = "INR";
      const result = numberFormatters.currency(currency).format(inputValue);
      const expected = "12 345 654 321,89 ₹";
      expect(unescapeResult(result)).toEqual(expected);
    });

    it(`currency: CHF: should return a decimal number formatted correctly`, () => {
      const currency = "CHF";
      const result = numberFormatters.currency(currency).format(inputValue);
      const expected = "12 345 654 321,89 CHF";
      expect(unescapeResult(result)).toEqual(expected);
    });
  });

  describe("ja", () => {
    const lcid = LocaleIds.ja;
    const numberFormatters = useNumberFormatters(lcid);
    const { unescapeResult } = numberFormatters;

    it(`currency: USD: should return a decimal number formatted correctly`, () => {
      const currency = "USD";
      const result = numberFormatters.currency(currency).format(inputValue);
      const expected = "$12,345,654,321.89";
      expect(unescapeResult(result)).toEqual(expected);
    });

    it(`currency: CAD: should return a decimal number formatted correctly`, () => {
      const currency = "CAD";
      const result = numberFormatters.currency(currency).format(inputValue);
      const expected = "CA$12,345,654,321.89";
      expect(unescapeResult(result)).toEqual(expected);
    });

    it(`currency: EUR: should return a decimal number formatted correctly`, () => {
      const currency = "EUR";
      const result = numberFormatters.currency(currency).format(inputValue);
      const expected = "€12,345,654,321.89";
      expect(unescapeResult(result)).toEqual(expected);
    });

    it(`currency: JPY: should return a decimal number formatted correctly`, () => {
      const currency = "JPY";
      const result = numberFormatters.currency(currency).format(inputValue);
      const expected = "￥12,345,654,321.89";
      expect(unescapeResult(result)).toEqual(expected);
    });

    it(`currency: CNY: should return a decimal number formatted correctly`, () => {
      const currency = "CNY";
      const result = numberFormatters.currency(currency).format(inputValue);
      const expected = "元 12,345,654,321.89";
      expect(unescapeResult(result)).toEqual(expected);
    });

    it(`currency: INR: should return a decimal number formatted correctly`, () => {
      const currency = "INR";
      const result = numberFormatters.currency(currency).format(inputValue);
      const expected = "₹12,345,654,321.89";
      expect(unescapeResult(result)).toEqual(expected);
    });

    it(`currency: CHF: should return a decimal number formatted correctly`, () => {
      const currency = "CHF";
      const result = numberFormatters.currency(currency).format(inputValue);
      const expected = "CHF 12,345,654,321.89";
      expect(unescapeResult(result)).toEqual(expected);
    });
  });

  describe("zh-CN", () => {
    const lcid = LocaleIds.zhCN;
    const numberFormatters = useNumberFormatters(lcid);
    const { unescapeResult } = numberFormatters;

    it(`currency: USD: should return a decimal number formatted correctly`, () => {
      const currency = "USD";
      const result = numberFormatters.currency(currency).format(inputValue);
      const expected = "US$12,345,654,321.89";
      expect(unescapeResult(result)).toEqual(expected);
    });

    it(`currency: CAD: should return a decimal number formatted correctly`, () => {
      const currency = "CAD";
      const result = numberFormatters.currency(currency).format(inputValue);
      const expected = "CA$12,345,654,321.89";
      expect(unescapeResult(result)).toEqual(expected);
    });

    it(`currency: EUR: should return a decimal number formatted correctly`, () => {
      const currency = "EUR";
      const result = numberFormatters.currency(currency).format(inputValue);
      const expected = "€12,345,654,321.89";
      expect(unescapeResult(result)).toEqual(expected);
    });

    it(`currency: JPY: should return a decimal number formatted correctly`, () => {
      const currency = "JPY";
      const result = numberFormatters.currency(currency).format(inputValue);
      const expected = "JP¥12,345,654,321.89";
      expect(unescapeResult(result)).toEqual(expected);
    });

    it(`currency: CNY: should return a decimal number formatted correctly`, () => {
      const currency = "CNY";
      const result = numberFormatters.currency(currency).format(inputValue);
      const expected = "¥12,345,654,321.89";
      expect(unescapeResult(result)).toEqual(expected);
    });

    it(`currency: INR: should return a decimal number formatted correctly`, () => {
      const currency = "INR";
      const result = numberFormatters.currency(currency).format(inputValue);
      const expected = "₹12,345,654,321.89";
      expect(unescapeResult(result)).toEqual(expected);
    });

    it(`currency: CHF: should return a decimal number formatted correctly`, () => {
      const currency = "CHF";
      const result = numberFormatters.currency(currency).format(inputValue);
      const expected = "CHF 12,345,654,321.89";
      expect(unescapeResult(result)).toEqual(expected);
    });
  });
});
