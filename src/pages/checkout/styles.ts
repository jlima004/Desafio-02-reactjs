import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  padding-top: 2.5rem;

  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  div.checkoutItem {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    > div {
      display: flex;
      flex-direction: column;
      gap: 0.937rem;
    }
  }
`

interface CheckoutCardContainerProps {
  $internalgap: string
}

export const CheckoutCardContainer = styled.div<CheckoutCardContainerProps>`
  display: flex;
  flex-direction: column;

  gap: ${(props) => props.$internalgap};

  padding: 2.5rem;
  background: ${(props) => props.theme['base-card']};
`
export const TitleContainer = styled.strong`
  color: ${(props) => props.theme['base-subtitle']};
  font-family: 'Baloo 2', cursive;
  font-size: 1.125rem;
  font-weight: bold;
  line-height: 1.3;
`
export const AddressTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  div {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;

    svg {
      font-size: 1.375rem;
      color: ${(props) => props.theme['yellow-dark']};
    }

    strong {
      color: ${(props) => props.theme['base-subtitle']};
      font: 1rem;
      font-weight: 400;
      line-height: 1.3;
    }
  }

  p {
    color: ${(props) => props.theme['base-text']};
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.3;
    padding-left: 1.875rem;
  }
`
