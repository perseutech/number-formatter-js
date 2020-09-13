export default class NubmerFormatter {
  static currencyBRLFmt(number) {
    let converted = Number(number)
    if (isNaN(converted)) converted = 0

    const formatted = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      nu: 'arab',
    }).format(converted)
    return formatted
  }

  static decimalTwoFixedFmt(number) {
    const converted = parseFloat(number)
    if (isNaN(converted)) return '0,00'

    return converted.toFixed(2).toString().replace('.', ',')
  }

  static decimalNFixedFmt(number, decimals) {
    const converted = parseFloat(number)
    if (isNaN(converted)) {
      let result = '0,'
      for (let i = 0; i < decimals; i++) {
        result += '0'
      }
      return result
    }

    return converted.toFixed(decimals).toString().replace('.', ',')
  }

  static decimalFmt(number) {
    if (!number) return '0'
    return number.toString().replace('.', ',')
  }
}
