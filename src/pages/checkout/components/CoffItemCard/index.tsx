import { Trash } from '@phosphor-icons/react'

import { InputNumber } from '../../../../components/InputNumber'
import { CoffeData } from '../../../../contexts/PurchaseContext.interface'

import { CoffItemCardConteiner } from './styles'
import { COFFE_IMG } from '../../../../utils/serveImg'
import { formatPrice } from '../../../../utils/priceFormat'
import { useContext } from 'react'
import { PurchaseContext } from '../../../../contexts/PurchaseContext'

interface CoffItemCardProps {
  item: CoffeData
}

export function CoffItemCard({ item }: CoffItemCardProps) {
  const { changeQtd, removeCoffe } = useContext(PurchaseContext)

  function addQtd(qtd: number) {
    const newState = item
    newState.qtd = qtd
    changeQtd(newState)
  }

  function handleREmoveButtonClick() {
    removeCoffe(item.id)
  }
  return (
    <CoffItemCardConteiner>
      <div className="info">
        <img src={COFFE_IMG[item.img]} alt="" />
        <div className="details">
          <p className="coffename">{item.coffe}</p>
          <div className="actions">
            <InputNumber
              inputNumberHeight="2rem"
              qtd={item.qtd ?? 1}
              addQtd={addQtd}
            />
            <button onClick={handleREmoveButtonClick} type="button">
              <Trash />
              REMOVER
            </button>
          </div>
        </div>
      </div>
      <strong>{formatPrice(item.valor)}</strong>
    </CoffItemCardConteiner>
  )
}
