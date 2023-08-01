import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 90rem;
  padding: 0 10rem;
  margin: 0 auto;
`

export const ContentContainer = styled.main``

export const HeaderContainer = styled.div`
  position: fixed;

  width: calc(100% - 10rem);
  max-width: 70rem;

  z-index: 1;
`
