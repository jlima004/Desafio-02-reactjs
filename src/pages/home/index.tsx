import { Coffe } from './components/Coffe'
import { Intro } from './components/Intro'

import { CoffeListContainer, CoffesContainer } from './styles'

export function Home() {
  return (
    <>
      <Intro />
      <CoffesContainer>
        <strong>Nossos cafés</strong>

        <CoffeListContainer>
          <Coffe />
          <Coffe />
          <Coffe />
          <Coffe />
          <Coffe />
          <Coffe />
        </CoffeListContainer>
      </CoffesContainer>
    </>
  )
}
