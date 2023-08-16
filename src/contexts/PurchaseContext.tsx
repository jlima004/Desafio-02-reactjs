import {
  ReactNode,
  createContext,
  useEffect,
  useState,
  useReducer,
} from 'react'

import {
  PaymentMethodData,
  CoffeData,
  PurchaseContextData,
  Address,
} from './PurchaseContext.interface'
import { itensReducer } from '../reducers/items/reducer'
import { ActionTypes } from '../reducers/items/actions'

const DELIVERY_TAX = 3.5

const VOID_ADDRESS = {
  bairro: '',
  cep: '',
  cidade: '',
  complemento: '',
  numero: '',
  rua: '',
  uf: '',
}

export const PurchaseContext = createContext({} as PurchaseContextData)

interface PurchaseContextProviderProps {
  children: ReactNode
}

export function PurchaseContextProvider({
  children,
}: PurchaseContextProviderProps) {
  const [itensState, dispatch] = useReducer(itensReducer, {
    itens: [],
    buyState: 'VOID',
  })

  const [itensTotal, setItensTotal] = useState(0)
  const [total, setTotal] = useState(0)
  const [address, setAddress] = useState<Address>(VOID_ADDRESS)
  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethodData>('CARTÃO DE CRÉDITO')

  const deliveryTax = DELIVERY_TAX

  const { itens, buyState } = itensState

  useEffect(() => {
    const itemsTotal: number = itens.reduce((acum, { valor, qtd = 1 }) => {
      return acum + valor * qtd
    }, 0)

    const totalPurchase = itemsTotal + deliveryTax

    setItensTotal(itemsTotal)
    setTotal(totalPurchase)
  }, [buyState, deliveryTax, itens])

  function completeAddress(addressData: Address) {
    setAddress(addressData)
    dispatch({
      type: ActionTypes.COMPLETE_PURCHASE,
    })
  }

  function changePaymentMethod(payMethod: PaymentMethodData) {
    setPaymentMethod(payMethod)
  }

  function changeQtd(coffe: CoffeData) {
    dispatch({
      type: ActionTypes.CHANGE_QTD,
      payload: { coffeItem: coffe },
    })
  }

  function removeCoffe(id: number) {
    dispatch({
      type: ActionTypes.REMOVE_COFFE,
      payload: { idItem: id },
    })
  }

  function buyCoffe(coffe: CoffeData) {
    dispatch({
      type: ActionTypes.ADD_NEW_COFFE,
      payload: { coffeItem: coffe },
    })
  }

  return (
    <PurchaseContext.Provider
      value={{
        itens,
        buyState,
        paymentMethod,
        itensTotal,
        total,
        deliveryTax,
        address,
        changePaymentMethod,
        buyCoffe,
        changeQtd,
        removeCoffe,
        completeAddress,
      }}
    >
      {children}
    </PurchaseContext.Provider>
  )
}
