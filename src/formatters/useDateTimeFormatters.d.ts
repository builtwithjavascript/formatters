export declare type DayNameFormatType = "long" | "short" | "narrow" | undefined;
export declare type MonthNameFormatType =
  | "long"
  | "short"
  | "narrow"
  | "numeric"
  | "2-digit"
  | undefined;
export declare const getDateTimeFormattersCacheKey: (params: {
  lcid: string;
  dateStyle?: string;
  timeStyle?: string;
}) => string;
export declare const useDateTimeFormatters: (localeId: string) => {
  dateTime: (dateStyle?: string, timeStyle?: string) => Intl.DateTimeFormat;
  dayNames: (format?: DayNameFormatType) => {
    id: number;
    name: string;
  }[];
  monthNames: (format?: MonthNameFormatType) => {
    id: number;
    name: string;
  }[];
};
