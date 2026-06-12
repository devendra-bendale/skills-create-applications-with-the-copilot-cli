#!/usr/bin/env node
'use strict'

// Node.js CLI Calculator
// Supported operations:
// - add : addition (a + b)
// - sub : subtraction (a - b)
// - mul : multiplication (a * b)
// - div : division (a / b)

const lib = require('./calculator-lib')
const [,, op, aStr, bStr] = process.argv

function usage() {
  console.error('Usage: node calculator.js <add|sub|mul|div> <number> <number>')
  process.exit(2)
}

if (!op || !aStr || !bStr) usage()

const a = Number(aStr)
const b = Number(bStr)

if (Number.isNaN(a) || Number.isNaN(b)) {
  console.error('Error: operands must be valid numbers')
  process.exit(3)
}

try {
  let result
  switch (op) {
    case 'add':
      result = lib.add(a, b)
      break
    case 'sub':
      result = lib.sub(a, b)
      break
    case 'mul':
      result = lib.mul(a, b)
      break
    case 'div':
      result = lib.div(a, b)
      break
    default:
      console.error(`Unknown operation: ${op}`)
      usage()
  }

  // Print result with reasonable precision
  console.log(Number.isInteger(result) ? String(result) : Number(result.toPrecision(12)).toString())
} catch (e) {
  if (e.message === 'division by zero') {
    console.error('Error: division by zero')
    process.exit(4)
  }
  console.error('Error: ' + e.message)
  process.exit(3)
}
