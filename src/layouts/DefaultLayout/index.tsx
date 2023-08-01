import { Outlet } from 'react-router-dom'

import { Header } from '../../components/Header'

import { ContentContainer, HeaderContainer } from './styles'

export function DefaultLayout() {
  return (
    <>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </>
  )
}
