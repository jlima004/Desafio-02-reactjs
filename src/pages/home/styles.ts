import styled from 'styled-components'

export const CoffesContainer = styled.div`
  padding: 2rem 0 9.812rem;

  > strong {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    line-height: 1.3;
    font-size: 2rem;

    color: ${(props) => props.theme['base-subtitle']};

    display: block;
    margin-bottom: 3.375rem;

    @media (max-width: 1336px) {
      text-align: center;
    }
  }
`

export const CoffeListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 2rem;
  row-gap: 2.5rem;

  @media (max-width: 1336px) {
    justify-content: center;
  }
`
