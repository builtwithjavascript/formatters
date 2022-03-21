export declare const getNumberFormattersCacheKey: (params: {
  lcid: string;
  style?: string;
  currency?: string;
  currencyDisplay?: string;
  minimumFractionDigits: number;
  maximumFractionDigits: number;
}) => string;
export declare const useNumberFormatters: (localeId: string) => {
  whole: () => Intl.NumberFormat;
  decimal: (
    minimumFractionDigits?: number,
    maximumFractionDigits?: number
  ) => Intl.NumberFormat;
  currency: (
    currency: string,
    currencyDisplay?: string,
    minimumFractionDigits?: number,
    maximumFractionDigits?: number
  ) => Intl.NumberFormat;
  percent: (
    minimumFractionDigits?: number,
    maximumFractionDigits?: number
  ) => Intl.NumberFormat;
  unescapeResult(result: string): string;
};
