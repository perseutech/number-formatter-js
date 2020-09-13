export interface NubmerFormatter {
  static currencyBRLFmt(number: number | string): string
  static decimalTwoFixedFmt(number: number | string): string
  static decimalNFixedFmt(number: number | string, decimals: number): string
  static decimalFmt(number: number | string): string
}

declare const NumberFormatter: NumberFormatter

export default NumberFormatter
