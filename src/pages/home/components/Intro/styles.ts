import styled from 'styled-components'

import { defaultTheme } from '../../../../styles/themes/default'

export const IntroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  padding: 5.75rem 0;
  margin-top: 6.5rem;

  line-height: 1.3;

  @media (max-width: 1336px) {
    gap: 4rem;
    justify-content: center;
  }

  div {
    max-width: 36.75rem;
    display: flex;
    flex-direction: column;
    gap: 4.125rem;

    div.title {
      gap: 1rem;

      @media (max-width: 661px) {
        text-align: center;
      }

      strong {
        margin-top: 0.062rem;

        font-family: 'Baloo 2', cursive;
        font-weight: 800;
        font-size: 3rem;

        color: ${(props) => props.theme['base-title']};
      }
      p {
        font-size: 1.25rem;

        color: ${(props) => props.theme['base-subtitle']};
      }
    }

    div.benefits {
      display: grid;
      grid-template-columns: repeat(2, 14.43rem);
      grid-template-rows: repeat(2, 1fr);
      grid-column-gap: 2.5rem;
      grid-row-gap: 1.25rem;

      max-width: 35.43rem;

      @media (max-width: 661px) {
        grid-template-columns: repeat(1, 14.43rem);
        grid-template-rows: repeat(4, 1fr);
      }
    }
  }

  img {
    width: 29.75rem;
    height: 22.5rem;
    max-width: 476px;
    max-height: 360px;

    @media (max-width: 500px) {
      height: auto;
      width: 100%;
    }
  }
`

interface BenefitItemProps {
  $itemColor: keyof typeof defaultTheme
}

export const BenefitItem = styled.p<BenefitItemProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  width: max-content;

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 2rem;
    height: 2rem;

    border: 0;
    border-radius: 99px;

    font-size: 1rem;
    font-weight: 1;

    color: ${(props) => props.theme.background};
    background-color: ${(props) => props.theme[props.$itemColor]};
  }
`
