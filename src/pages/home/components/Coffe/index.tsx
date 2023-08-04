import { ShoppingCart } from '@phosphor-icons/react'

import coffeImg from '../../../../assets/coffes/expresso-tradicional.png'

import { CoffeCardContainer } from './styles'
import { InputNumber } from '../../../../components/InputNumber'

export function Coffe() {
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
          <InputNumber inputNumberHeight="2.375rem" />

          <button>
            <ShoppingCart weight="fill" />
          </button>
        </div>
      </footer>
    </CoffeCardContainer>
  )
}
