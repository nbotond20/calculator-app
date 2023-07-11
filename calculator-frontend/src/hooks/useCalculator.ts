import { useState } from 'react'
import { Operator } from '../components/Calculator'
import axios from 'axios'
import { toast } from 'react-hot-toast'

export const useCalculator = () => {
  const [display, setDisplay] = useState('0')
  const [num1, setNum1] = useState<number | null>(null)
  const [num2, setNum2] = useState<number | null>(null)
  const [operator, setOperator] = useState<Operator | null>(null)
  const [isDecimal, setIsDecimal] = useState(false)

  const [isLoading, setIsLoading] = useState(false)

  const handleClear = () => {
    setDisplay('0')
    setNum1(null)
    setNum2(null)
    setOperator(null)
    setIsDecimal(false)
  }

  const calculate = (num1: number, num2: number, op: Operator) => {
    switch (op) {
      case '+':
        return num1 + num2
      case '-':
        return num1 - num2
      case '*':
        return num1 * num2
      case '/':
        return num1 / num2
    }
  }

  const handleDecimal = () => {
    if (isDecimal) return
    setIsDecimal(true)
    if (operator === null) {
      if (num1 === null) {
        setNum1(0.0)
      } else {
        setNum1(num1 + 0.0)
      }
      setDisplay(num1 === null ? `0.` : `${num1}.`)
    } else {
      if (num2 === null) {
        setNum2(0.0)
      } else {
        setNum2(num2 + 0.0)
      }
      setDisplay(num2 === null ? `0.` : `${num2}.`)
    }
  }

  const handleNumberPress = (num: number) => {
    if (operator === null) {
      if (num1 === null) {
        setNum1(num)
        setDisplay(`${num}`)
      } else {
        if (isDecimal) {
          const decimalPlaces = num1.toString().split('.')[1]?.length || 0
          const newNum = num1 + num / Math.pow(10, decimalPlaces + 1)
          setNum1(newNum)
          setDisplay(`${newNum}`)
        } else {
          setNum1(num1 * 10 + num)
          setDisplay(num1 === null ? `${num}` : `${num1}${num}`)
        }
      }
    } else {
      if (num2 === null) {
        setNum2(num)
        setDisplay(`${num}`)
      } else {
        if (isDecimal) {
          const decimalPlaces = num2.toString().split('.')[1]?.length || 0
          const newNum = num2 + num / Math.pow(10, decimalPlaces + 1)
          setNum2(newNum)
          setDisplay(`${newNum}`)
        } else {
          setNum2(num2 * 10 + num)
          setDisplay(num2 === null ? `${num}` : `${num2}${num}`)
        }
      }
      setDisplay(num2 === null ? `${num}` : `${num2}${num}`)
    }
  }

  const handleOperator = (op: Operator) => {
    if (num1 !== null && num2 !== null) {
      const result = calculate(num1, num2, op)
      setNum1(result)
      setNum2(null)
      setOperator(op)
      setDisplay(`${result}`)
    } else if (num1 !== null) {
      setOperator(op)
      setDisplay(`${num1}`)
    }
  }

  const handleEquals = () => {
    if (num1 !== null && num2 !== null && operator !== null) {
      const result = calculate(num1, num2, operator)
      setNum1(result)
      setNum2(null)
      setOperator(null)
      setDisplay(`${result}`)
      setIsDecimal(false)
    }
  }

  const handleSave = async () => {
    try {
      let numToSave
      if (num1 !== null && num2 !== null && operator !== null) {
        numToSave = calculate(num1, num2, operator)
      } else if (num1 !== null) {
        numToSave = num1
      }

      if (numToSave !== 0 && !numToSave) {
        toast('Nothing to save!')
        return
      }

      setIsLoading(true)
      await axios.post(import.meta.env.VITE_REST_API_URL + '/save-memory', {
        number: numToSave,
      })
      setIsLoading(false)
      toast.success('Memory saved!')
    } catch (error) {
      setIsLoading(false)
      toast.error('Error saving memory!')
    }
  }

  const handleGetMemory = async () => {
    try {
      setIsLoading(true)
      const response = await axios.get<{ number: number }>(import.meta.env.VITE_REST_API_URL + '/get-memory')
      setIsLoading(false)
      const number = response.data.number
      if (number) {
        setDisplay(`${number}`)
        setNum1(number)
      }
      toast.success('Memory retrieved!')
    } catch (error) {
      setIsLoading(false)
      toast.error('Error getting memory!')
    }
  }

  return {
    display,
    handleClear,
    handleNumber: handleNumberPress,
    handleOperator,
    handleEquals,
    handleDecimal,
    handleSave,
    isLoading,
    handleGetMemory,
  }
}
