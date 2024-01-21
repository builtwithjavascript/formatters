# @builtwithjavascript/formatters
DateTime and Number formatters based on Intl API[^1]

[![npm version](https://badge.fury.io/js/@builtwithjavascript%2Fformatters.svg)](https://badge.fury.io/js/@builtwithjavascript%2Fformatters)

## code base
TypeScript

## Description
Contains hooks:
- useDateTimeFormatters
- useNumberFormatters

These are wrappers around Intl API NumberFormat and DateTimeFormat that allow to access the formatting function in a more concise way and avoid code cluttering.

## How to use

### install:
```
npm install --save @builtwithjavascript/formatters
```

### Consume Number Formatters:

Note: these are just some of the possible parameter combinations:

```typescript
import { useNumberFormatters } from '@builtwithjavascript/formatters'

const lcid = 'en-US' // or return it from your i18n current locale
const numberFormatters = useNumberFormatters(lcid)

// whole number
const wholeNumberFormatter = numberFormatters.whole()
wholeNumberFormatter().format(123456789.321654) // outputs: 12,345,654,322 

// decimal number (default options)
const decimalNumberFormatter = numberFormatters.decimal()
decimalNumberFormatter().format(123456789.321654) // outputs: 12,345,654,321.89

// decimal number (with min/max fraction digits parameters)
const decimalNumberFormatter = numberFormatters.decimal(3, 5) // params are (minimumFractionDigits, maximumFractionDigits)
decimalNumberFormatter().format(123456789.321654) // outputs 12,345,654,321.89235

// percent number (default options)
const percentNumberFormatter = numberFormatters.percent()
percentNumberFormatter().format(4.892345) // outputs: 489.23%

// decimal number (with min/max fraction digits parameters)
const percentNumberFormatter = numberFormatters.percent(3, 5) // params are (minimumFractionDigits, maximumFractionDigits)
percentNumberFormatter().format(4.892345) // outputs 489.2345%

// currency ('USD' with default options)
const currencyNumberFormatter = numberFormatters.currency('USD')
currencyNumberFormatter().format(12345654321.892345) // outputs: $12,345,654,321.89

// currency ('EUR' with default options)
const currencyNumberFormatter = numberFormatters.currency('EUR')
currencyNumberFormatter().format(12345654321.892345) // outputs: €12,345,654,321.89

// currency ('USD' with params currencyDisplay, minimumFractionDigits, maximumFractionDigits)
const currencyNumberFormatter = numberFormatters.currency('USD', 'code', 1, 3)
currencyNumberFormatter().format(12345654321.892345) // outputs: USD12,345,654,321.892
```
* for more information on currencyDisplay parameter see [^2]*

### Consume DateTime Formatters:

Note: these are just some of the possible parameter combinations:

```typescript
import { useDatetimeFormatters } from '@builtwithjavascript/formatters'

const lcid = 'en-US' // or return it from your i18n current locale
const datetimeFormatters = useDatetimeFormatters(lcid)

// datetime (default options)
datetimeFormatters.dateTime().format(inputValue) // outputs: "3/24/70"

// datetime (with dateStyle param)
datetimeFormatters.dateTime('long').format(inputValue) // outputs: "March 24, 1970"

// datetime (with dateStyle and timeStyle param)
datetimeFormatters.dateTime('short', 'short').format(inputValue) // outputs: "3/25/70, 12:11 AM"
```

### Consume DateTime Utils:

```typescript
import { useDatetimeFormatters } from '@builtwithjavascript/formatters'

const lcid = 'en-US' // or return it from your i18n current locale
const { dayNames, monthNames } = useDatetimeFormatters(lcid)

// dayNames
dayNames().map((o) => o.name)
// outputs: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ]

// monthNames
monthNames().map((o) => o.name)
// outputs: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November',  'December']

// dayNames
dayNames() 
/* outputs:
[
  { id: 0, name: 'Sunday' },
  { id: 1, name: 'Monday' },
  { id: 2, name: 'Tuesday' },
  { id: 3, name: 'Wednesday' },
  { id: 4, name: 'Thursday' },
  { id: 5, name: 'Friday' },
  { id: 6, name: 'Saturday' }
]
*/

// monthNames
monthNames()
/* outputs:
[
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
*/
```


### Dev Dependencies
@types/jest 
@types/node 
husky 
jsdom 
prettier 
pretty-quick 
ts-node 
typescript 
vite 
vitest 



#### References

[^1]: Intl API [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)

[^2]: for 'currencyDisplay' the options are 'symbol', 'narrowSymbol', 'code', 'name' - Reference [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)
