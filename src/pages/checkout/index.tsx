import { useContext } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { CurrencyDollar, MapPinLine } from '@phosphor-icons/react'

import { PurchaseContext } from '../../contexts/PurchaseContext'
import { AddressForm } from './components/AddressForm'
import { CoffItemCard } from './components/CoffItemCard'
import {
  ActiveType,
  PaymentMethodButton,
} from './components/PaymentMethodButtons'

import {
  CheckoutContainer,
  CheckoutCardContainer,
  TitleContainer,
  AddressTitleContainer,
} from './styles'
import { formatPrice } from '../../utils/priceFormat'

const PAYMENT_METHOD = {
  CARTAO_DE_CREDITO: 'CARTÃO DE CRÉDITO',
  CARTAO_DE_DEBITO: 'CARTÃO DE DÉBITO',
  DINHEIRO: 'DINHEIRO',
} as const

const cepPatern = /^[0-9]{5}-[0-9]{3}$/

const addressFormValidationSchema = zod.object({
  bairro: zod
    .string()
    .nonempty('Esse campo é obrigatório!')
    .min(3, { message: 'Esse campo deve ter no mínimo 3 caracteres' }),
  cep: zod
    .string()
    .nonempty('Esse campo é obrigatório!')
    .regex(cepPatern, { message: 'O CEP deve ter um formato válido' }),
  cidade: zod
    .string()
    .nonempty('Esse campo é obrigatório!')
    .min(3, { message: 'Esse campo deve ter no mínimo 3 caracteres' }),
  complemento: zod.string(),
  numero: zod
    .string()
    .nonempty('Esse campo é obrigatório!')
    .min(1, { message: 'Esse campo deve ter no mínimo 1 caractere' }),
  rua: zod
    .string()
    .nonempty('Esse campo é obrigatório!')
    .min(2, { message: 'Esse campo deve ter no mínimo 2 caracteres' }),
  uf: zod
    .string()
    .nonempty('Esse campo é obrigatório!')
    .min(2, { message: 'Esse campo deve ter no mínimo 2 caracteres' })
    .max(2, { message: 'Esse campo deve ter no máximo 2 caracteres' })
    .toUpperCase(),
})

export type AddressFormData = zod.infer<typeof addressFormValidationSchema>

export function Checkout() {
  const navigate = useNavigate()

  const {
    itens,
    itensTotal,
    total,
    deliveryTax,
    completeAddress,
    changePaymentMethod,
  } = useContext(PurchaseContext)

  const addressFormHook = useForm<AddressFormData>({
    resolver: zodResolver(addressFormValidationSchema),
    defaultValues: {
      bairro: '',
      cep: '',
      cidade: '',
      complemento: '',
      numero: '',
      rua: '',
      uf: '',
    },
  })

  const { handleSubmit } = addressFormHook

  function handleSubmitAdressForm(data: AddressFormData) {
    completeAddress(data)

    navigate('/success')
  }

  function handleSelectPaymentMethod(paymentMethodSelected: ActiveType) {
    changePaymentMethod(PAYMENT_METHOD[paymentMethodSelected])
  }

  return (
    <CheckoutContainer onSubmit={handleSubmit(handleSubmitAdressForm)}>
      <div className="checkoutItem">
        <div>
          <TitleContainer>Complete seu pedido</TitleContainer>

          <CheckoutCardContainer
            $internalgap={'2rem'}
            $alternativeRound={false}
          >
            <AddressTitleContainer $iconCollor="yellow-dark">
              <div>
                <MapPinLine />
                <strong>Endereço de Entrega</strong>
              </div>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </AddressTitleContainer>

            <FormProvider {...addressFormHook}>
              <AddressForm />
            </FormProvider>
          </CheckoutCardContainer>
        </div>

        <div>
          <CheckoutCardContainer
            $internalgap={'2rem'}
            $alternativeRound={false}
          >
            <AddressTitleContainer $iconCollor="purple">
              <div>
                <CurrencyDollar />
                <strong>Pagamento</strong>
              </div>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </AddressTitleContainer>

            <PaymentMethodButton
              $handleSelectPaymentMethod={handleSelectPaymentMethod}
            />
          </CheckoutCardContainer>
        </div>
      </div>

      <div className="checkoutItem">
        <TitleContainer>Cafés selecionados</TitleContainer>

        <CheckoutCardContainer $internalgap={'1.5rem'} $alternativeRound={true}>
          {itens.map((item) => {
            return (
              <div key={item.id}>
                <CoffItemCard key={item.id} item={item} />
                <hr />
              </div>
            )
          })}

          <div className="valorCard">
            <div>
              <p>Total de itens</p>
              <strong>{formatPrice(itensTotal)}</strong>
            </div>

            <div>
              <p>Entrega</p>
              <strong>{formatPrice(deliveryTax)}</strong>
            </div>

            <div className="total">
              <strong>Total</strong>
              <strong>{formatPrice(total)}</strong>
            </div>
          </div>

          <button type="submit" className="confirmButton">
            CONFIRMAR PEDIDO
          </button>
        </CheckoutCardContainer>
      </div>
    </CheckoutContainer>
  )
}
