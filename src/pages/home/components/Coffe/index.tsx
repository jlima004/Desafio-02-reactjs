import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'

import coffeImg from '../../../../assets/coffes/expresso-tradicional.png'

import { CoffeCardContainer } from './styles'
import { useState } from 'react'

export function Coffe() {
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
    <CoffeCardContainer>
      <header>
        <img src={coffeImg} alt="" />
        <div>
          <span>TRADICIONAL</span>
        </div>
      </header>
      <div className="content">
        <strong>Expresso Tradicional</strong>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </div>
      <footer>
        <p>
          <span>R$</span> 9,90
        </p>
        <div>
          <div>
            <Minus onClick={handleMinusClick} className="minus" />
            <input
              inputMode="numeric"
              pattern="[0-9]*"
              type="number"
              step={1}
              max={99}
              min={1}
              name="inputQtd"
              value={qtd}
            />
            <Plus onClick={handlePlusClick} className="plus" />
          </div>
          <button>
            <ShoppingCart weight="fill" />
          </button>
        </div>
      </footer>
    </CoffeCardContainer>
  )
}
