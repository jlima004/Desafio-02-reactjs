import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'

import logoCoffeDelivery from '../../assets/logo-coffe-delivery.svg'

import { HeaderBox } from './styles'

export function Header() {
  return (
    <HeaderBox $cartItens={null}>
      <img src={logoCoffeDelivery} alt="" />

      <nav>
        <NavLink className="location" to="/">
          <MapPin weight="fill" />
          Porto Alegre, RS
        </NavLink>
        <NavLink className="cart" to="/checkout">
          <ShoppingCart weight="fill" />
        </NavLink>
      </nav>
    </HeaderBox>
  )
}
