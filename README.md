# Number Formatter JS

A simple JavaScript module for number formatter in Brazil pattern

## Installing

NPM:

```bash
npm install @perseu/number-formatter-js
```

Yarn:

```bash
yarn add @perseu/number-formatter-js
```

## Example

```js
import NumberFormatter from '@perseu/number-formatter-js'

NumberFormatter.decimalFmt(3.4) // 3,4
NumberFormatter.decimalTwoFixedFmt(3.4) // 3,40
NumberFormatter.currencyBRLFmt(3.4) // R$ 3,40
```

## API

### Methods

**decimalFmt(number)**

- `number: number|string` the number to be formatted
- `returns: string`

  This method will replace `.` with `,` for decimal values

**decimalTwoFixedFmt(number)**

- `number: number|string` the number to be formatted
- `returns: string`

  This method will replace `.` with `,` and will fix two decimal numbers after decimal separator

**currencyBRLFmt(number)**

- `number: number|string` the number to be formatted
- `returns: string`

  This method will replace transform a decimal (number) value to a String BRL currency. It utilizes `Intl`.

## License

[MIT](LICENSE)
