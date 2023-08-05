import { styled } from 'styled-components'

export const PaymentMethodButtonsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;

  button {
    width: 11.166rem;
    height: 3.187rem;
    padding: 1rem;

    display: flex;
    gap: 0.75rem;
    align-items: center;

    border: 1px solid transparent;
    border-radius: 0.375rem;
    background: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme['base-text']};

    font-size: 0.75rem;

    cursor: pointer;

    svg {
      font-size: 1rem;
      color: ${(props) => props.theme.purple};
    }

    transition: background-color 0.3s;

    &:hover {
      background: ${(props) => props.theme['base-hover']};
    }

    &.active {
      border: 1px solid ${(props) => props.theme.purple};
      background: ${(props) => props.theme['purple-light']};
    }
  }
`
