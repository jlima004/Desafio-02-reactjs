import { coffes } from '../../constants/coffes.constants'
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
          {coffes.map((coffe) => (
            <Coffe key={coffe.id} {...coffe} />
          ))}
        </CoffeListContainer>
      </CoffesContainer>
    </>
  )
}
