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

  // Extended operation tests based on calc-extended-operations.png
  test('5 % 2 = 1 (modulo)', () => {
    expect(calc.modulo(5, 2)).toBe(1)
  })

  test('10 % 3 = 1 (modulo existing test)', () => {
    expect(calc.modulo(10, 3)).toBe(1)
  })

  test('modulo by zero throws error', () => {
    expect(() => calc.modulo(1, 0)).toThrow('division by zero')
  })

  test('2 ** 3 = 8 (power)', () => {
    expect(calc.power(2, 3)).toBe(8)
  })

  test('2 ** 8 = 256 (power existing test)', () => {
    expect(calc.power(2, 8)).toBe(256)
  })

  test('sqrt 16 = 4', () => {
    expect(calc.squareRoot(16)).toBe(4)
  })

  test('sqrt 9 = 3', () => {
    expect(calc.squareRoot(9)).toBe(3)
  })

  test('sqrt of negative number throws error', () => {
    expect(() => calc.squareRoot(-1)).toThrow('square root of negative number')
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
