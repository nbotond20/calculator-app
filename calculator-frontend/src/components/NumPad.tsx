import { LoadIcon } from '../SVG/LoadIcon'
import { SaveIcon } from '../SVG/SaveIcon'
import { Operator } from './Calculator'

const className = 'bg-primary-500 col-span-1 h-16 hover:bg-primary-400 text-2xl text-primary-100 active:bg-primary-600'

type NumPadProps = {
  clear: () => void
  handleSave: () => void
  handleEquals: () => void
  handleNumber: (num: number) => void
  handleDecimal: () => void
  handleOperator: (op: Operator) => void
  handleGetMemory: () => void
}

export const NumPad = ({
  clear,
  handleSave,
  handleEquals,
  handleNumber,
  handleDecimal,
  handleOperator,
  handleGetMemory,
}: NumPadProps) => {
  return (
    <div className="grid grid-cols-4 gap-2 max-w-sm ">
      <button onClick={clear} className={className}>
        AC
      </button>
      <button onClick={handleSave} className={className}>
        <SaveIcon />
      </button>
      <button onClick={handleGetMemory} className={className}>
        <LoadIcon />
      </button>
      <button onClick={() => handleOperator('/')} className={className}>
        /
      </button>
      <button onClick={() => handleNumber(7)} className={className}>
        7
      </button>
      <button onClick={() => handleNumber(8)} className={className}>
        8
      </button>
      <button onClick={() => handleNumber(9)} className={className}>
        9
      </button>
      <button onClick={() => handleOperator('*')} className={className}>
        x
      </button>
      <button onClick={() => handleNumber(4)} className={className}>
        4
      </button>
      <button onClick={() => handleNumber(5)} className={className}>
        5
      </button>
      <button onClick={() => handleNumber(6)} className={className}>
        6
      </button>
      <button onClick={() => handleOperator('-')} className={className}>
        -
      </button>
      <button onClick={() => handleNumber(1)} className={className}>
        1
      </button>
      <button onClick={() => handleNumber(2)} className={className}>
        2
      </button>
      <button onClick={() => handleNumber(3)} className={className}>
        3
      </button>
      <button onClick={() => handleOperator('+')} className={className}>
        +
      </button>
      <button onClick={() => handleNumber(0)} className={`${className} col-span-2`}>
        0
      </button>
      <button onClick={handleDecimal} className={className}>
        .
      </button>
      <button onClick={handleEquals} className={className}>
        =
      </button>
    </div>
  )
}
