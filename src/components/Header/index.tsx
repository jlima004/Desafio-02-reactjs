import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'

import logoCoffeDelivery from '../../assets/logo-coffe-delivery.svg'

import { HeaderBox, LocationInputContainer } from './styles'

export function Header() {
  return (
    <HeaderBox $cartItens={null}>
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

        <NavLink to="/checkout">
          <ShoppingCart weight="fill" />
        </NavLink>
      </nav>
    </HeaderBox>
  )
}
