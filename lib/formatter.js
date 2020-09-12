export default class NubmerFormatter {
  static currencyBRLFmt(number) {
    let converted = Number(number)
    if (isNaN(converted)) converted = 0

    const formatted = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      nu: 'arab',
    }).format(converted)
    return formatted.toString().replace('.', ',')
  }

  static decimalTwoFixedFmt(number) {
    const converted = parseFloat(number)
    if (isNaN(converted)) return '0,00'

    return converted.toFixed(2).toString().replace('.', ',')
  }

  static decimalFmt(number) {
    if (!number) return '0'
    return number.toString().replace('.', ',')
  }
}
