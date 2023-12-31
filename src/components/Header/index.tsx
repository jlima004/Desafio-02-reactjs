import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'

import logoCoffeDelivery from '../../assets/logo-coffe-delivery.svg'

import { PurchaseContext } from '../../contexts/PurchaseContext'
import { HeaderBox, LocationInputContainer } from './styles'

export function Header() {
  const { itens, buyState } = useContext(PurchaseContext)
  return (
    <HeaderBox $cartItens={itens.length > 0 ? itens.length : null}>
      <NavLink to="/">
        <img src={logoCoffeDelivery} alt="" />
      </NavLink>

      <nav>
        <LocationInputContainer>
          <input type="text" list="location-suggestions" />

          <MapPin weight="fill" />

          <datalist id="location-suggestions">
            <option value="Porto Alegre, RS" />
            <option value="Florianópolis, SC" />
            <option value="Curitiba, PR" />
            <option value="São Paulo, SP" />
          </datalist>
        </LocationInputContainer>

        <NavLink to={buyState === 'BUYED' ? '/success' : '/checkout'}>
          <ShoppingCart weight="fill" />
        </NavLink>
      </nav>
    </HeaderBox>
  )
}
