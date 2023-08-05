import styled from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

export const CheckoutContainer = styled.form`
  padding: 2.5rem 0 15rem;

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
  $alternativeRound: boolean
}

export const CheckoutCardContainer = styled.div<CheckoutCardContainerProps>`
  display: flex;
  flex-direction: column;

  gap: ${(props) => props.$internalgap} !important;

  border: 0;
  border-radius: ${(props) =>
    props.$alternativeRound ? '0.375rem 2.75rem 0.375rem 2.75rem' : '0.375rem'};

  padding: 2.5rem;
  background: ${(props) => props.theme['base-card']};

  hr {
    border-top: 1px solid ${(props) => props.theme['base-button']};
  }

  div.valorCard {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      color: ${(props) => props.theme['base-text']};
      line-height: 1.3;

      p {
        font-size: 0.875rem;
      }

      strong {
        font-size: 1rem;
        font-weight: 400;
      }
    }

    div.total {
      strong {
        color: ${(props) => props.theme['base-subtitle']};
        font-size: 1.25rem;
        font-weight: bold;
      }
    }
  }

  button.confirmButton {
    border: 0;
    border-radius: 0.375rem;
    padding: 0.75rem 0.5rem;

    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme.yellow};

    font-size: 0.875rem;
    font-weight: bold;
    line-height: 1.6;

    cursor: pointer;

    transition: background-color 0.3s;

    &:hover {
      background: ${(props) => props.theme['yellow-dark']};
    }
  }
`
export const TitleContainer = styled.strong`
  color: ${(props) => props.theme['base-subtitle']};
  font-family: 'Baloo 2', cursive;
  font-size: 1.125rem;
  font-weight: bold;
  line-height: 1.3;
`

interface AddressTitleContainerProps {
  $iconCollor: keyof typeof defaultTheme
}

export const AddressTitleContainer = styled.div<AddressTitleContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 2px;

  div {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;

    svg {
      font-size: 1.375rem;
      color: ${(props) => props.theme[props.$iconCollor]};
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
