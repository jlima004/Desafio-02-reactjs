import { styled } from 'styled-components'

export const InsputNumberContainer = styled.div`
  display: flex;
  position: relative;

  svg {
    font-size: 0.875rem;
    color: ${(props) => props.theme.purple};

    cursor: pointer;
    position: absolute;
    top: 0.75rem;

    transition: color 0.3s;

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }

  svg.minus {
    left: 0.5rem;
  }
  svg.plus {
    right: 0.5rem;
  }

  input[type='number'] {
    appearance: textfield;
    -webkit-appearance: textfield;
    -moz-appearance: textfield;

    width: 4.5rem;
    border: 0;
    border-radius: 0.375rem;

    font-size: 1rem;
    text-align: center;

    color: ${(props) => props.theme['base-title']};
    background: ${(props) => props.theme['base-button']};
  }

  input[type='number']::-webkit-inner-spin-button {
    all: unset;
  }
`
