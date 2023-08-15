import styled from 'styled-components'

export const CoffeCardContainer = styled.div`
  width: 16rem;
  height: 19.375rem;

  border: 0;
  border-radius: 0.375rem 2.25rem 0.375rem 2.25rem;

  background: ${(props) => props.theme['base-card']};

  padding: 0 1.25rem 1.25rem;

  header {
    line-height: 1.3;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    margin-bottom: -0.25rem;
    > img {
      width: 7.5rem;
      height: 7.5rem;

      display: block;
      margin: 0 auto;

      position: relative;
      top: -1.25rem;
    }

    > div {
      display: flex;
      gap: 0.25rem;
      justify-content: center;

      position: relative;
      top: -1.25rem;
      > span {
        background: ${(props) => props.theme['yellow-light']};
        color: ${(props) => props.theme['yellow-dark']};

        border: 0;
        border-radius: 99px;

        font-size: 0.625rem;
        font-weight: bold;

        padding: 0.25rem 0.5rem;
      }
    }
  }
  > div.content {
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    align-items: center;
    text-align: center;
    strong {
      font-family: 'Baloo 2', cursive;
      font-weight: 800;
      line-height: 1.3;

      color: ${(props) => props.theme['base-subtitle']};

      font-size: 1.25rem;
    }
    p {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-label']};
    }
  }
  footer {
    margin: 2.062rem auto 0;
    width: 13rem;
    height: 2.375rem;

    display: flex;
    justify-content: space-between;

    > p {
      font-family: 'Baloo 2', cursive;
      font-weight: 800;
      font-size: 1.5rem;

      color: ${(props) => props.theme['base-text']};

      > span {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 0.875rem;
      }
    }
    > div {
      width: 7.375rem;
      display: flex;
      gap: 0.5rem;
      justify-content: space-between;

      > button {
        width: 2.375rem;
        height: 2.375rem;

        padding: 0.5rem;
        border: 0;
        border-radius: 0.375rem;
        cursor: pointer;

        background: ${(props) => props.theme['purple-dark']};

        transition: background-color 0.3s;

        &:hover {
          background: ${(props) => props.theme.purple};
        }
        > svg {
          font-size: 1.375rem;
          color: ${(props) => props.theme['base-card']};
        }
      }
    }
  }
`
