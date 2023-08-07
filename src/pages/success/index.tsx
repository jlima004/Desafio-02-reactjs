import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'

import successIllustration from '../../assets/success-illustration.svg'

import { SuccessContainer, OrderInfoCard } from './styles'

export function Success() {
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
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
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
              <strong>Cartão de Crédito</strong>
            </div>
          </div>
        </OrderInfoCard>
        <img src={successIllustration} alt="" />
      </div>
    </SuccessContainer>
  )
}
