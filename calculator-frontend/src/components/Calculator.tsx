import { Display } from './Display'
import { NumPad } from './NumPad'
import { useCalculator } from '../hooks/useCalculator'

export type Operator = '+' | '-' | '*' | '/'

export const Calculator = () => {
  const {
    display,
    handleNumber,
    handleClear,
    handleOperator,
    handleEquals,
    handleDecimal,
    handleSave,
    handleGetMemory,
    isLoading,
  } = useCalculator()

  return (
    <div className="w-72">
      <Display display={display} isLoading={isLoading} />
      <NumPad
        handleNumber={handleNumber}
        clear={handleClear}
        handleOperator={handleOperator}
        handleEquals={handleEquals}
        handleDecimal={handleDecimal}
        handleSave={handleSave}
        handleGetMemory={handleGetMemory}
      />
    </div>
  )
}
