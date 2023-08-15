import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'

import { PurchaseContext } from '../../contexts/PurchaseContext'

import successIllustration from '../../assets/success-illustration.svg'

import { SuccessContainer, OrderInfoCard } from './styles'
import { useContext } from 'react'

export function Success() {
  const { address, paymentMethod } = useContext(PurchaseContext)
  const { rua, numero, bairro, cidade, uf } = address
  return (
    <SuccessContainer>
      <strong>Uhu! Pedido confirmado</strong>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <div className="contentContainer">
        <OrderInfoCard>
          <div>
            <span className="local">
              <MapPin weight="fill" />
            </span>
            <div>
              <p>
                Entrega em <strong>{`${rua}, ${numero}`}</strong>
              </p>
              <p>{`${bairro} - ${cidade}, ${uf}`}</p>
            </div>
          </div>

          <div>
            <span className="time">
              <Timer weight="fill" />
            </span>
            <div>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </div>
          </div>

          <div>
            <span className="payment">
              <CurrencyDollar />
            </span>
            <div>
              <p>Pagamento na entrega</p>
              <strong>{paymentMethod}</strong>
            </div>
          </div>
        </OrderInfoCard>
        <img src={successIllustration} alt="" />
      </div>
    </SuccessContainer>
  )
}
