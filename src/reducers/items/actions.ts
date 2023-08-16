import { CoffeData } from '../../contexts/PurchaseContext.interface'

export enum ActionTypes {
  ADD_NEW_COFFE = 'ADD_NEW_COFFE',
  CHANGE_QTD = 'CHANGE_QTD',
  REMOVE_COFFE = 'REMOVE_COFFE',
  COMPLETE_PURCHASE = 'COMPLETE_PURCHASE',
}

export type ActionTypesProps =
  | { type: ActionTypes.ADD_NEW_COFFE; payload: { coffeItem: CoffeData } }
  | { type: ActionTypes.CHANGE_QTD; payload: { coffeItem: CoffeData } }
  | { type: ActionTypes.REMOVE_COFFE; payload: { idItem: number } }
  | { type: ActionTypes.COMPLETE_PURCHASE }

export function addNewCoffe(coffe: CoffeData) {
  return {
    type: ActionTypes.ADD_NEW_COFFE,
    payload: { coffeItem: coffe },
  }
}
export function changeQTD(coffe: CoffeData) {
  return {
    type: ActionTypes.CHANGE_QTD,
    payload: { coffeItem: coffe },
  }
}
export function removeCoffe(id: number) {
  return {
    type: ActionTypes.REMOVE_COFFE,
    payload: { idItem: id },
  }
}
export function completePurchase() {
  return {
    type: ActionTypes.COMPLETE_PURCHASE,
  }
}
