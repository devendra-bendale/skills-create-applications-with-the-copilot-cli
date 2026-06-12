const calc = require('../calculator-lib')

describe('Calculator basic operations', () => {
  test('2 + 3 = 5', () => {
    expect(calc.add(2, 3)).toBe(5)
  })

  test('10 - 4 = 6', () => {
    expect(calc.sub(10, 4)).toBe(6)
  })

  test('45 * 2 = 90', () => {
    expect(calc.mul(45, 2)).toBe(90)
  })

  test('20 / 5 = 4', () => {
    expect(calc.div(20, 5)).toBe(4)
  })

  test('floating point addition is close to expected', () => {
    expect(calc.add(0.1, 0.2)).toBeCloseTo(0.3, 10)
  })

  test('division by zero throws error', () => {
    expect(() => calc.div(1, 0)).toThrow('division by zero')
  })

  test('invalid operand throws TypeError', () => {
    expect(() => calc.add('a', 2)).toThrow(TypeError)
  })
})
