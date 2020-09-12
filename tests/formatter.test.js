import NumberFormatter from './../lib/formatter.js'

// test('3 to be R$ 3,00', () => {
//   expect(NumberFormatter.currencyBRLFmt(3)).toBe('R$\t3,00')
// })

test('3.4 to be 3,40', () => {
  expect(NumberFormatter.decimalTwoFixedFmt(3.4)).toBe('3,40')
})

test('3.4 to be 3,4', () => {
  expect(NumberFormatter.decimalFmt(3.4)).toBe('3,4')
})
