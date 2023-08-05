import styled from 'styled-components'

export const AddressFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 0.75rem;
  row-gap: 1rem;

  max-width: 35rem;

  input[type='text'] {
    padding: 0.75rem;

    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.3;

    max-height: 2.625rem;

    color: ${(props) => props.theme['base-text']};
    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 4px;

    &:focus-visible {
      outline: ${(props) => props.theme['yellow-dark']} solid 2px;
    }
  }

  /* Tratamento de Erros */
  input[type='text'].inputError {
    &:focus-visible {
      outline: none;
    }
    outline: #ff0000 solid 2px;
  }

  span.error {
    color: #ff0000;
    font-size: 14px;
    position: relative;
    top: -12px;
  }
  /* Fim do tratamento de Erros */

  input[type='text']::placeholder {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.3;

    color: ${(props) => props.theme['base-label']};
  }

  input[type='text'].cep {
    max-width: 12.5rem;
  }

  input[type='text'].uf {
    max-width: 3.75rem;
  }

  input[type='text'].cityInput {
    min-width: 17.25rem;
    width: 100%;
  }

  @media (max-width: 500px) {
    input[type='text'].cityInput {
      min-width: auto;
    }
  }

  div.placeItens {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 0.75rem;
    row-gap: 1rem;
    flex: 1;

    div {
      display: flex;
      flex-direction: column;
      column-gap: 0.75rem;
      row-gap: 1rem;
      flex: 1;

      div.cityAndUFContainer {
        display: flex;
        flex-direction: row;
        flex: 1;
      }
    }

    div.numberAndNeighborhoodInputContainer {
      min-width: 12.5rem;
    }
  }
`
