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
      <input
        type='number'
        placeholder='Enter your number here'
        onChange={(e) => {
          const { value, array } = generateFibonacci(parseInt(e.target.value))
          setResultArray(array)
          setResultNum(value)
        }}
      />
      <div>{resultArray.join(',')}</div>
      <div> Result: {resultNum}</div>
    </div>
  )
}
export default Fibonacci
