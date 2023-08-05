import { Bank, CreditCard, Money } from '@phosphor-icons/react'

import { PaymentMethodButtonsContainer } from './styles'
import React, { useState } from 'react'

export type ActiveType = 'CARTAO_DE_CREDITO' | 'CARTAO_DE_DEBITO' | 'DINHEIRO'

interface PaymentMethodButtonProps {
  $handleSelectPaymentMethod: (paymentMethodSelected: ActiveType) => void
}

export function PaymentMethodButton({
  $handleSelectPaymentMethod,
}: PaymentMethodButtonProps) {
  const [active, setActive] = useState<ActiveType>('CARTAO_DE_CREDITO')

  function handleClickButton(e: React.MouseEvent<HTMLButtonElement>) {
    setActive(e.currentTarget.name as ActiveType)
    $handleSelectPaymentMethod(e.currentTarget.name as ActiveType)
  }

  return (
    <PaymentMethodButtonsContainer>
      <button
        type="button"
        className={active === 'CARTAO_DE_CREDITO' ? `active` : ''}
        name={'CARTAO_DE_CREDITO'}
        onClick={handleClickButton}
      >
        <CreditCard />
        CARTÃO DE CRÉDITO
      </button>
      <button
        type="button"
        className={active === 'CARTAO_DE_DEBITO' ? `active` : ''}
        name={'CARTAO_DE_DEBITO'}
        onClick={handleClickButton}
      >
        <Bank />
        CARTÃO DE DÉBITO
      </button>
      <button
        type="button"
        className={active === 'DINHEIRO' ? `active` : ''}
        name={'DINHEIRO'}
        onClick={handleClickButton}
      >
        <Money />
        DINHEIRO
      </button>
    </PaymentMethodButtonsContainer>
  )
}
