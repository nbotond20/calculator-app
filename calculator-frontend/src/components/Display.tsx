import { LoadingSpinner } from './Spinner'

type DisplayProps = {
  display: string
  isLoading: boolean
}

const scaleTextSize = (display: string) => {
  if (display.length < 7) return 'text-7xl'
  else if (display.length < 9) return 'text-6xl'
  else if (display.length < 11) return 'text-5xl'
  else if (display.length < 15) return 'text-4xl'
  else if (display.length < 18) return 'text-3xl'
  else if (display.length < 21) return 'text-2xl'
  else return 'text-xl'
}

export const Display = ({ display, isLoading }: DisplayProps) => {
  return (
    <div className="bg-primary-800 h-20 mb-2 flex items-center justify-end p-2">
      <p className={`text-right text-primary-100 ${scaleTextSize(display)}`}>
        {!isLoading ? display : <LoadingSpinner size={32} />}
      </p>
    </div>
  )
}
