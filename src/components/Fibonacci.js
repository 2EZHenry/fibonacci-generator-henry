import React, { useState } from 'react'

const Fibonacci = () => {
  const [resultArray, setResultArray] = useState([])
  const [resultNum, setResultNum] = useState(null)

  const generateFibonacci = (number) => {
    // if (number <= 0) return 0
    // if (number === 1) return 1
    // return generateFibonacci(number - 1) + generateFibonacci(number - 2)

    let result = [0, 1]
    if (number === 0) {
      return { value: result[0], array: [0] }
    }
    if (number === 1) {
      return { value: result[1], array: [0, 1] }
    }

    for (let i = 2; i <= number; i++) {
      result.push(result[i - 1] + result[i - 2])
    }

    return { value: result[number], array: result }
  }

  return (
    <div>
      <label htmlFor='fibonacciInput'>Enter a number:</label>
      <input
        type='number'
        id='fibonacciInput'
        placeholder='Enter a non-negative integer'
        onChange={(e) => {
          const inputNumber = parseInt(e.target.value)
          if (!isNaN(inputNumber) && inputNumber >= 0) {
            const { value, array } = generateFibonacci(inputNumber)
            setResultArray(array)
            setResultNum(value)
          }
        }}
      />
      <div>Fibonacci Sequence: {resultArray.join(',')}</div>
      <div>Result: {resultNum}</div>
    </div>
  )
}
export default Fibonacci
