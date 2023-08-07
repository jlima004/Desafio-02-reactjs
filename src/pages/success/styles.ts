import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  padding: 80px 0 0;

  > strong {
    color: ${(props) => props.theme['yellow-dark']};
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    font-weight: 800;
    line-height: 1.3;
  }
  > p {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
    line-height: 1.3;
  }

  div.contentContainer {
    margin-top: 36px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 102px;

    img {
      max-width: 492px;
      max-height: 293px;
    }
  }
`

export const OrderInfoCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;

  width: 526px;
  height: fit-content;
  padding: 40px;
  border: 1px solid transparent;
  background:
    linear-gradient(
        ${(props) => props.theme.background},
        ${(props) => props.theme.background}
      )
      padding-box,
    linear-gradient(
      160deg,
      ${(props) => props.theme.yellow} 0%,
      ${(props) => props.theme.purple} 100%
    );
  border-radius: 6px 36px 6px 36px;

  div {
    display: flex;
    flex-direction: row;
    gap: 12px;

    span {
      width: 32px;
      height: 32px;
      border: 0;
      border-radius: 99px;
      display: flex;
      justify-content: center;
      align-items: center;
      align-self: center;

      &.local {
        background: ${(props) => props.theme.purple};
      }

      &.time {
        background: ${(props) => props.theme.yellow};
      }

      &.payment {
        background: ${(props) => props.theme['yellow-dark']};
      }

      svg {
        font-size: 1rem;
        color: ${(props) => props.theme.white};
      }
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 0;

      p,
      strong {
        line-height: 1.3;
      }
    }
  }
`
