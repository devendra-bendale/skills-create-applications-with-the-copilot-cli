#!/usr/bin/env node
'use strict'

// Node.js CLI Calculator
// Supported operations:
// - add : addition (a + b)
// - sub : subtraction (a - b)
// - mul : multiplication (a * b)
// - div : division (a / b)

const lib = require('./calculator-lib')
const args = process.argv.slice(2)
const op = args[0]

function usage() {
  console.error('Usage: node calculator.js <add|sub|mul|div|mod|pow|sqrt> <number> [<number>]')
  process.exit(2)
}

if (!op) usage()

let a, b
if (op === 'sqrt' || op === 'squareRoot' || op === 'squareroot') {
  if (args.length < 2) usage()
  a = Number(args[1])
  if (Number.isNaN(a)) {
    console.error('Error: operand must be a valid number')
    process.exit(3)
  }
} else {
  if (args.length < 3) usage()
  a = Number(args[1])
  b = Number(args[2])
  if (Number.isNaN(a) || Number.isNaN(b)) {
    console.error('Error: operands must be valid numbers')
    process.exit(3)
  }
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
    case 'mod':
    case 'modulo':
      result = lib.modulo(a, b)
      break
    case 'pow':
    case 'power':
      result = lib.power(a, b)
      break
    case 'sqrt':
    case 'squareRoot':
      result = lib.squareRoot(a)
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
  if (e.message === 'square root of negative number') {
    console.error('Error: square root of negative number')
    process.exit(5)
  }
  console.error('Error: ' + e.message)
  process.exit(3)
}
