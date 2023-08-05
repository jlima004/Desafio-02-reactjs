import { InputNumber } from '../../../../components/InputNumber'
import { CoffItemCardConteiner } from './styles'

import expressoTradicional from '../../../../assets/coffes-card/expresso-tradicional.png'
import { Trash } from '@phosphor-icons/react'

export function CoffItemCard() {
  return (
    <CoffItemCardConteiner>
      <div className="info">
        <img src={expressoTradicional} alt="" />
        <div className="details">
          <p className="coffename">Expresso Tradicional</p>
          <div className="actions">
            <InputNumber inputNumberHeight="2rem" />
            <button type="button">
              <Trash />
              REMOVER
            </button>
          </div>
        </div>
      </div>
      <strong>R$ 9,90</strong>
    </CoffItemCardConteiner>
  )
}
