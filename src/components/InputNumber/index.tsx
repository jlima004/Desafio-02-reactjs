import { useState } from 'react'
import { Minus, Plus } from '@phosphor-icons/react'
import { InsputNumberContainer } from './styles'

interface InputNumberProps {
  inputNumberHeight: string
}

export function InputNumber({ inputNumberHeight }: InputNumberProps) {
  const [qtd, setQtd] = useState(1)

  function handleMinusClick() {
    setQtd((state) => {
      const newState = state - 1

      if (newState < 1) return state

      return newState
    })
  }

  function handlePlusClick() {
    setQtd((state) => {
      const newState = state + 1

      if (newState > 99) return state

      return newState
    })
  }

  return (
    <InsputNumberContainer $inputNumberHeight={inputNumberHeight}>
      <Minus weight="bold" onClick={handleMinusClick} className="minus" />
      <input
        disabled={true}
        inputMode="numeric"
        pattern="[0-9]*"
        type="number"
        step={1}
        max={99}
        min={1}
        name="inputQtd"
        value={qtd}
      />
      <Plus weight="bold" onClick={handlePlusClick} className="plus" />
    </InsputNumberContainer>
  )
}
