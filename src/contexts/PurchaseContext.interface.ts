export type coffImg =
  | 'expressoTradicional'
  | 'expressoAmericano'
  | 'expressoCremoso'
  | 'expressoGelado'
  | 'cafeComLeite'
  | 'latte'
  | 'capuccino'
  | 'macciato'
  | 'mocaccino'
  | 'chocolateQuente'
  | 'cubano'
  | 'havaiano'
  | 'arabe'
  | 'irlandes'

export type tag =
  | 'TRADICIONAL'
  | 'GELADO'
  | 'COM LEITE'
  | 'ESPECIAL'
  | 'ALCOÓLICO'

export interface CoffeData {
  id: number
  coffe: string
  info: string
  valor: number
  tags: tag[]
  img: coffImg
  qtd?: number
}

export type PaymentMethodData =
  | 'CARTÃO DE CRÉDITO'
  | 'CARTÃO DE DÉBITO'
  | 'DINHEIRO'
export type BuyStateData = 'VOID' | 'BUYING' | 'BUYED'

export interface Address {
  bairro: string
  cep: string
  cidade: string
  complemento: string
  numero: string
  rua: string
  uf: string
}
export interface PurchaseContextData {
  itens: CoffeData[]
  itensTotal: number
  total: number
  deliveryTax: number
  paymentMethod: PaymentMethodData
  address: Address
  buyState: BuyStateData
  changeBuyState: (buySt: BuyStateData) => void
  changePaymentMethod: (payMethod: PaymentMethodData) => void
  buyCoffe: (coffe: CoffeData) => void
  changeQtd: (coffe: CoffeData) => void
  removeCoffe: (id: number) => void
  completeAddress: (addressData: Address) => void
}
