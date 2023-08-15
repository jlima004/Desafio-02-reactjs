import { ShoppingCart } from '@phosphor-icons/react'

import { CoffeCardContainer } from './styles'
import { InputNumber } from '../../../../components/InputNumber'
import { useContext, useState } from 'react'
import { CoffeData } from '../../../../contexts/PurchaseContext.interface'
import { PurchaseContext } from '../../../../contexts/PurchaseContext'
import { COFFE_IMG } from '../../../../utils/serveImg'
import { formatPriceWithoutCurrency } from '../../../../utils/priceFormat'

export function Coffe(coffe: CoffeData) {
  const { buyCoffe } = useContext(PurchaseContext)

  const [qtd, setQtd] = useState(1)

  function handleClickBuyButton() {
    buyCoffe({ ...coffe, qtd })
  }

  function addQtd(qtd: number) {
    setQtd(qtd)
  }

  return (
    <CoffeCardContainer>
      <header>
        <img src={COFFE_IMG[coffe.img]} alt="" />
        <div>
          {coffe.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </header>
      <div className="content">
        <strong>{coffe.coffe}</strong>
        <p>{coffe.info}</p>
      </div>
      <footer>
        <p>
          <span>R$</span> {formatPriceWithoutCurrency(coffe.valor)}
        </p>
        <div>
          <InputNumber inputNumberHeight="2.375rem" addQtd={addQtd} qtd={qtd} />

          <button onClick={handleClickBuyButton}>
            <ShoppingCart weight="fill" />
          </button>
        </div>
      </footer>
    </CoffeCardContainer>
  )
}
