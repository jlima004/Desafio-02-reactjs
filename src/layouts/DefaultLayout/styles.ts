import styled from 'styled-components'

export const ContentContainer = styled.main`
  display: flex;
  flex-direction: column;

  max-width: 90rem;
  padding: 0 10rem;
  margin: 0 auto;

  @media (max-width: 1400px) {
    padding: 0 8rem;
  }

  @media (max-width: 1336px) {
    padding: 0 10rem;
  }

  @media (max-width: 900px) {
    padding: 0 5rem;
  }

  @media (max-width: 740px) {
    padding: 0 2.5rem;
  }
`

export const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  z-index: 1;
`
