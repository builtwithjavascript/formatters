const defaultcurrencyDisplay = "symbol"; // 'symbol', 'narrowSymbol', 'code', 'name'

export const getNumberFormattersCacheKey = (params: {
  lcid: string;
  style?: string;
  currency?: string;
  currencyDisplay?: string;
  minimumFractionDigits: number;
  maximumFractionDigits: number;
}) => {
  let {
    lcid,
    style,
    currency,
    currencyDisplay,
    minimumFractionDigits,
    maximumFractionDigits,
  } = params;
  style = (style || "decimal").trim().toLowerCase();
  currency = (currency || "").trim();
  currencyDisplay = (currencyDisplay || defaultcurrencyDisplay).trim();

  let cacheKey = `${lcid}-${style}`;
  if (currency.length > 0) {
    cacheKey = `${cacheKey}-${currency}`;
    if (currencyDisplay.length > 0) {
      cacheKey = `${cacheKey}-${currencyDisplay}`;
    }
  }
  cacheKey = `${cacheKey}-${minimumFractionDigits}-${maximumFractionDigits}`
    .trim()
    .toLowerCase();
  return cacheKey;
};

export const useNumberFormatters = (localeId: string) => {
  const _lcid = localeId;
  const _cache = new Map<string, Intl.NumberFormat>();

  const _privateGetFormatter = (params: {
    style?: string;
    currency?: string;
    currencyDisplay?: string;
    minimumFractionDigits: number;
    maximumFractionDigits: number;
  }) => {
    let {
      style,
      currency,
      currencyDisplay,
      minimumFractionDigits,
      maximumFractionDigits,
    } = params;

    style = (style || "decimal").trim().toLowerCase();
    currency = (currency || "").trim();
    currencyDisplay = (currencyDisplay || defaultcurrencyDisplay).trim();

    let cacheKey = getNumberFormattersCacheKey({
      lcid: _lcid,
      style,
      currency,
      currencyDisplay,
      minimumFractionDigits,
      maximumFractionDigits,
    });

    if (!_cache.has(cacheKey)) {
      // if not in our cache yet, create it and cache it
      let options: Intl.NumberFormatOptions = {
        style,
        minimumFractionDigits,
        maximumFractionDigits,
      };
      if (currency.length > 0) {
        options.currency = currency;
        if (currencyDisplay.length > 0) {
          options.currencyDisplay = currencyDisplay;
        }
      }
      // cache instance
      const instance = new Intl.NumberFormat(_lcid, options);
      _cache.set(cacheKey, instance);
    }
    // return instance from cache
    return _cache.get(cacheKey) as Intl.NumberFormat;
  };

  return {
    whole: () => {
      return _privateGetFormatter({
        style: "decimal",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
    },
    decimal: (
      minimumFractionDigits: number = 0,
      maximumFractionDigits: number = 2
    ) => {
      return _privateGetFormatter({
        style: "decimal",
        minimumFractionDigits,
        maximumFractionDigits,
      });
    },
    currency: (
      currency: string,
      currencyDisplay?: string,
      minimumFractionDigits: number = 0,
      maximumFractionDigits: number = 2
    ) => {
      return _privateGetFormatter({
        style: "currency",
        currency,
        currencyDisplay,
        minimumFractionDigits,
        maximumFractionDigits,
      });
    },
    percent: (
      minimumFractionDigits: number = 0,
      maximumFractionDigits: number = 2
    ) => {
      return _privateGetFormatter({
        style: "percent",
        minimumFractionDigits,
        maximumFractionDigits,
      });
    },

    unescapeResult(result: string) {
      return (result || "").replace(/\xa0/g, " ").replace(/\u202f/g, " ");
    },
  };
};
