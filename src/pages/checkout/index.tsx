import { MapPinLine } from '@phosphor-icons/react'
import {
  CheckoutContainer,
  CheckoutCardContainer,
  TitleContainer,
  AddressTitleContainer,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <div className="checkoutItem">
        <div>
          <TitleContainer>Complete seu pedido</TitleContainer>
          <CheckoutCardContainer $internalgap={'2rem'}>
            <AddressTitleContainer>
              <div>
                <MapPinLine />
                <strong>Endereço de Entrega</strong>
              </div>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </AddressTitleContainer>
            <form>
              <input type="text" />
            </form>
          </CheckoutCardContainer>
        </div>

        <div>
          <CheckoutCardContainer $internalgap={'2rem'}>
            <div>
              <h1>Title</h1>
            </div>
            <div>
              <h1>Botões</h1>
            </div>
          </CheckoutCardContainer>
        </div>
      </div>

      <div className="checkoutItem">
        <TitleContainer>Cafés selecionados</TitleContainer>
        <CheckoutCardContainer $internalgap={'1.5rem'}>
          <div>
            <h1>CoffeCard</h1>
          </div>
          <div>
            <h1>CoffeCard</h1>
          </div>
          <div>
            <h1>Valores</h1>
          </div>
          <div>
            <button>Confirmar pedido</button>
          </div>
        </CheckoutCardContainer>
      </div>
    </CheckoutContainer>
  )
}
