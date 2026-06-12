#!/usr/bin/env node
'use strict'

// Node.js CLI Calculator
// Supported operations:
// - add : addition (a + b)
// - sub : subtraction (a - b)
// - mul : multiplication (a * b)
// - div : division (a / b)

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

function formatNumber(n) {
  // Limit to 12 significant digits to avoid long floating output
  return Number.isInteger(n) ? String(n) : Number(n.toPrecision(12)).toString()
}

let result
switch (op) {
  case 'add':
    result = a + b
    break
  case 'sub':
    result = a - b
    break
  case 'mul':
    result = a * b
    break
  case 'div':
    if (b === 0) {
      console.error('Error: division by zero')
      process.exit(4)
    }
    result = a / b
    break
  default:
    console.error(`Unknown operation: ${op}`)
    usage()
}

console.log(formatNumber(result))
