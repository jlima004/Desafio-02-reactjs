import { Minus, Plus } from '@phosphor-icons/react'
import { InsputNumberContainer } from './styles'

interface InputNumberProps {
  inputNumberHeight: string
  addQtd: (qtd: number) => void
  qtd: number
}

export function InputNumber({
  inputNumberHeight,
  addQtd,
  qtd,
}: InputNumberProps) {
  function handleMinusClick() {
    const newState = qtd - 1

    if (newState < 1) return

    addQtd(newState)
  }

  function handlePlusClick() {
    const newState = qtd + 1

    if (newState > 99) return

    addQtd(newState)
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
