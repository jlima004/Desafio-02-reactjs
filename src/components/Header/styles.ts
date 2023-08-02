import styled from 'styled-components'

interface NavLinkProps {
  $cartItens?: number | null
}

export const HeaderBox = styled.header<NavLinkProps>`
  height: 6.5rem;
  padding: 2rem 10rem;

  display: flex;
  justify-content: space-between;

  background: ${(props) => props.theme.background};

  max-width: 90rem;
  margin: 0 auto;

  @media (max-width: 1400px) {
    padding: 2rem 8rem;
  }

  @media (max-width: 1336px) {
    padding: 2rem 10rem;
  }

  @media (max-width: 900px) {
    padding: 2rem 5rem;
  }

  @media (max-width: 740px) {
    padding: 2rem 2.5rem;
  }

  img {
    width: 5.31rem;
    height: 2.5rem;
  }

  nav {
    display: flex;
    gap: 0.75rem;

    > a {
      text-decoration: none;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.3;

      padding: 0.5rem;
      border: 0;
      border-radius: 6px;

      display: flex;
      align-items: center;

      background-color: ${(props) => props.theme['yellow-light']};
      position: relative;

      svg {
        color: ${(props) => props.theme['yellow-dark']};
        font-size: 1.375rem;
      }

      &::before {
        content: '${(props) => props.$cartItens ?? props.$cartItens}';
        content: ${(props) => props.$cartItens ?? 'none'};

        border-radius: 99px;
        background: ${(props) => props.theme['yellow-dark']};
        color: ${(props) => props.theme.white};

        width: 1.25rem;
        height: 1.25rem;

        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 0.75rem;
        font-weight: bold;
        line-height: 1;

        position: absolute;
        top: -7.5px;
        right: -7.5px;
      }
    }
  }
`

export const LocationInputContainer = styled.div`
  display: flex;
  position: relative;

  input[type='text'] {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.3;

    max-width: 9.5rem;
    padding: 0.5rem 0.5rem 0.5rem 2.125rem;
    border: 0;
    border-radius: 6px;

    color: ${(props) => props.theme['purple-dark']};
    background-color: ${(props) => props.theme['purple-light']};

    &::-webkit-calendar-picker-indicator {
      display: none !important;
    }
  }

  svg {
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;

    color: ${(props) => props.theme.purple};
    font-size: 1.375rem;
  }
`
