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

module.exports = { add, sub, mul, div }
