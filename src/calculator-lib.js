'use strict'

/**
 * Calculator library
 * Supported operations:
 * - add : addition (a + b)
 * - sub : subtraction (a - b)
 * - mul : multiplication (a * b)
 * - div : division (a / b) — throws on division by zero
 */

function ensureNumber(n) {
  if (typeof n !== 'number' || !Number.isFinite(n)) {
    throw new TypeError('operand must be a finite number')
  }
}

function add(a, b) {
  ensureNumber(a)
  ensureNumber(b)
  return a + b
}

function sub(a, b) {
  ensureNumber(a)
  ensureNumber(b)
  return a - b
}

function mul(a, b) {
  ensureNumber(a)
  ensureNumber(b)
  return a * b
}

function div(a, b) {
  ensureNumber(a)
  ensureNumber(b)
  if (b === 0) throw new Error('division by zero')
  return a / b
}

function modulo(a, b) {
  // remainder of a divided by b
  ensureNumber(a)
  ensureNumber(b)
  if (b === 0) throw new Error('division by zero')
  return a % b
}

function power(base, exponent) {
  // base raised to exponent
  ensureNumber(base)
  ensureNumber(exponent)
  return Math.pow(base, exponent)
}

function squareRoot(n) {
  // square root with error for negative input
  ensureNumber(n)
  if (n < 0) throw new Error('square root of negative number')
  return Math.sqrt(n)
}

module.exports = { add, sub, mul, div, modulo, power, squareRoot }
