import { Outlet } from 'react-router-dom'

import { Header } from '../../components/Header'

import { ContentContainer, LayoutContainer, HeaderContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </LayoutContainer>
  )
}
