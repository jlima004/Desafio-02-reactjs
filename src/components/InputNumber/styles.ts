import { styled } from 'styled-components'

interface InsputNumberContainerProps {
  $inputNumberHeight: string
}

export const InsputNumberContainer = styled.div<InsputNumberContainerProps>`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 0;

  height: ${(props) => props.$inputNumberHeight};
  width: fit-content;

  svg {
    font-size: 0.875rem;
    line-height: 1;
    color: ${(props) => props.theme.purple};

    cursor: pointer;
    position: absolute;
    top: calc((${(props) => props.$inputNumberHeight} - 0.75rem) / 2);

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

    border: 0;
    border-radius: 0.375rem;
    width: 4.5rem;

    font-size: 1rem;
    text-align: center;
    line-height: 1;

    color: ${(props) => props.theme['base-title']};
    background: ${(props) => props.theme['base-button']};
  }

  input[type='number']::-webkit-inner-spin-button {
    all: unset;
  }
`
