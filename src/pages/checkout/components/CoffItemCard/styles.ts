import { styled } from 'styled-components'

export const CoffItemCardConteiner = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3.125rem;
  padding: 0.5rem 0.25rem;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }

  div.info {
    display: flex;
    flex-direction: row;
    gap: 1.25rem;

    img {
      width: 4rem;
      height: 4rem;
    }

    div.details {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      p.coffename {
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.3;
        color: ${(props) => props.theme['base-subtitle']};
      }
      div.actions {
        display: flex;
        flex-direction: row;
        gap: 0.5rem;

        button {
          display: flex;
          gap: 0.25rem;
          justify-content: space-between;
          align-items: center;

          font-size: 0.75rem;
          font-weight: 400;

          padding: 0.5rem;
          border: 0;
          border-radius: 0.375rem;
          color: ${(props) => props.theme['base-text']};
          background: ${(props) => props.theme['base-button']};

          cursor: pointer;
          transition: background-color 0.3s;

          &:hover {
            background: ${(props) => props.theme['base-hover']};
          }

          svg {
            font-size: 1rem;
            color: ${(props) => props.theme.purple};
          }
        }
      }
    }

    @media (max-width: 500px) {
      flex-direction: column;
      align-items: center;
    }
  }

  strong.valor {
    color: ${(props) => props.theme['base-text']};
    font-weight: bold;
    font-size: 1rem;
    line-height: 1.3;
  }
`
