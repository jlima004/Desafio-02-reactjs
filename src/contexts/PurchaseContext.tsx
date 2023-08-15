import { ReactNode, createContext, useEffect, useState } from 'react'

import {
  BuyStateData,
  PaymentMethodData,
  CoffeData,
  PurchaseContextData,
  Address,
} from './PurchaseContext.interface'

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
  const [itens, setItens] = useState<CoffeData[]>([])
  const [itensTotal, setItensTotal] = useState(0)
  const [total, setTotal] = useState(0)
  const [address, setAddress] = useState<Address>(VOID_ADDRESS)
  const [buyState, setBuyState] = useState<BuyStateData>('VOID')
  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethodData>('CARTÃO DE CRÉDITO')

  const deliveryTax = DELIVERY_TAX

  useEffect(() => {
    if (itens.length > 0 && buyState !== 'BUYED') setBuyState('BUYING')

    const itemsTotal: number = itens.reduce((acum, { valor, qtd = 1 }) => {
      return acum + valor * qtd
    }, 0)

    const totalPurchase = itemsTotal + deliveryTax

    setItensTotal(itemsTotal)
    setTotal(totalPurchase)
  }, [buyState, deliveryTax, itens])

  function completeAddress(addressData: Address) {
    setAddress(addressData)
    setBuyState('BUYED')
  }

  function changeBuyState(buySt: BuyStateData) {
    setBuyState(buySt)
  }

  function changePaymentMethod(payMethod: PaymentMethodData) {
    setPaymentMethod(payMethod)
  }

  function changeQtd(coffe: CoffeData) {
    const newState = itens.map((item) => {
      if (item.id === coffe.id) return { ...item, qtd: coffe.qtd }

      return item
    })

    setItens(newState)
  }

  function removeCoffe(id: number) {
    const newState = itens.filter((item) => item.id !== id)

    setItens(newState)
  }

  function buyCoffe(coffe: CoffeData) {
    let newState: CoffeData[] = []

    const newCoffeIndex = itens.findIndex((item) => item.id === coffe.id)

    if (newCoffeIndex < 0) {
      newState = [...itens, coffe]
    } else {
      newState = itens.map((item) => {
        if (item.id === coffe.id) return { ...item, qtd: coffe.qtd }

        return item
      })
    }

    setItens(newState)
  }

  /* function calculateTotalValueOfItems() {
    const itemsTotal: number = itens.reduce((acum, { valor, qtd = 1 }) => {
      return acum + valor * qtd
    }, 0)

    setItensTotal(itemsTotal)
  } */

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
        changeBuyState,
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
