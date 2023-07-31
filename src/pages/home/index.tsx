import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'

import introImg from '../../assets/intro-img.png'

import { IntroContainer, BenefitItem } from './styles'

export function Home() {
  return (
    <IntroContainer>
      <div>
        <div className="title">
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>
        <div className="benefits">
          <BenefitItem $itemColor={'yellow-dark'}>
            <span>
              <ShoppingCart weight="fill" />
            </span>
            Compra simples e segura
          </BenefitItem>
          <BenefitItem $itemColor={'base-text'}>
            <span>
              <Package weight="fill" />
            </span>
            Embalagem mantém o café intacto
          </BenefitItem>
          <BenefitItem $itemColor={'yellow'}>
            <span>
              <Timer weight="fill" />
            </span>
            Entrega rápida e rastreada
          </BenefitItem>
          <BenefitItem $itemColor={'purple'}>
            <span>
              <Coffee weight="fill" />
            </span>
            O café chega fresquinho até você
          </BenefitItem>
        </div>
      </div>
      <img src={introImg} alt="" />
    </IntroContainer>
  )
}
