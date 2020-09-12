export interface NubmerFormatter {
  static currencyBRLFmt(number: number | string): string
  static decimalTwoFixedFmt(number: number | string): string
  static decimalFmt(number: number | string): string
}

declare const NumberFormatter: NumberFormatter

export default NumberFormatter
