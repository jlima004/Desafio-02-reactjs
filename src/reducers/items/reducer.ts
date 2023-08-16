import { produce } from 'immer'

import { ItemsState } from '../../contexts/PurchaseContext.interface'
import { ActionTypes, ActionTypesProps } from './actions'

export function itensReducer(state: ItemsState, action: ActionTypesProps) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_COFFE: {
      if (state.buyState === 'BUYED') {
        return produce(state, (draft) => {
          draft.itens = [action.payload.coffeItem]
          draft.buyState = 'BUYING'
        })
      }

      const newCoffeIndex = state.itens.findIndex(
        (item) => item.id === action.payload.coffeItem.id,
      )

      if (newCoffeIndex < 0) {
        return produce(state, (draft) => {
          draft.itens.push(action.payload.coffeItem)
          draft.buyState = 'BUYING'
        })
      }

      return produce(state, (draft) => {
        draft.itens[newCoffeIndex].qtd = action.payload.coffeItem.qtd
      })
    }

    case ActionTypes.CHANGE_QTD: {
      const newCoffeIndex = state.itens.findIndex(
        (item) => item.id === action.payload.coffeItem.id,
      )

      if (newCoffeIndex < 0) return state

      return produce(state, (draft) => {
        draft.itens[newCoffeIndex].qtd = action.payload.coffeItem.qtd
      })
    }

    case ActionTypes.REMOVE_COFFE: {
      const currentCoffeIndex = state.itens.findIndex(
        (item) => item.id === action.payload.idItem,
      )

      if (currentCoffeIndex > -1) {
        const newState = produce(state, (draft) => {
          draft.itens.splice(currentCoffeIndex, 1)
        })

        if (newState.itens.length === 0)
          return produce(state, (draft) => {
            draft.itens.splice(currentCoffeIndex, 1)
            draft.buyState = 'VOID'
          })

        return newState
      }

      return state
    }

    case ActionTypes.COMPLETE_PURCHASE: {
      return produce(state, (draft) => {
        draft.itens = []
        draft.buyState = 'BUYED'
      })
    }

    default:
      return state
  }
}
